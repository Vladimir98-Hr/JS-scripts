var menu = [
    {
        id: 1,
        title: "Buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "imgs/item-1.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod alias beatae dolor natus quidem ipsam laborum quas, similique consequuntur distinctio voluptates aperiam delectus recusandae harum, nulla doloremque autem commodi!"
    },
    {
        id: 2,
        title: "meat",
        category: "breakfast",
        price: 25.99,
        img: "imgs/item-2.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod alias beatae dolor natus quidem ipsam laborum quas, similique consequuntur distinctio voluptates aperiam delectus recusandae harum, nulla doloremque autem commodi!"
    },
    {
        id: 3,
        title: "icecream",
        category: "lunch",
        price: 5.99,
        img: "imgs/item-3.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod alias beatae dolor natus quidem ipsam laborum quas, similique consequuntur distinctio voluptates aperiam delectus recusandae harum, nulla doloremque autem commodi!"
    },
    {
        id: 4,
        title: "light eggs",
        category: "breakfast",
        price: 1.22,
        img: "imgs/item-4.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod alias beatae dolor natus quidem ipsam laborum quas, similique consequuntur distinctio voluptates aperiam delectus recusandae harum, nulla doloremque autem commodi!"
    },
    {
        id: 5,
        title: "shake",
        category: "shakes",
        price: 2.15,
        img: "imgs/item-6.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod alias beatae dolor natus quidem ipsam laborum quas, similique consequuntur distinctio voluptates aperiam delectus recusandae harum, nulla doloremque autem commodi!"
    }
];

var menuBlock = document.querySelector('.menu-bloc'); // O(n) 


function createMenuItem(item) {
    var menuItemHtml = `<div class="menu-item">
            <img class="menu-item-image"  src="${item.img}">
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <h4 class="menu-item-title">${item.title}</h4>
                    <span class="menu-item-price">$${item.price}</span>
                </div>
                <p class="menu-item-text">${item.description}</p>
            </div>
        </div>`;
    menuBlock.innerHTML += menuItemHtml;
}

function displayMenuItems(category) {
    menuBlock.innerHTML = '';  // удалить все элементы меню
    //console.log(category)
    
    for (var item of menu) {
        
        if(category == 'all'){
            createMenuItem(item);
        }
        else if (category == item.category) {
            createMenuItem(item);
        } 
    }
}

function onMenuBtn(event) {
    var category = event.currentTarget.dataset.category;
    displayMenuItems(category);
}

function bindMenuButtonEvents() {
    var menuBtns = document.querySelectorAll('.filter-btn');
    for( var btn of menuBtns ) {
        btn.addEventListener('click', onMenuBtn);
    }
}

// MVC - model view controller
displayMenuItems('all');

bindMenuButtonEvents();
