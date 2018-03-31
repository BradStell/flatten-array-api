// function: flattens input array
// accepts: array of arrays of integers
// returns: flattened array or error if array was not in correct format
const flattenArray = (inputArray) => {
    return new Promise((resolve, reject) => {
        if (!inputArray) {
            reject({ statusCode: 400, message: `No 'data' property found on request body` });
        }

        if (!(inputArray instanceof Array)) {
            reject({ statusCode: 400, message: `data ${inputArray} is not an array`});
        }

        try {
            const flattenedArray = _flattenArray(inputArray);
            resolve(flattenedArray);
        } catch (err) {
            reject({ statusCode: 400, message: err.message });
        }
    });
};

const _flattenArray = (array, flatArray = []) => {
    array.forEach(element => {
        if (element instanceof Array) _flattenArray(element, flatArray);                                // item is an array
        else if (_isInteger(element)) flatArray.push(element);                                          // item is an integer
        else throw Error(`Item ${element} is of type ${typeof element} and needs to be an integer`);    // item is not an array or an integer: throw error
    });

    return flatArray;
};

const _isInteger = (item) => {
    return (
        _isNumber(item) &&              // is number
        parseInt(item, 10) === item     // is integer
    );
}

const _isNumber = (item) => {
    return isFinite(String(item));
}

module.exports.flattenArray = flattenArray;
