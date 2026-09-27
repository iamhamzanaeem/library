const myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.uniqueId = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStatus){
    const book = `${title} written by ${author}, no. of pages ${pages} ${readStatus ? "reading completed" : "not read yet"}`;
    myLibrary.push(book);
}
addBookToLibrary("Hello-Books", "Person", 877, false)
console.log(myLibrary[0]);