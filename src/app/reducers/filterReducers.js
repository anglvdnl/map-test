import { DefaultProjsFilter } from "../../data/dto/Projects/ProjectsFilter"

//Projects
const updateProjectSearchReducer = (state, action) => {
    state.filter.searchValue = action.payload

    state.filteredProjects = getFilteredProjects(state.projects, state.filter)
}

const addProjectFilterReducer = (state, action) => {
    const valuePair = action.payload

    if (!state.filter[valuePair.type].includes(valuePair.value)) {
        state.filter[valuePair.type].push(valuePair.value)
        state.filteredProjects = getFilteredProjects(state.projects, state.filter);
    }
}

const removeProjectFilterReducer = (state, action) => {
    const valuePair = action.payload

    if (state.filter[valuePair.type].includes(valuePair.value)) {
        let index = state.filter[valuePair.type].indexOf(valuePair.value);

        if (index > -1) {
            state.filter[valuePair.type].splice(index, 1);
            state.filteredProjects = getFilteredProjects(state.projects, state.filter);
        }
    }
}

const resetProjectFiltersReducer = (state) => {
    state.filteredProjects = state.projects;
    state.filter = DefaultProjsFilter;
}

const getFilteredProjects = (projects, filter) => {
    const filteredProjects = projects.filter(project => {

        const isFilteredByProvince = () => {
            return filter.province.length === 0
                ? true
                : filter.province.includes(project.province);
        }

        const isFilteredByTag = () => {
            for (let i = 0; i < project.tags.length; i++) {
                if (filter.tags.includes(project.tags[i])) {
                    return true;
                }
            }
            return filter.tags.length === 0;
        }

        const isFilteredBySearch = () => {
            return filter.searchValue === ''
                ? true
                : project.title.toLowerCase().includes(filter.searchValue.toLowerCase())

        }

        return isFilteredByProvince() && isFilteredByTag() && isFilteredBySearch();
    });

    return filteredProjects;
}

//Trainings
const addTrainingFilterReducer = (state, action) => {

}

const removeTrainingFilterReducer = (state, action) => {

}

const resetTrainingFiltersReducer = (state, action) => {

}

export { updateProjectSearchReducer, addProjectFilterReducer, removeProjectFilterReducer, resetProjectFiltersReducer, addTrainingFilterReducer, removeTrainingFilterReducer, resetTrainingFiltersReducer }