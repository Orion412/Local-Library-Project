function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce((acc, book) => {
    const [borrowedArray, returnedArray] = acc;
    if(book.borrows[0].returned === false) {
      borrowedArray.push(book);
    } else {
      returnedArray.push(book);
    }
    console.log(acc)
    return acc;
  },
  [[], []])
}

function getBorrowersForBook(book, accounts) {
  let finalResult = accounts.reduce((acc, currentAccount) => {
    let accountId = currentAccount.id;
    for (let i = 0; i < book.borrows.length; i++) {
      if (accountId === book.borrows[i].id && acc.length < 10) {
        currentAccount['returned'] = book.borrows[i].returned;
        acc.push(currentAccount);
      }
    }
    return acc;
  }, []);
  console.log(finalResult);
  return finalResult;
}
    

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
