const myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.uniqueId = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStatus){
    const book = new Book(title, author, pages, readStatus)
    myLibrary.push(book);
    const library = document.querySelector(".library");
    const card = document.createElement("div");
    card.classList.add("card");
    library.appendChild(card);
    card.textContent = `Title: ${title}, Author: ${author}, Pages: ${pages}, Read/Unread: ${readStatus ? "Read ✔" : "Read ✖"}`;
}


const newBookBtn = document.querySelector(".newBook");
const newBookForm = document.querySelector(".newBookForm");
newBookBtn.addEventListener("click", (event) => {
    newBookForm.style.display = "block";
})

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value , pages.value , readStatus.checked);
})
