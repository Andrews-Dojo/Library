// Array of book objects
const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  addBookToLibrary(newBook){

  // Adds book to library array
    myLibrary.push(newBook);

  //Displays Book in new table row
    newBook.createTableRow();
  }

  createTableRow(newBook) {
    const table = document.querySelector(".table");
    // Clears all rows in table
    if (table) {
      table.innerHTML = "";
    }
  
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
      //Loop through library and make rows
      const newRow = document.createElement("tr");
      const titleCell = document.createElement("td");
      const authorCell = document.createElement("td");
      const pagesCell = document.createElement("td");
      const readCell = document.createElement("td");
  
      const readToggleSelect = document.createElement("select");
      const readToggleRead = document.createElement("option");
      const readToggleNotRead = document.createElement("option");
      readToggleRead.value = "read";
      readToggleNotRead.value = "not-read";
      readToggleRead.innerText = "Read";
      readToggleNotRead.innerText = "Not Read";
  
      const deleteCell = document.createElement("td");
      const deleteBtn = document.createElement("button");
      deleteBtn.classList = "deleteBtn";
      deleteBtn.id = i;
  
      titleCell.innerText = book.title;
      authorCell.innerText = book.author;
      pagesCell.innerText = book.pages;
  
      table.appendChild(newRow);
      newRow.appendChild(titleCell);
      newRow.appendChild(authorCell);
      newRow.appendChild(pagesCell);
      newRow.appendChild(readCell);
      newRow.appendChild(deleteCell);
      deleteCell.appendChild(deleteBtn);
  
      readCell.appendChild(readToggleSelect);
      readToggleSelect.appendChild(readToggleRead);
      readToggleSelect.appendChild(readToggleNotRead);
  
      readToggleSelect.value = book.read ? "read" : "not-read";
  
      deleteBtn.innerText = "Delete";
  
      // When delete btns are clicked, that book is removed from library, table row is deleted and new table is created.
      // Creating new table updates the delete btn indexes, fixing prior bug of not updating.
      deleteBtn.addEventListener("click", () => {
        myLibrary.splice(deleteBtn.id, 1);
        table.deleteRow(deleteBtn.id);
        newBook.createTableRow(newBook);
      });
    }
  }
}

// Book constructor
// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// function addBookToLibrary() {
//   let title = document.querySelector("#title").value;
//   let author = document.querySelector("#author").value;
//   let pages = document.querySelector("#pages").value;
//   let read = document.querySelector("#read").checked;
//   let newBook = new Book(title, author, pages, read);

//   // Adds book to library array
//   myLibrary.push(newBook);

//   //Displays Book in new table row
//   createTableRow();
// }

let newBookbtn = document.querySelector(".newBookBtn");

newBookbtn.addEventListener("click", () => {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document.querySelector("#new-book-form").addEventListener("submit", () => {
  event.preventDefault();
  // newBook.addBookToLibrary();
  let titles = document.querySelector("#title").value;
    let authors = document.querySelector("#author").value;
    let pagess = document.querySelector("#pages").value;
    let reads = document.querySelector("#read").checked;
    let newBook = new Book(titles, authors, pagess, reads);
    newBook.addBookToLibrary(newBook);
    newBook.createTableRow(newBook);
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "none";
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
});

// function createTableRow() {
//   const table = document.querySelector(".table");
//   // Clears all rows in table
//   if (table) {
//     table.innerHTML = "";
//   }

//   for (i = 0; i < myLibrary.length; i++) {
//     let book = myLibrary[i];
//     //Loop through library and make rows
//     const newRow = document.createElement("tr");
//     const titleCell = document.createElement("td");
//     const authorCell = document.createElement("td");
//     const pagesCell = document.createElement("td");
//     const readCell = document.createElement("td");

//     const readToggleSelect = document.createElement("select");
//     const readToggleRead = document.createElement("option");
//     const readToggleNotRead = document.createElement("option");
//     readToggleRead.value = "read";
//     readToggleNotRead.value = "not-read";
//     readToggleRead.innerText = "Read";
//     readToggleNotRead.innerText = "Not Read";

//     const deleteCell = document.createElement("td");
//     const deleteBtn = document.createElement("button");
//     deleteBtn.classList = "deleteBtn";
//     deleteBtn.id = i;

//     titleCell.innerText = book.title;
//     authorCell.innerText = book.author;
//     pagesCell.innerText = book.pages;

//     table.appendChild(newRow);
//     newRow.appendChild(titleCell);
//     newRow.appendChild(authorCell);
//     newRow.appendChild(pagesCell);
//     newRow.appendChild(readCell);
//     newRow.appendChild(deleteCell);
//     deleteCell.appendChild(deleteBtn);

//     readCell.appendChild(readToggleSelect);
//     readToggleSelect.appendChild(readToggleRead);
//     readToggleSelect.appendChild(readToggleNotRead);

//     readToggleSelect.value = book.read ? "read" : "not-read";

//     deleteBtn.innerText = "Delete";

//     // When delete btns are clicked, that book is removed from library, table row is deleted and new table is created.
//     // Creating new table updates the delete btn indexes, fixing prior bug of not updating.
//     deleteBtn.addEventListener("click", () => {
//       myLibrary.splice(deleteBtn.id, 1);
//       table.deleteRow(deleteBtn.id);
//       createTableRow();
//     });
//   }
// }
