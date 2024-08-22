const sumAll = function(num1, num2) {
    //check if numbers are positive integers
    if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0)
        return "ERROR";
    let total;
    if(num1<num2){
        total = num1;
        for(let i = num1+1; i<=num2; i++)
            total += i;
    }
    else{
        total = num2;
        for(let i = num2+1; i<=num1; i++)
            total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
