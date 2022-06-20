const ProjectsFilter = (province, tags, searchValue) => {
    return {
        searchValue: searchValue,
        province: province,
        tags: tags
    }
}

const DefaultProjsFilter = ProjectsFilter([], [], "");

export { ProjectsFilter, DefaultProjsFilter }