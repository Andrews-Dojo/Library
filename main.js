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
    
    // Adds book to library array
    myLibrary.push(newBook);
    //Display Book in new table row
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
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = 'none';
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value ='';
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

        const readToggleSelect = document.createElement('select');
        const readToggleRead = document.createElement('option');
        const readToggleNotRead = document.createElement('option');
        readToggleRead.value = 'read';
        readToggleNotRead.value = 'not-read';
        readToggleRead.innerText = 'Read';
        readToggleNotRead.innerText = 'Not Read';

    const deleteCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'deleteBtn';
    deleteBtn.id = (i);

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

    if (book.read === true) {
        readToggleSelect.value = 'read';
    } else {
        readToggleSelect.value = 'not-read';
    }
    deleteBtn.innerText = 'Delete';

    //Doesn't work when mutliple rows are deleted. index doesn't update as array get's shorter.
    deleteBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary[i],1); 
        table.deleteRow(myLibrary[i]);
        
    })
    }
   
}


