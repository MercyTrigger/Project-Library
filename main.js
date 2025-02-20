// modal box section
const dialog = document.querySelector("dialog")

const addBook = document.querySelector(".add-book");

const exitModal = document.querySelector(".exit-modal");

addBook.addEventListener("click", () => {
    document.querySelector(".parent-dialog").style.display = "flex"
    dialog.showModal()
})

exitModal.addEventListener("click", () => {
    dialog.close()
    document.querySelector(".parent-dialog").style.display = "none"
})


// const myLibrary = [];

// function Book(book) {
//     this.book = book;
// }


// function addBookToLibraary(book) {
//     newBook.prototype.book() {
//         Book.call(book)
//     }
// }





