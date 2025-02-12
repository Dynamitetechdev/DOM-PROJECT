let myForm = document.getElementById('my-form');
let myList = document.getElementById('my-list');
let mySearch = document.getElementById('search');
myForm.addEventListener('submit', addItem);
myList.addEventListener('click', remeoveItem);
mySearch.addEventListener('keydown', searchItem)

function addItem(e) {
    e.preventDefault()
     let inputValue = document.getElementById('text').value
    let newLi = document.createElement('li')
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete'
    deleteBtn.textContent = 'X'
    newLi.textContent = 'inputValue'
    inputValue = ''
    newLi.appendChild(deleteBtn)
    myList.appendChild(newLi); 
 };

function remeoveItem(e) {
    if(e.target.classList.contains('delete')) { if(confirm('ARE YOU SURE?')) {
        var li = e.target.parentElement
        myList.removeChild(li);
    }
    }
};

function searchItem(e) {
    var text = e.target.value.toLowerCase();
    let items = document.getElementsByTagName('li');
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        }else {
            item.style.display = 'none'
        } 
    } )
};
