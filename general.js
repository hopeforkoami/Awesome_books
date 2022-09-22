const listMenu = document.querySelector('.book_list_section');
const  addMenu= document.querySelector('.book_add_section');
const contactMenu = document.querySelector('.book_contact_section');

function showbooklist(e) {
  e.preventDefault();
  document.querySelector('.add_book_section').classList.toggle('hidden_item');
  document.querySelector('.contact').classList.toggle('hidden_item');
}
listMenu.addEventListener('click', showbooklist);

