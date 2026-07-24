const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== 'number' ||
        !(num1>=0) || !(num2>=0) || 
        Math.floor(num1)!==num1 || Math.floor(num2)!==num2) {
        return "ERROR"
    }
    else {
        sum = 0
        if (num1<num2) {
            low = num1
            high = num2
        }
        else {
            low = num2
            high = num1
        }
            for (let i=low;i<=high;i++) {
                sum+=i
            }
            return sum
        }
};

// Do not edit below this line
module.exports = sumAll;
