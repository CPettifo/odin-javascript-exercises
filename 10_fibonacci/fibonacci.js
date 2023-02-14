const fibonacci = function(x) {
    if (x < 0) {
        return "OOPS"
    }
    x = +x;
    if (x === 1 || x === 2) {
        return 1;
    }
    const fib = [1, 1];
    let num = 0;
    for (let i = 2; i < x; i++) {
        num = fib[i-1] + fib[i-2];
        fib.push(num);
    }
    return num;
};

// Do not edit below this line
module.exports = fibonacci;
