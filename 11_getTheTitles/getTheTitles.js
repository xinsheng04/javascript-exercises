const getTheTitles = function(books) {
    const title = [];
    books.forEach(book => {
        title.push(book.title);
    });
    return title;
};

// Do not edit below this line
module.exports = getTheTitles;
