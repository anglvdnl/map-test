import { createSlice } from '@reduxjs/toolkit';
import { Projects } from '../../data/dto/Projects/ProjectDto';
import { setProjectsReducer as setProjects, addFilterReducer as addFilters, removeFilterReducer as removeFilter } from '../reducers/projectsReducers';

const projectsSlice = createSlice({
    name: "_proj",
    initialState: Projects,
    reducers: {
        setProjects,
        addFilters,
        removeFilter,
    }
})

const projectsActions = projectsSlice.actions;

export { projectsSlice, projectsActions }