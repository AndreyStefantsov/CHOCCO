var menu = document.getElementsByClassName('menu__link');                                //получение коллекции ссылок <a>
var team = document.getElementsByClassName('team-name');
var closeButton = document.getElementsByClassName('menu-description__link');
var peoples = document.getElementsByClassName('peoples__link');
var comment = document.getElementsByClassName('comments-full__item');
var arrowleft = document.getElementsByClassName('arrow__link-left')[0];
var arrowRight = document.getElementsByClassName('arrow__link-right')[0];

//if (document.documentElement.clientWidth > 768) ? showMenu(menu, 'width', '650px') : showMenu(menu, 'width', '350px')

if (parseInt(document.documentElement.clientWidth) > 900) {
    console.log(document.documentElement.clientWidth);
    showMenu(menu, 'width', '650px');
} else {
    console.log(document.documentElement.clientWidth);
    showMenu(menu, 'width', parseInt(document.documentElement.clientWidth)-200+'px');
    //showMenu(menu, 'width', '100%');
}


//showMenu(menu, 'width', '650px');

showMenu(team, 'height', '90');
closeMenu(closeButton);
showComment(peoples, comment);  



/////////////////////  Закрытие и открытие вкладок на секциях "Команда" и "Меню"   ////////////////////
function showMenu(item, param, value) {
    
    for (node of item) {                                                                //перебор всех <a> в <ul>
        node.addEventListener('click', function(event) {
            event.preventDefault();

            if (this.parentElement.classList.contains('is-active')) {          //проверка на существование класса и его удаление 
                this.parentElement.classList.toggle('is-active');                        
                this.nextElementSibling.style.display="none";
                this.nextElementSibling.style.opacity="0";     
                this.parentElement.style.width="";            //скрытие div с текстом меню
            } else {

                if (param == 'width') {
                    for (node of item) {
                        node.parentElement.classList.toggle('is-active',false);        //перебор и полное скрытие всех li в случае, если открыты 
                        node.parentElement.style.width="";                                               
                        node.nextElementSibling.style.display="none";
                        node.nextElementSibling.style.opacity="0"; 
                    }  
                    this.parentElement.style.width=value;                           //ширина раскрытия меню
                    this.parentElement.classList.toggle('is-active', true);        //добавление класса    
                    setTimeout(() => this.nextElementSibling.style.display="flex", 1000);     //показ div с текстом меню  
                    setTimeout(() => this.nextElementSibling.style.opacity="1", 1100);
                }  else {
                    this.parentElement.classList.toggle('is-active', true);        //добавление класса    
                    setTimeout(() => this.nextElementSibling.style.display="flex", 1);     //показ div с текстом меню  
                    setTimeout(() => this.nextElementSibling.style.opacity="1", 300);
                    //this.parentElement.style.height=value+this.parentElement.clientHeight;
                }    
            }

        });
    }
}
////////////////////// Конец функции //////////////////////////// 

/////////////////// Закрытие вкладок на секции "Меню" по крестику   ////////////////

function closeMenu(closeButton) {
        
    for (node of closeButton) {

        node.addEventListener('click', function(event) {
            event.preventDefault();
            var parentItem = this.parentElement.parentElement.parentElement;
            var parentDiv = this.parentElement.parentElement;
                parentItem.classList.toggle('is-active', false);                        
                parentDiv.style.display="none";
                parentDiv.style.opacity="0";     
                parentItem.style.width="";
         });
    }
    return;
}

////////////////////// Конец функции //////////////////////////// 

////////////////////// Burger //////////////////////
var burger = document.getElementsByClassName('burger')[0];

function showBurger(event) {
    if (event.cancelable) {
        event.preventDefault();
    
        var nav = document.getElementsByClassName('navigation')[0];
        
        if (burger.classList.contains('is-active')) {
            burger.classList.toggle('is-active');
            nav.style.display = "";
            nav.style.right = "";
            nav.style.pointerEvents = "";
        }   else {
            burger.classList.toggle('is-active', true);
            nav.style.display = "flex"; 
            /*setTimeout(() => nav.style.right = "30px", 10);
            setTimeout(() => nav.style.pointerEvents = "auto", 1000);*/
        }

    } else
    return;
}


function closeAll() { 
    var nav = document.getElementsByClassName('navigation')[0];
    burger.classList.toggle('is-active');
    nav.style.display = "";
    nav.style.right = "";
    nav.style.pointerEvents = "";

}

burger.addEventListener('click', showBurger);
//burger.addEventListener('focus', showBurger);
burger.addEventListener('blur', closeAll);
//document.addEventListener('click', closeAll);

////////////////////// Конец burger ////////////////////////////



///////////////////////////////// отзывы ///////////////////////////////////////////////////

function showComment (item, comment) {
 
    for (let i = 0; i<item.length; i++) {
        
        item[i].addEventListener('click', function(event) {
            event.preventDefault();

            let index = i;
            let j = 0;
            let k = 0;

            for (node of item) { 
                if (index == k) {
                    node.parentElement.classList.add('peoples-is-active');
                } else node.parentElement.classList.remove('peoples-is-active');
                k++;
            }

            for (node of comment) { 
                if (index == j) {
                    node.classList.add('is-active');
                } else node.classList.remove('is-active');
                j++;
            }
                        
        });
    }

} 

////////////////////// Конец функции //////////////////////////// 

///////////////////////////////// Слайдер с батончиками ///////////////////////////////////////////////////


arrowRight.addEventListener('click', function(event) {
    event.preventDefault();

    var activeItem = document.getElementsByClassName('bar-chocco__item is-active')[0];
    var firstItem = document.getElementsByClassName('bar-chocco__list')[0].firstElementChild;

        if (activeItem.nextElementSibling) {

            activeItem.classList.toggle('is-active', false);
            activeItem = activeItem.nextElementSibling;
            activeItem.classList.toggle('is-active', true);
            console.log(activeItem)

        } else {
            activeItem.classList.toggle('is-active', false);
            activeItem = firstItem; 
            activeItem.classList.toggle('is-active', true);
            console.log(activeItem)
        }
});


arrowleft.addEventListener('click', function(event) {
    event.preventDefault();

    var activeItem = document.getElementsByClassName('bar-chocco__item is-active')[0];
    var lastItem = document.getElementsByClassName('bar-chocco__list')[0].lastElementChild;

        if (activeItem.previousElementSibling) {

            activeItem.classList.toggle('is-active', false);
            activeItem = activeItem.previousElementSibling;
            activeItem.classList.toggle('is-active', true);
            console.log(activeItem)

        } else {
            activeItem.classList.toggle('is-active', false);
            activeItem = lastItem; 
            activeItem.classList.toggle('is-active', true);
            console.log(activeItem)
        }
});

////////////////////// Конец функции //////////////////////////// 








