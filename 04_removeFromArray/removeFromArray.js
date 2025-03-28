const removeFromArray = function(arrayValue, ...removeNum) {
    // Slice the array into two parts: before and after the element to remove
    const before = arrayValue.slice(0, removeNum - 1);   // Elements before the target
    const after = arrayValue.slice(removeNum);           // Elements after the target
    
    // Combine the two parts into a new array
    const newArray = [...before, ...after];

    return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
