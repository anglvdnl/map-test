import axios from 'axios';
import { ProjectDto, DefaultProject } from '../../data/dto/Projects/ProjectDto'

function getGeocode(location) {
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      language: "en",
      address: location,
      key: 'AIzaSyBl2AvFtTuAen2S67EWxHwqjg9CqRGON94'
    }
  })
}

const projectsInitialize = async (jsonData) => {
  let result = []
  for (let i = 0; i < jsonData.length; i++) {
    const obj = jsonData[i];

    let iconName = obj.tags.length > 0 ? obj.tags[0] : "Unknown"
    let iconClickedName = iconName + "Clicked";
    let popupImg = obj.tags[0] + 'Img'
    let position
    let geocode = await getGeocode(obj.location)

    if (geocode.data.status === "OK") {
      position = geocode.data.results[0].geometry.location
    }

    result.push(
      ProjectDto(obj.id, obj.slug, obj.title, obj.developerName,
        obj.developerUrl, obj.tags, obj.location, obj.province, obj.status, obj.expectedBy,
        obj.since, obj.numConstructionJobs, obj.numPermanentJobs, obj.isBookmarked,
        iconName, iconClickedName, position, popupImg)
    )
  }
  return result
}

const setProjectsReducer = (state, action) => {
  state.projects = action.payload
  state.filteredProjects = action.payload
}

const addFilterReducer = (state, action) => {
  const value = action.payload

  if (!state.provinceFilters.includes(value)) {
    state.provinceFilters.push(value)
    state.filteredProjects = state.projects.filter(x => state.provinceFilters.includes(x.province))
  }
}

const removeFilterReducer = (state, action) => {
  const value = action.payload

  if (state.provinceFilters.includes(value)) {
    let index = state.provinceFilters.indexOf(value)
    if (index > -1) {
      state.provinceFilters.splice(index, 1)

      if (state.provinceFilters.length === 0) {
        state.filteredProjects = state.projects
      } else {
        state.filteredProjects = state.projects.filter(x => state.provinceFilters.includes(x.province))
      }
    }
  }
}

export { projectsInitialize, setProjectsReducer, addFilterReducer, removeFilterReducer }