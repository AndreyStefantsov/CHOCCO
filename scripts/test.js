/*работающий аккордеон по item

var item = document.getElementsByClassName('menu__item')
    for (node of item) {
        node.addEventListener('click', function(event) {
            event.preventDefault();
            if (this.classList.contains('is-active')) {
                this.classList.toggle('is-active');
                this.lastElementChild.classList.toggle('menu-description_visible');
            } else {
                for (node of item) {
                    node.classList.toggle('is-active', false);
                    node.lastElementChild.classList.toggle('menu-description_visible', false);
                }  
                this.classList.toggle('is-active', true);
                this.lastElementChild.classList.toggle('menu-description_visible', true);
            }

        });
    }
*/



//работающий аккордеон по link

/*var item = document.getElementsByClassName('menu__link')
    for (node of item) {
        node.addEventListener('click', function(event) {
            event.preventDefault();
            if (this.parentElement.classList.contains('is-active')) {
                this.parentElement.classList.toggle('is-active');
                this.nextElementSibling.style.width="0";
                this.nextElementSibling.style.display="none";
            } else {
                for (node of item) {
                    node.parentElement.classList.toggle('is-active', false);
                    node.nextElementSibling.style.width="0";
                    node.nextElementSibling.style.display="none";
                }  
                this.parentElement.classList.toggle('is-active', true);
                this.nextElementSibling.style.width="550px";
                this.nextElementSibling.style.display="flex";
            }

        });
    }
*/


//////крестик вариант работает, но не через toggle

/*var close = document.getElementsByClassName('menu-description__link');   
for (node of close) {
    node.addEventListener('click', function(event) {
        event.preventDefault();
        let item = document.getElementsByClassName('menu__item');
        for (node of item) {
            node.classList.remove('class', 'is-active');
            node.lastElementChild.classList.remove('class', 'menu-description_visible');
        }

    });
}*/


//работающий аккордеон по link

/*var menu = document.getElementsByClassName('menu__link')

function showMenu(item) {
    for (node of item) {                                                                //перебор всех ссылок в списке
        node.addEventListener('click', function(event) {
            event.preventDefault();
            if (this.parentElement.classList.contains('is-active')) {          //проверка на существование класса и его удаление 
                this.parentElement.classList.toggle('is-active');
                this.nextElementSibling.style.width="0";                                //скрытие div с текстом меню
                this.nextElementSibling.style.display="none";
            } else {
                for (node of item) {
                    node.parentElement.classList.toggle('is-active', false);   //перебор и полное скрытие всех li в случае их открытия
                    node.nextElementSibling.style.width="0";
                    node.nextElementSibling.style.display="none";
                }  
                this.parentElement.classList.toggle('is-active', true);        //добавление класса 
                this.nextElementSibling.style.width="550px";                            //показ div с текстом меню                
                this.nextElementSibling.style.display="flex";
            }

        });
    }
}

showMenu(menu);*/




//работающий аккордеон через функцию


/*var menu = document.getElementsByClassName('menu__link')                                //получение коллекции ссылок <a>

function showMenu(item, param, value) {
    
    for (node of item) {                                                                //перебор всех <a> в <ul>
        node.addEventListener('click', function(event) {
            event.preventDefault();

            if (this.parentElement.classList.contains('is-active')) {          //проверка на существование класса и его удаление 
                this.parentElement.classList.toggle('is-active');                        
                this.nextElementSibling.style.display="none";                           //скрытие div с текстом меню
            } else {
                for (node of item) {
                    node.parentElement.classList.toggle('is-active', false);   //перебор и полное скрытие всех li в случае, если открыты             
                    caseParameter(node);                                                //проверка на ширину или высоту нужно менять                
                    node.nextElementSibling.style.display="none";
                }  
                this.parentElement.classList.toggle('is-active', true);        //добавление класса    
                this.nextElementSibling.style.display="flex";                           //показ div с текстом меню    
            }

        });
    }

    function caseParameter(node) {
        switch (param) {
            case 'width':
                node.nextElementSibling.style.width=value;   
            break;

            case 'height':
                node.nextElementSibling.style.height=value;
            break;

            default:   
             alert(`${param} не существует `);

        }
    return;    
    }
}

showMenu(menu, 'width', '550px');*/

////////////////!!!!!!!!!!!!!!!!!!!Работающая дичь!!!!!!!!!!!!!!!!!!!!!//////////////////

