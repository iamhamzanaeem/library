const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.uniqueId = crypto.randomUUID();
}
Book.prototype.readToggle = function(){
    this.readStatus = !this.readStatus
}

function addBookToLibrary(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus)
    myLibrary.push(book);
}

function displayLibrary() {
    const library = document.querySelector(".library");
    library.textContent = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        const book = myLibrary[i];
        card.classList.add("card");
        library.appendChild(card);
        card.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        card.appendChild(removeBtn);
        card.dataset.id = book.uniqueId;
        removeBtn.addEventListener("click", (e) => {
            const id = card.dataset.id;
            const index = myLibrary.findIndex(book => book.uniqueId === id);
            console.log(index);
            myLibrary.splice(index, 1);
            displayLibrary();
            
        });
        const readStatusBtn = document.createElement("button");
        readStatusBtn.textContent = `${book.readStatus ? "Read ✔" : "Read ✖" }`;
        card.appendChild(readStatusBtn);

        readStatusBtn.addEventListener("click", (e) => {
            book.readToggle();
            if(book.readStatus === false){
                readStatusBtn.textContent = "Read ✖"
            } else{
                readStatusBtn.textContent = "Read ✔"
            }
        });
    }
}



const newBookBtn = document.querySelector(".newBook");
const newBookForm = document.querySelector(".newBookForm");
newBookBtn.addEventListener("click", (event) => {
    newBookForm.style.display = "block";
})

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readStatus = document.querySelector("#readStatus").checked;
    addBookToLibrary(title, author, pages, readStatus);
    displayLibrary();
});


