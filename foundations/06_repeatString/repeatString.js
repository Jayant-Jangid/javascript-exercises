const repeatString = function(str, num) {
    fin = ''
    if (num<0) {
        return "ERROR"
    }
    for (let i=1;i<=num;i++) {
        fin+=str
    }
    return fin
};

// Do not edit below this line
module.exports = repeatString;
