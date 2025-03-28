const removeFromArray = function(arrayValue, ...removeArgs) {
    const result = [];
    
    for (const item of arrayValue) {
        if (!removeArgs.includes(item)) {
            result.push(item);
        }
    }
    
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
