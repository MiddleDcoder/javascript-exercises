const leapYears = function(year) {

    if (year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)) {
        // leap years
        return true;
    } else {
         // not leap years
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