/*
var menu = document.getElementsByClassName('menu__link');                                //получение коллекции ссылок <a>
var team = document.getElementsByClassName('team-name');
var closeButton = document.getElementsByClassName('menu-description__link');


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
                    this.parentElement.style.width=value;
                    this.parentElement.classList.toggle('is-active', true);        //добавление класса    
                    setTimeout(() => this.nextElementSibling.style.display="flex", 1000);     //показ div с текстом меню  
                    setTimeout(() => this.nextElementSibling.style.opacity="1", 1100);
                }  else {
                    this.parentElement.classList.toggle('is-active', true);        //добавление класса    
                    setTimeout(() => this.nextElementSibling.style.display="flex", 1);     //показ div с текстом меню  
                    setTimeout(() => this.nextElementSibling.style.opacity="1", 300);
                    this.parentElement.style.height=value+this.parentElement.clientHeight;
                }    
            }

        });
    }
}
 
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

showMenu(menu, 'width', '550px');
showMenu(team, 'height', '90');
closeMenu(closeButton);
    */
////////////////!!!!!!!!!!!!!!!!!Конец дичи!!!!!!!!!!!!!!//////////////////


//прокрутка (не работает)

/*window.addEventListener('scroll', function() {

        this.window.scrollTo(0, addss());
        function addss() {
            return a=window.pageYOffset + document.documentElement.clientHeight;
        }

    });*/


/*var burger = document.getElementsByClassName('burger')[0];

function showBurger(event) {
    if (event.cancelable) {
        event.preventDefault()
    
        let nav = document.getElementsByClassName('navigation')[0];
        
        if (burger.classList.contains('is-active')) {
            burger.classList.toggle('is-active');
            nav.style.display = "none";
            nav.style.right = "0";
            nav.style.pointerEvents = "none";
        }   else {
            burger.classList.toggle('is-active', true);
            nav.style.display = "flex"; 
            setTimeout(() => nav.style.right = "30px", 10);
            setTimeout(() => nav.style.pointerEvents = "auto", 1000);
        }

    } else
    return;
}

function closeAll() { 
    let nav = document.getElementsByClassName('navigation')[0];
    burger.classList.toggle('is-active');
    nav.style.display = "";
    nav.style.right = "";
    nav.style.pointerEvents = "";
    return;
}

burger.addEventListener('click', showBurger);*/
//burger.addEventListener('focus', showBurger);
//burger.addEventListener('blur', closeAll);
//document.addEventListener('click', closeAll);



////////////////// работает через консоль, добавлено в main, и там перестало работать ////////////////

var peoples = document.getElementsByClassName('peoples__link');
var comment = document.getElementsByClassName('comments-full__item');

function showComment (item, comment) {
 
    for (let i = 0; i<item.length; i++) {
        
        item[i].addEventListener('click', function(event) {
            event.preventDefault();

            let index = i;
            //console.log(index);
            let j = 0;
            let k = 0;

            for (node of item) { 
                if (index == k) {
                    node.parentElement.classList.add('peoples-is-active');
                } else node.parentElement.classList.remove('peoples-is-active');
                k++;
               // console.log(j);
            }

            for (node of comment) { 
                if (index == j) {
                    node.classList.add('is-active');
                } else node.classList.remove('is-active');
                j++;
               // console.log(j);
            }
                        
        });
    }

} 

showComment(peoples, comment); 

/////////////вариант отдельно с team, не работает переписать по showComment////////////

/*function showTeam() {
    
    var teamItem = document.getElementsByClassName('team__item');
    var teamLink = document.getElementsByClassName('team-name');
    var proffesion = document.getElementsByClassName('team-proffesion')


    for (node of teamLink ) {
        node.addEventListener('click', function(event) {
            event.preventDefault();

            for (node of teamItem) {
                if (node.classList.contains('is-active')) {
                    node.classList.toggle('is-active')
                } else node.classList.toggle('is-active', true);
            }
        });

    }
      
}        

showTeam();*/


///////////////// слайдер неработающий
/*var arrowleft = document.getElementsByClassName('arrow__link-left')[0];
var arrowRight = document.getElementsByClassName('arrow__link-right')[0];

function barSlider(event) {
    if (event.cancelable) {
        event.preventDefault();

            var items = document.getElementsByClassName('bar-chocco__item') ;
            var previousItem = items.previousElementSibling;

            for (node of items) {
                if (!previousItem) {
                    previousItem = node.nextElementSibling;
                    console.log('next');
                } else 
                previousItem = node.previousElementSibling;
                console.log(node.previousElementSibling);
            }

    } else return;
}



arrowleft.addEventListener('click', barslider);*/


///////////////////////////////////////////////
///////////////// слайдер неработающий

