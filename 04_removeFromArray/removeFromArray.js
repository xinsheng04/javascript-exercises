const removeFromArray = function(arr, ...obj) {
    const newArr = [];
    arr.forEach(element => {
        if(!obj.includes(element))
            newArr.push(element);
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
