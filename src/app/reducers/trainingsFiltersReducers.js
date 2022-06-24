import { DefaultTrainingsFilter } from "../../data/dto/Training/TrainingFilter"
import { setGroupedTrainings } from "./trainingReducers"

const updateTrainingSearchReducer = (state, action) => {
    state.filter.searchValue = action.payload

    state.filteredTrainings = getFilteredTrainings(state.trainings, state.filter)
}

const addTrainingFilterReducer = (state, action) => {
    const valuePair = action.payload

    if (!state.filter[valuePair.type].includes(valuePair.value)) {
        state.filter[valuePair.type].push(valuePair.value)
        state.filteredTrainings = getFilteredTrainings(state.trainings, state.filter)
    }

    setGroupedTrainings(state)
}

const removeTrainingFilterReducer = (state, action) => {
    const valuePair = action.payload

    if (state.filter[valuePair.type].includes(valuePair.value)) {
        let index = state.filter[valuePair.type].indexOf(valuePair.value);

        if (index > -1) {
            state.filter[valuePair.type].splice(index, 1);
            state.filteredTrainings = getFilteredTrainings(state.trainings, state.filter);
        }
    }

    setGroupedTrainings(state)
}

const resetTrainingFiltersReducer = (state) => {
    state.filteredTrainings = state.trainings;
    state.filter = DefaultTrainingsFilter;

    setGroupedTrainings(state)
}

const getFilteredTrainings = (trainings, filter) => {

    return trainings.filter(training => {

        const isFilteredByProvince = () => {
            return filter.province.length === 0
                ? true
                : filter.province.includes(training.province)
        }

        const isFilteredByTag = () => {
            for (let i = 0; i < training.tags.length; i++) {
                if (filter.tags.includes(training.tags[i])) {
                    return true
                }
            }
            return filter.tags.length === 0
        }

        const isFilteredBySearch = () => {
            return filter.searchValue === ''
                ? true
                : training.title.toLowerCase().includes(filter.searchValue.toLowerCase())
        }

        const isFilteredByCertType = () => {
            return filter.certType.length === 0
                ? true
                : filter.certType.includes(training.certType)
        }

        const isFilteredByLanguage = () => {
            return filter.language.length === 0
                ? true
                : filter.language.includes(training.language)
        }

        return isFilteredByProvince() && isFilteredByTag() && isFilteredBySearch() && isFilteredByCertType() && isFilteredByLanguage()
    })
}

export { updateTrainingSearchReducer, addTrainingFilterReducer, removeTrainingFilterReducer, resetTrainingFiltersReducer }