const removeFromArray = function(array, a, b = undefined, c = undefined, d = undefined) {

    if (a == undefined || (array.includes(a) == false))
        a = undefined;
    else {
        array.splice(array.indexOf(a), 1);
    }

    if (b == undefined || (array.includes(b) == false)) {
        b = undefined;
    }
    else {
        array.splice(array.indexOf(b), 1);
    }
    if (c == undefined || (array.includes(c) == false)) {
        c = undefined;
    }
    else {
        array.splice(array.indexOf(c), 1);
    }
    if (d == undefined || (array.includes(d) == false)) {
        d = undefined;
    }
    else {
        array.splice(array.indexOf(d), 1)
    }
    return array;


}

// Do not edit below this line
module.exports = removeFromArray;
