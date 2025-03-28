const sumAll = function(firstNum, secondNum) {

    let finalSum = 0;

    if (firstNum < 0 || secondNum < 0) return 'ERROR';

    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return 'ERROR';

    if (typeof firstNum == "string" || typeof secondNum == "string") return 'ERROR';

    if (firstNum > secondNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            finalSum += i;
        }
        return finalSum;
    } else {
        for (let i = firstNum; i <= secondNum; i++) {
            finalSum += i;
        }
        return finalSum;
    }


};

// Do not edit below this line
module.exports = sumAll;