export const isInArr = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) return true
    }
    return false;
}

export const deleteElement = (arr, index) => {
    let new_arr = []
    for (const arrElem of arr) {
        if (arrElem.id !== index) {
            new_arr.push(arrElem);
        }
    }
    return new_arr;
}