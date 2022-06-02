const ProjectDto = (id, slug, title, developerName, developerUrl, tags,
    location, status, expectedBy, since, numConstructionJobs, numPermanentJobs, isBookmarked,
    icon, iconClicked, position, popupImg) => {
    return {
        id: id,
        slug: slug,
        title: title,
        developerName: developerName,
        developerUrl: developerUrl,
        tags: tags,
        location: location,
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

const Projects = (projects = []) => {
    return {
        projects: projects
    }
}

export { ProjectDto, Projects }