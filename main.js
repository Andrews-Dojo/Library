const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    // add stuff here
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    
    myLibrary.push(newBook);
    //Display Book in table
    createTableRow();
}

let newBookbtn = document.querySelector('.newBookBtn');

newBookbtn.addEventListener('click', () => {
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = 'block';
})

document.querySelector('#new-book-form').addEventListener('submit', () => {
    event.preventDefault();
    addBookToLibrary();
})

function createTableRow() {
    const table = document.querySelector('.table');
    if (table) {
        table.innerHTML = ''; // Clear all rows in tbody
    }
    for (i=0;i<myLibrary.length;i++){
        let book = myLibrary[i];
        //Loop through library and make rows
    const newRow = document.createElement('tr');
    const titleCell = document.createElement('td');
    const authorCell = document.createElement('td');
    const pagesCell = document.createElement('td');
    const readCell = document.createElement('td');
    const deleteCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'deleteBtn';
    deleteBtn.id = (i+1);

    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;
    if (book.read === true) {
        readCell.innerText = 'Read';
    } else {
        readCell.innerText = 'Not Read';
    }
    deleteBtn.innerText = 'Delete';

    table.appendChild(newRow);
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(pagesCell);
    newRow.appendChild(readCell);
    newRow.appendChild(deleteCell);
    deleteCell.appendChild(deleteBtn);
    }
}




// const newBook = document.querySelector('.newBook');
// // const formDiv = document.querySelector('.formDiv');
// // const bookList = document.querySelector('.bookList');

// // function displayBooks() {
// //     for(book of myLibrary){
// //        let newBook = document.createElement('li');
// //         newBook.textContent = book;
// //         bookList.appendChild(newBook);
// //     }
// // }

//     // new row creation for each new book
    
    // const newRow = document.createElement('tr');
    // const titleCell = document.createElement('td');
    // const authorCell = document.createElement('td');
    // const pagesCell = document.createElement('td');
    // const readCell = document.createElement('td');
    // const deleteCell = document.createElement('td');
    // const deleteBtn = document.createElement('button');
//     const form = document.createElement('form');

// newBook.addEventListener('click', () => {
//     const dialog = document.createElement('dialog');
//     dialog.open = 'open';
//     newBook.append(dialog);
//     dialog.append(form);
//     const author = document.createElement('input');
//     const title = document.createElement('input');
//     const pages = document.createElement('input');
//     author.placeholder = 'Author';
//     title.placeholder = 'Title';
//     pages.placeholder = 'Number of pages';
//     form.append(author);
//     form.append(title);
//     form.append(pages);
//     const submitBtn = document.createElement("button");
//     submitBtn.innerText = 'Submit';
//     form.append(submitBtn);


//     })
// //     const dialog = document.createElement('dialog');
// //     const dialogBtn = document.createElement('button');
// //     dialogBtn.innerText = 'Add Book';
// //     dialog.open = 'open';
// //     formDiv.append(dialog)
// //     const form = document.createElement('form');
// //     form.id = 'form';
// //     form.method = 'dialog';
//     // const author = document.createElement('input');
//     // const title = document.createElement('input');
//     // const pages = document.createElement('input');
//     // author.placeholder = 'Author';
//     // title.placeholder = 'Title';
//     // pages.placeholder = 'Number of pages';
// //     formDiv.appendChild(dialog);
// //     dialog.appendChild(form);
// //     form.append(author);
// //     form.append(title);
// //     form.append(pages);
// //     form.append(dialogBtn);
// // })