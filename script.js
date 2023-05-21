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
    const book = [];
    for (let i = 0; i < myLibrary.length; i++) {
        book[i] = document.createElement("div");
    book[i].setAttribute("style", "white-space: pre;");
    contentBody.appendChild(book[i]);
    book[i].textContent = `Title: ${myLibrary[i].title} \r\nAuthor: ${myLibrary[i].author} \r\nNumber of pages: ${myLibrary[i].numberOfPages} \r\nStatus: ${myLibrary[i].status}`;
    }
};

displayBooks()
