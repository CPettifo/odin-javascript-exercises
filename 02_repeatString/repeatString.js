const repeatString = function(input, x) {
    if (x < 0) {
        return "ERROR";
    }
    let string = "";
    for (let i = 0; i < x; i++) {
        string += input;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
