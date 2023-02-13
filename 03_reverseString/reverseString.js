const reverseString = function(string) {
    let length = string.length;
    let reverse = "";
    for (let i = length; i > -1; i --) {
        reverse += string.charAt(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
