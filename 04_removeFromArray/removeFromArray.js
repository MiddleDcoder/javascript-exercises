const removeFromArray = function(arrayValue, ...removeArgs) {

    return arrayValue.filter(item => !removeArgs.includes(item));
    
};

// Do not edit below this line
module.exports = removeFromArray;
