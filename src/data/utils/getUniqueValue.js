function getUniqueValue(array, property) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const value = element[property]

        if (Array.isArray(value)) {
            for (let j = 0; j < value.length; j++) {
                if (!result.includes(value[j])) {
                    result.push(value[j])
                }
            }
        } else {
            if (!result.includes(value)) {
                result.push(value)
            }
        }
    }

    return result
}

export { getUniqueValue }