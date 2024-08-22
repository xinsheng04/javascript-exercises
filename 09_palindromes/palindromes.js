const palindromes = function (text) {
    const phrase = text.replace(/[\s,.;:!?'()\[\]{}<>]/g, '').toUpperCase();
    let reverse = "";
    for(let i=phrase.length-1; i>=0; i--)
        reverse += phrase.charAt(i);
    return phrase === reverse;
};

// Do not edit below this line
module.exports = palindromes;
