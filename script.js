let myLibrary = [];

const contentBody = document.querySelector("#contentBody");
const newBook = document.querySelector("button");
const body = document.querySelector("body");

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

displayBooks();

newBook.addEventListener("click", () => console.log(this));

function openForm() {
    const bookForm = document.createElement("form");
    bookForm.setAttribute("action", ".");
    bookForm.setAttribute("method", "post");
    body.appendChild(bookForm);
    
    const LabelTitle = document.createElement("label");
    LabelTitle.setAttribute("for", "title");
    LabelTitle.textContent = "Title: ";
    bookForm.appendChild(LabelTitle);
    const InputTitle = document.createElement("input");
    InputTitle.setAttribute("type", "text");
    InputTitle.setAttribute("id", "title");
    InputTitle.setAttribute("required", "");
    bookForm.appendChild(InputTitle);

    const LabelAuthor = document.createElement("label");
    LabelAuthor.setAttribute("for", "author");
    LabelAuthor.textContent = "Author: ";
    bookForm.appendChild(LabelAuthor);
    const InputAuthor = document.createElement("input");
    InputAuthor.setAttribute("type", "text");
    InputAuthor.setAttribute("id", "author");
    InputAuthor.setAttribute("required", "");
    bookForm.appendChild(InputAuthor);

    const LabelNOP = document.createElement("label");
    LabelNOP.setAttribute("for", "NOP");
    LabelNOP.textContent = "Number Of Pages: ";
    bookForm.appendChild(LabelNOP);
    const InputNOP = document.createElement("input");
    InputNOP.setAttribute("type", "number");
    InputNOP.setAttribute("id", "NOP");
    InputNOP.setAttribute("required", "");
    bookForm.appendChild(InputNOP);

    const LabelStatus = document.createElement("label");
    LabelStatus.setAttribute("for", "read");
    LabelStatus.textContent = "did you read it already?";
    bookForm.appendChild(LabelStatus);
    const InputStatus = document.createElement("input");
    InputStatus.setAttribute("type", "checkbox");
    InputStatus.setAttribute("id", "read");
    bookForm.appendChild(InputStatus);

}

openForm()