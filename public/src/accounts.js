function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
  console.log(accounts)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1);
  console.log(accounts)
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].id === account.id) {
        totalBorrows++
      }
    }
  }
  return totalBorrows
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = books.filter((book) => {
    return borrowedBook = book.borrows.some((borrow) =>
    borrow.id == account.id && borrow.returned == false)
  })

  let fullBookInfo = checkedOut.map((bookInfo) => {
    let {authorId} = bookInfo
    let [author] = authors.filter((author) => author.id === authorId)
    bookInfo['author'] = author
    return bookInfo
  })
  return fullBookInfo
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
