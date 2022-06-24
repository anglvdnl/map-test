import { createSlice } from '@reduxjs/toolkit';
import { Trainings } from '../../data/dto/Training/TrainingDto';
import { setTrainingsReducer as setTrainings, setGroupedTrainings as groupTrainings } from '../reducers/trainingReducers'
import {
    addTrainingFilterReducer as addFilters,
    removeTrainingFilterReducer as removeFilter, resetTrainingFiltersReducer as resetFilters,
    updateTrainingSearchReducer as updateSearch
} from '../reducers/trainingsFiltersReducers';

const trainingsSlice = createSlice({
    name: "_train",
    initialState: Trainings,
    reducers: {
        setTrainings,
        addFilters,
        removeFilter,
        resetFilters,
        updateSearch,
        groupTrainings
    }
})

const trainingsActions = trainingsSlice.actions;

export { trainingsSlice, trainingsActions }