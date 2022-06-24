import axios from 'axios';
import { ProjectDto } from '../../data/dto/Projects/ProjectDto'
import { getGeocode } from '../../data/utils/geocode';

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

export { projectsInitialize, setProjectsReducer }