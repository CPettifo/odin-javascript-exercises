const palindromes = function (string) {
    
    string = string.toLowerCase();
    string = string.replace(/[.,!]/g, "");
    string = string.replace(/\s/g, "");
    let j = string.length - 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[j]) {
            return false;
        }
        j-= 1;
    }
    return true;
};



// Do not edit below this line
module.exports = palindromes;
