import Book from './book.js';

class BookPage {
  booklist = [];

  storeInMemory() {
    localStorage.setItem('pageBooks', JSON.stringify(this.booklist));
  }

  remove(index) {
    this.booklist.splice(index, 1);
    this.storeInMemory();
  }

  addBook(book) {
    this.booklist.push(book);
    this.storeInMemory();
  }

  refreshBookList() {
    // update the innerhtml value of books
    let response = '';
    console.log(this.booklist.length);
    if(this.booklist.length>0){
        this.booklist.forEach((book, index) => {
          response += book.generateBookLi(index);
        });
        document.querySelector('.books').innerHTML = response;
    }
    else{
      console.log('no data');
      document.querySelector('.books').classList.toggle('hidden_item');
    }
  }

  generateId() {
    return this.booklist.length === 0 ? 1 : this.booklist[this.booklist.length - 1].id + 1;
  }
}

const page = new BookPage();
const title = document.querySelector('.title');
const author = document.querySelector('.author');
function displayComponent (elmnts){
  if(elmnts.isArray){
    elmnts.forEach(elmnt => {
      test = elmnt.classList;
      test.contains('hidden_item')?test.remove('hidden_item'):true;
    });
  }
  else{
    test = elmnts.classList;
    test.contains('hidden_item')?test.remove('hidden_item'):true;
  }
  
}
function HideComponent (elmntsParam){
  elmnts = Array.from(elmntsParam);
  /*console.log(elmnts.isArray);
  if(elmnts.isArray){
    elmnts.forEach(elmnt => {
      test = elmnt.classList;
      test.contains('hidden_item')?true:test.toggle('hidden_item');
    });
  }
  else{
    test = elmnts.classList;
    console.log(elmnts);
    test.contains('hidden_item')?true:test.toggle('hidden_item');
  }*/
  elmnts.forEach(elmnt => {
    test = elmnt.classList;
    test.contains('hidden_item')?true:test.toggle('hidden_item');
  });
  
  
}

function addnewbook(e) {
  e.preventDefault();
  page.addBook(new Book(page.generateId(), title.value, author.value));
  page.refreshBookList();
  title.value = '';
  author.value = '';
  displayComponent(document.querySelector('.books'));
  HideComponent([document.querySelector('.nodata_Message')]);
}

function removeBook(index) {
  if (index >= 0) {
    page.remove(index);
    page.refreshBookList();
    if(page.booklist.length===0){
      displayComponent(document.querySelector('.nodata_Message'));
      HideComponent([document.querySelector('.books')]);

    }
  }
}

removeBook(-2);
document.querySelector('.submit_button').addEventListener('click', addnewbook);
window.removeBook = removeBook;
