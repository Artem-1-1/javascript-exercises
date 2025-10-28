const fibonacci = function(n) {
    let count;
    if (typeof n !== 'number') {
        count = parseInt(n);
    }
    else {
        count = n;
    }
    
    if (count < 0) return 'OOPS';
    if (count === 0) return 0;

    let previousNum = 1;
    let nextNum = 0;

    for (i = 2;i <= count; i++) {
        let current = previousNum + nextNum;
        nextNum =  previousNum;
        previousNum = current;
    }
    return previousNum;
};

// Do not edit below this line
module.exports = fibonacci;
