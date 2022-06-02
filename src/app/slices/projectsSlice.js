import { createSlice } from '@reduxjs/toolkit';
import { Projects } from '../../data/dto/Projects/ProjectDto';
import { setProjectsReducer as setProjects } from '../reducers/projectsReducers';

const projectsSlice = createSlice({
    name: "_proj",
    initialState: Projects,
    reducers: {
        setProjects,
    }
})

const projectsActions = projectsSlice.actions;

export { projectsSlice, projectsActions }