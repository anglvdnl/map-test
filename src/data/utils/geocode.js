import axios from "axios"

function getGeocode(location) {
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            language: "en",
            address: location,
            key: 'AIzaSyBl2AvFtTuAen2S67EWxHwqjg9CqRGON94'
        }
    })
}

export { getGeocode }