import { TrainingDto } from "../../data/dto/Training/TrainingDto";
import { getGeocode } from "../../data/utils/geocode";
import { getUniqueValue } from "../../data/utils/getUniqueValue";

const trainingInitialize = async (jsonData) => {
    let result = []
    for (let i = 0; i < jsonData.length; i++) {
        const obj = jsonData[i];

        let iconName = obj.tags.length > 0 ? obj.tags[0] : "Unknown"
        let iconClickedName = iconName + "Clicked";
        let popupImg
        // obj.tags[0] + 'Img'
        let position
        let geocode = await getGeocode(obj.location)

        if (geocode.data.status === "OK") {
            position = geocode.data.results[0].geometry.location
        } else {
            continue
        }

        result.push(
            TrainingDto(obj.id, obj.slug, obj.title, obj.host,
                obj.description, obj.province, obj.location, obj.tags, obj.eligibility, obj.relatedCareers,
                obj.programFormat, obj.certType, obj.programLength, obj.programCost, obj.courseLoad,
                obj.language, obj.isBookmarked, obj.hostLogo, obj.programWebsiteUrl,
                iconName, iconClickedName, position)
        )
    }
    return result
}

const setTrainingsReducer = (state, action) => {
    state.trainings = action.payload
    state.filteredTrainings = action.payload

    setGroupedTrainings(state)
}

const setGroupedTrainings = (state) => {
    state.groupedTrainings = []

    const uniqueLocs = getUniqueValue(state.trainings, "location");

    for (let i = 0; i < uniqueLocs.length; i++) {
        const element = uniqueLocs[i];
        const group = state.filteredTrainings.filter(x => x.location === element);
        if (group.length > 0) {
            state.groupedTrainings.push(group)
        }
    }
}

export { trainingInitialize, setTrainingsReducer, setGroupedTrainings }