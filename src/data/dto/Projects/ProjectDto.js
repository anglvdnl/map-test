import { DefaultProjsFilter } from "./ProjectsFilter";

const ProjectDto = (id, slug, title, developerName, developerUrl, tags,
    location, province, status, expectedBy, since, numConstructionJobs, numPermanentJobs, isBookmarked,
    icon, iconClicked, position, popupImg) => {
    return {
        id: id,
        slug: slug,
        title: title,
        developerName: developerName,
        developerUrl: developerUrl,
        tags: tags,
        location: location,
        province: province,
        status: status,
        expectedBy: expectedBy,
        since: since,
        numConstructionJobs: numConstructionJobs,
        numPermanentJobs: numPermanentJobs,
        isBookmarked: isBookmarked,
        icon: icon,
        iconClicked: iconClicked,
        position: position,
        popupImg: popupImg
    }
};

const Projects = (projects = [], filteredProjects = [], filter = DefaultProjsFilter) => {
    return {
        projects: projects,
        filteredProjects: filteredProjects,
        filter: filter,
    }
}

export { ProjectDto, Projects }