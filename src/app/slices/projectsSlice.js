import { createSlice } from '@reduxjs/toolkit';
import { Projects } from '../../data/dto/Projects/ProjectDto';
import { setProjectsReducer as setProjects } from '../reducers/projectsReducers'
import {
    addProjectFilterReducer as addFilters,
    removeProjectFilterReducer as removeFilter, resetProjectFiltersReducer as resetFilters,
    updateProjectSearchReducer as updateSearch
} from '../reducers/filterReducers';

const projectsSlice = createSlice({
    name: "_proj",
    initialState: Projects,
    reducers: {
        setProjects,
        addFilters,
        removeFilter,
        resetFilters,
        updateSearch
    }
})

const projectsActions = projectsSlice.actions;

export { projectsSlice, projectsActions }