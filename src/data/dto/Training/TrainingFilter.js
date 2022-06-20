const TrainingsFilter = (provice, tags) => {
    return {
        province: provice,
        tags: tags
    }
}

const DefaultTrainingsFilter = TrainingsFilter([], []);

export { TrainingsFilter, DefaultTrainingsFilter }