/*function barSlider() { 

    var links = document.getElementsByClassName('arrow__link') ;
    var items = document.getElementsByClassName('bar-chocco__item') ;
    var firstItem = document.getElementsByClassName('bar-chocco__list')[0].firstElementChild;
    var lastItem = document.getElementsByClassName('bar-chocco__list')[0].lastElementChild;
    var activeItem = document.getElementsByClassName('bar-chocco__item is-active')[0];

    for (let i = 0; i<links.length; i++) {
        
        links[i].addEventListener('click', function(event) {
            event.preventDefault();
            
            let index = i;
            var activeItem = document.getElementsByClassName('bar-chocco__item is-active')[0];
            if (index=1) {
                console.log(index);
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
            } else 
            console.log(index);
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
            
           
            
            /*switch (i) {

                case 0: 

                break;

                case 1:
                    for (node of items) {
                        if (node.classList.contains('is-active')) {
                            activeItem = node;
                            console.log('active')

                            if (activeItem.nextElementSibling != null) {
                                activeItem.classList.toggle('is-active', false);
                                activeItem = activeItem.nextElementSibling;
                                activeItem.classList.toggle('is-active', true);
                                console.log(activeItem)
                            } else console.log('null')
                        }
                    }
                break;

            }*/
   
        /*});
    }

}

barSlider()*/


///////////////// слайдер работающий //////////////////////////////////////////

var arrowleft = document.getElementsByClassName('arrow__link-left')[0];
var arrowRight = document.getElementsByClassName('arrow__link-right')[0];
//var firstItem = document.getElementsByClassName('bar-chocco__list')[0].firstElementChild;
//var lastItem = document.getElementsByClassName('bar-chocco__list')[0].lastElementChild;

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


///////////////burger новый ////////////////

var burger = document.getElementsByClassName('burger')[0];
var greetingContainer = document.getElementsByClassName('container-greeting')[0];
var nav = document.getElementsByClassName('burger-menu-navigation')[0];
//var burgerLines = document.getElementsByClassName('line');
var burgerCloseLines = document.getElementsByClassName('close-lines')[0];


burger.addEventListener('click', function(event) {
    event.preventDefault();

        nav.style.display = "flex";
        burgerCloseLines.style.display = 'block';
        greetingContainer.style.display='none';
});


burgerCloseLines.addEventListener('click', function(event) {
    event.preventDefault();

        nav.style.display = "none";
        burgerCloseLines.style.display = 'none';
        greetingContainer.style.display='flex';
});






/*function showBurger(event) {
    if (event.cancelable) {
        event.preventDefault();
        
        //var nav = document.getElementsByClassName('navigation')[0];
        //var greetingSection = document.getElementById('greeting');
       
        //var greetingContainerChildren = greetingContainer.children;
        


        if (burger.classList.contains('is-active')) {
            burger.classList.toggle('is-active');
            nav.style.display = "flex";
            nav.style.right = "";
            burgerCloseLines.style.display = 'block';
            greetingContainer.style.display='none';

            for (node of burgerLines) {
                node.style.display = 'block';
            }
            //greetingContainer.style.opacity = '1';
            //greetingSection.style.backgroundColor = '#61c4d9';
            //  nav.style.pointerEvents = "";
            

        }   else {
            burger.classList.toggle('is-active', true);
            nav.style.display = "flex"; 
            greetingContainer.style.display='none';
            for (node of burgerLines) {
                node.style.display = 'none';
            }
            burgerCloseLines.style.display = 'block';
            //greetingSection.style.backgroundColor = 'lightgreen';

            /*for (node of greetingContainerChildren) {
                
                if (node != document.getElementsByTagName('header')[0]) {
                    node.style.opacity = '0';
                } else 
                
                if ((node.children != nav) || (node.children != burgerLink))  {
                    node.children.opacity = '0';
                    console.log('1');
                } else console.log('2');
            }
            //greetingContainer.style.opacity = '0';
            /*setTimeout(() => nav.style.right = "30px", 10);
            setTimeout(() => nav.style.pointerEvents = "auto", 1000);*/
     /*   }

    } else
    return;
}

burger.addEventListener('click', showBurger);*/



////////////////////// Burger старый//////////////////////
/*var burger = document.getElementsByClassName('burger')[0];

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
      /*  }

    } else
    return;
}
*/

/*function closeAll() { 
    var nav = document.getElementsByClassName('navigation')[0];
    burger.classList.toggle('is-active');
    nav.style.display = "";
    nav.style.right = "";
    nav.style.pointerEvents = "";

}

burger.addEventListener('click', showBurger);
//burger.addEventListener('focus', showBurger);
burger.addEventListener('blur', closeAll);
//document.addEventListener('click', closeAll);*/

////////////////////// Конец burger ////////////////////////////