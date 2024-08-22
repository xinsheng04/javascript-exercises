const repeatString = function(string, num) {
    let word = string;
    for(let i=1; i<num; i++)
        word = word+string;
    return word;
};

// Do not edit below this line
module.exports = repeatString;
