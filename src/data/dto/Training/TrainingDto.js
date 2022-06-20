import { DefaultTrainingsFilter } from "./TrainingFilter"

const TrainingDto = (id, slug, title, host, description, province,
    location, tags, eligibility, relatedCareers, programFormat,
    certType, programLength, programCost, courseLoad, language, isBookmarked,
    hostLogo, programWebsiteUrl, icon, iconClicked, position) => {
    return {
        id: id,
        slug: slug,
        title: title,
        host: host,
        description: description,
        province: province,
        location: location,
        tags: tags,
        eligibility: eligibility,
        relatedCareers: relatedCareers,
        programFormat: programFormat,
        certType: certType,
        programLength: programLength,
        programCost: programCost,
        courseLoad: courseLoad,
        language: language,
        isBookmarked: isBookmarked,
        hostLogo: hostLogo,
        programWebsiteUrl: programWebsiteUrl,
        icon: icon,
        iconClicked: iconClicked,
        position: position,
    }
}

const Trainings = (trainings = [], filteredTrainings = [], filter = DefaultTrainingsFilter, groupedTrainings = []) => {
    return {
        trainings: trainings,
        filteredTrainings: filteredTrainings,
        filter: filter,
        groupedTrainings: groupedTrainings
    }
}

export { TrainingDto, Trainings }