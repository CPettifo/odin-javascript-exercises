const sumAll = function(x, y) {
    if (x < 0 || y < 0 || typeof(x) != "number" || typeof(y) != "number") {
        return "ERROR";
    }
    
    let sum = 0;
    if (x > y) {
        sum = x;
        x = y;
        y = sum;
    }
    sum = 0;
    for (let i = x; i <= y; i ++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
