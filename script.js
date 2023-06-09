let myLibrary = [];
let InputTitle = undefined;
let InputAuthor = undefined;
let InputNOP = undefined;
let InputStatus = false;
let bookForm = "";

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
    myLibrary.push(book);
};

function displayBooks() {
    const book = [];
    const button = [];
    const divs = document.querySelectorAll("div");
    divs.forEach(div => contentBody.removeChild(div));
    let isRead = "unread"
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].status === true) {isRead = "read"}
        else if (myLibrary[i].status === false) {isRead = "unread"}
        book[i] = document.createElement("div");
        book[i].setAttribute("data-index", `${[i]}`)
        book[i].setAttribute("style", "white-space: pre;");
        contentBody.appendChild(book[i]);
        book[i].textContent = `Title: ${myLibrary[i].title} \r\nAuthor: ${myLibrary[i].author} \r\nNumber of pages: ${myLibrary[i].numberOfPages} \r\nStatus: ${isRead}`;

        book[i].addEventListener("click", () => {
            if (myLibrary[i].status === true) {myLibrary[i].status = false}
            else if (myLibrary[i].status === false) {myLibrary[i].status = true}
            displayBooks()
        })

        button[i] = document.createElement("button");
        button[i].setAttribute("type", "button");
        button[i].textContent = "remove";
        book[i].appendChild(button[i]);
        button[i].addEventListener("click", () => {
            let bookIndex = book[i].dataset.index;
            myLibrary.splice(bookIndex, 1);
            displayBooks();
        });
    };
};

newBook.addEventListener("click", openForm);

function openForm() {
    if (bookForm !== "") {return}
    else {
        bookForm = document.createElement("form");
        bookForm.setAttribute("action", ".");
        bookForm.setAttribute("method", "post");
        body.appendChild(bookForm);
        
        const LabelTitle = document.createElement("label");
        LabelTitle.setAttribute("for", "title");
        LabelTitle.textContent = "Title: ";
        bookForm.appendChild(LabelTitle);
        InputTitle = document.createElement("input");
        InputTitle.setAttribute("type", "text");
        InputTitle.setAttribute("id", "title");
        InputTitle.setAttribute("required", "");
        bookForm.appendChild(InputTitle);

        const LabelAuthor = document.createElement("label");
        LabelAuthor.setAttribute("for", "author");
        LabelAuthor.textContent = "Author: ";
        bookForm.appendChild(LabelAuthor);
        InputAuthor = document.createElement("input");
        InputAuthor.setAttribute("type", "text");
        InputAuthor.setAttribute("id", "author");
        InputAuthor.setAttribute("required", "");
        bookForm.appendChild(InputAuthor);

        const LabelNOP = document.createElement("label");
        LabelNOP.setAttribute("for", "NOP");
        LabelNOP.textContent = "Number Of Pages: ";
        bookForm.appendChild(LabelNOP);
        InputNOP = document.createElement("input");
        InputNOP.setAttribute("type", "number");
        InputNOP.setAttribute("id", "NOP");
        InputNOP.setAttribute("required", "");
        bookForm.appendChild(InputNOP);

        const LabelStatus = document.createElement("label");
        LabelStatus.setAttribute("for", "read");
        LabelStatus.textContent = "did you read it already?";
        bookForm.appendChild(LabelStatus);
        InputStatus = document.createElement("input");
        InputStatus.setAttribute("type", "checkbox");
        InputStatus.setAttribute("id", "read");
        bookForm.appendChild(InputStatus);

        const submitButton =  document.createElement("button");
        submitButton.setAttribute("type", "submit");
        bookForm.appendChild(submitButton);
        submitButton.textContent = "submit";

        const clearButton = document.createElement("button");
        clearButton.setAttribute("type", "button");
        bookForm.appendChild(clearButton);
        clearButton.textContent = "Close";

        clearButton.addEventListener("click", () => {
            body.removeChild(bookForm)
            InputNOP = undefined;
            InputAuthor = undefined;
            InputTitle = undefined;
            InputStatus = false;
            bookForm = "";
        });

        bookForm.addEventListener("submit", submittedBook);
    }
};

function submittedBook(e) {
    e.preventDefault();
    let inputVariableName = [InputTitle.value];
    inputVariableName[0] = new Book(InputTitle.value, InputAuthor.value, InputNOP.value, InputStatus.checked);
    addBookToLibrary(inputVariableName[0]);
    displayBooks();
    body.removeChild(bookForm);
    InputNOP = undefined;
    InputAuthor = undefined;
    InputTitle = undefined;
    InputStatus = false;
    bookForm = "";
};