const TrainingsFilter = (searchValue, provice, tags, certType, language) => {
    return {
        searchValue: searchValue,
        province: provice,
        tags: tags,
        certType: certType,
        language: language
    }
}

const DefaultTrainingsFilter = TrainingsFilter("", [], [], [], []);

export { TrainingsFilter, DefaultTrainingsFilter }