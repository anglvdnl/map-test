import { createSlice } from '@reduxjs/toolkit';
import { Trainings } from '../../data/dto/Training/TrainingDto';
import { setTrainingsReducer as setTrainings, setGroupedTrainings as groupTraings } from '../reducers/trainingReducers'
import {
    addTrainingFilterReducer as addFilters,
    removeTrainingFilterReducer as removeFilter, resetTrainingFiltersReducer as resetFilters,
} from '../reducers/filterReducers';

const trainingsSlice = createSlice({
    name: "_train",
    initialState: Trainings,
    reducers: {
        setTrainings,
        groupTraings,
        addFilters,
        removeFilter,
        resetFilters
    }
})

const trainingsActions = trainingsSlice.actions;

export { trainingsSlice, trainingsActions }