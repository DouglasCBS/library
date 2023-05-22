let myLibrary = [];

const contentBody = document.querySelector("#contentBody");
const newBook = document.querySelector("button");

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
    contentBody.appendChild(bookForm);
    
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

    const fieldSet = document.createElement("fieldset");
    bookForm.appendChild(fieldSet);
    const legend = document.createElement("legend");
    legend.textContent = "Status: ";
    fieldSet.appendChild(legend);

    const radioList = document.createElement("ul");
    fieldSet.appendChild(radioList);
    const listOne = document.createElement("li");
    const listTwo = document.createElement("li");
    const listThree = document.createElement("li");
    radioList.appendChild(listOne);
    radioList.appendChild(listTwo);
    radioList.appendChild(listThree);

    const LabelStatusOne = document.createElement("label");
    LabelStatusOne.setAttribute("for", "notRead");
    LabelStatusOne.textContent = "not read ";
    listOne.appendChild(LabelStatusOne);
    const InputStatusOne = document.createElement("input");
    InputStatusOne.setAttribute("type", "radio");
    InputStatusOne.setAttribute("id", "notRead");
    listOne.appendChild(InputStatusOne);

    const LabelStatusTwo = document.createElement("label");
    LabelStatusTwo.setAttribute("for", "Read");
    LabelStatusTwo.textContent = "read ";
    listTwo.appendChild(LabelStatusTwo);
    const InputStatusTwo = document.createElement("input");
    InputStatusTwo.setAttribute("type", "radio");
    InputStatusTwo.setAttribute("id", "Read");
    listTwo.appendChild(InputStatusTwo);

    const LabelStatusThree = document.createElement("label");
    LabelStatusThree.setAttribute("for", "dropped");
    LabelStatusThree.textContent = "dropped ";
    listThree.appendChild(LabelStatusThree);
    const InputStatusThree = document.createElement("input");
    InputStatusThree.setAttribute("type", "radio");
    InputStatusThree.setAttribute("id", "dropped");
    listThree.appendChild(InputStatusThree);


}

openForm()