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
addBookToLibrary("Hello-Books", "Person", 877, false);
addBookToLibrary("Hello-Books", "Person", 877, true);
addBookToLibrary("Hello-Books", "Person", 877, true);
addBookToLibrary("Hello-Books", "Person", 877, false);
console.log(myLibrary);

