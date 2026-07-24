const removeFromArray = function(arr, ...theArgs) {
    let newArr = []
    for (let stay_val of arr) {
        if (theArgs.includes(stay_val)) {
            continue
        }
        else {
            newArr.push(stay_val)
        }
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
