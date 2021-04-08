function getTotalBooksCount(books) {
  let totalBooks = 0
  for (let book of books) {
    totalBooks++;
  }
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].returned === false) {
        borrowedBooks++;
      }
    }
  }
  return borrowedBooks
}

//HELPER FUNCTION////////////
function sortObject(object) {
  let objectKey = Object.keys(object);
  return objectKey.sort((itemA, itemB) => {
    if(object[itemA] > object[itemB]) {
      return -1;
    }else if (object[itemB] > object[itemA]) {
      return 1;
    }else{
      return 0;
    }
  });
}
/////////////////////////////

function getMostCommonGenres(books) {
  let result = books.reduce((acc, {genre}) => {
    if (acc[genre]) {
      acc[genre] += 1;
    }else{
      acc[genre] = 1;
    }
    return acc;
  }, {});
  let sorted = sortObject(result);

  return sorted.map((item) => ({name: item, count: result[item]})).slice(0, 5);
}

function getMostPopularBooks(books) {
  const allPopularBooks = books.reduce((acc, {title}, counter) => {
    acc[title] = books[counter].borrows.length;
    counter++;
    return acc;
  }, {});

  const sortedBooks = sortObject(allPopularBooks);

  let booksArray = sortedBooks.map((item) =>
  ({name: item, count: allPopularBooks[item]})).slice(0, 5);

  return booksArray
}

function getMostPopularAuthors(books, authors) {
  const allAuthorsById = books.reduce((acc, {authorId}, counter, authorNumberToName) => {
    for (let i = 0; i < authors.length; i++) {
      if (books[counter].authorId === authors[i].id) {
        authorNumberToName = Object.values(authors[i].name).join(' ');
      }
    }
    if (acc[authorNumberToName]) {
      acc[authorNumberToName] += books[counter].borrows.length;
    }
    else {
      acc[authorNumberToName] = books[counter].borrows.length;
    }
    counter++;
    return acc;
  }, {});

  const sortedAuthors = sortObject(allAuthorsById);

  let authorsArray = sortedAuthors.map((item) =>
  ({name: item, count: allAuthorsById[item]})).slice(0, 5);

  return authorsArray;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
