const sumAll = function(firstNum, secondNum) {

    if (firstNum < 0 || secondNum < 0) return 'ERROR';

    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return 'ERROR';

    if(firstNum > secondNum) [firstNum, secondNum] = [secondNum, firstNum];

    let finalSum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        finalSum += i;
    }
    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;