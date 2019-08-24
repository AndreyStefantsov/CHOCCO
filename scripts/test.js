

var item = document.getElementsByClassName('menu__item')

item[0].lastElementChild.addEventListener('click', function() {
    if (item[0].lastElementChild.getAttribute('class') != 'menu__description_visible') {
        item[0].lastElementChild.classList.add('class', 'menu__description_visible');
    } else {
        item[0].lastElementChild.removeAttribute('class', 'menu__description_visible');
    }

});


/*var item = document.getElementsByClassName('menu-description');
function showMenu(item) {
    if (item.getAttribute('class') != 'menu__description_visible') {
        item.classList.add('class', 'menu__description_visible');
    } else {
        item.removeAttribute('class', 'menu__description_visible');
    }
}*/


for (node of item) {
    node.addEventListener('click') {
        showMenu(node);
    }
}



