let myLibrary = [];

const contentBody = document.querySelector("#contentBody");

function Book(title, author, numberOfPages, status) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.status = status
};

function addBookToLibrary(book) {
    myLibrary.push(book)
};

// temporary code to better see array

const waves = new Book("waves", "ted", 10, "reading");
const princes = new Book("princes", "jonas", 30, "dropped");

addBookToLibrary(waves);
addBookToLibrary(princes);


// end of temporary code

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
};