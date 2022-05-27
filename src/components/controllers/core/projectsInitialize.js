import axios from 'axios';
import { ProjectModel } from '../../../data/models/ProjectModel'

function getGeocode(location) {
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      address: location,
      key: 'AIzaSyBl2AvFtTuAen2S67EWxHwqjg9CqRGON94'
    }
  })
}

export async function projectsInitialize(jsonData) {

  let result = [];

  for (let i = 0; i < jsonData.length; i++) {
    const obj = jsonData[i];

    let iconName = obj.tags.length > 0 ? obj.tags[0] : "Unknown";
    let iconClickedName = iconName + "Clicked";
    let popupImg = obj.tags[0] + 'Img'
    let position
    let geocode = await getGeocode(obj.location)

    if (geocode.data.status === "OK") {
      position = geocode.data.results[0].geometry.location
    } else {
      console.log(`Wrong city name: ${obj.location}`)
      continue
    }

    result.push(
      new ProjectModel(obj.id, obj.slug, obj.title, obj.developerName,
        obj.developerUrl, obj.tags, obj.location, obj.status, obj.expectedBy,
        obj.since, obj.numConstructionJobs, obj.numPermanentJobs, obj.isBookmarked,
        iconName, iconClickedName, position, popupImg)
    );
  }
  return result
}