const removeBlankCook = (data) => {
    return data.filter(e => e.cookTime !== '');
}

const removeBlankPrep = (data) => {
    return data.filter(e => e.prepTime !== '');
}
