export const ProjectModel = function (id, slug, title, developerName, developerUrl, tags,
    location, status, expectedBy, since, numConstructionJobs, numPermanentJobs, isBookmarked,
    icon, iconClicked, position, popupImg) {
    this.id = id;
    this.slug = slug;
    this.title = title;
    this.developerName = developerName;
    this.developerUrl = developerUrl;
    this.tags = tags;
    this.location = location;
    this.status = status;
    this.expectedBy = expectedBy;
    this.since = since;
    this.numConstructionJobs = numConstructionJobs;
    this.numPermanentJobs = numPermanentJobs;
    this.isBookmarked = isBookmarked;
    this.icon = icon;
    this.iconClicked = iconClicked;
    this.position = position;
    this.popupImg = popupImg;
};