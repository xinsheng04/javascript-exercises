const fibonacci = function(member) {
    if(member<0) return "OOPS";
    else if (member == 0) return 0;
    else if (member == 1) return 1;
    else return fibonacci(member - 2) + fibonacci(member - 1);
};

// Do not edit below this line
module.exports = fibonacci;
