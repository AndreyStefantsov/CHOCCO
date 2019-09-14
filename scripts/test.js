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






var sections = document.getElementsByClassName('section');
var count = sections.length;

var anchors = [].slice.call(sections);

anchors.forEach(el => {
    el.addEventListener('scroll', function() {
        console.log(pageYOffset);   
        //window.scrollBy(0, section[0].clientHeight);
    });    
});









window.innerHeight

for (var i =0; i<count-1; i++)
(function() {
    document.documentElement.scrollTo(0, section[i].clientHeight)
})();


    var bottom = document.documentElement.getBoundingClientRect().bottom


        if (document.documentElement.clientHeight == bottom) {
            document.documentElement.scrollBy(0, document.documentElement.clientHeight);
            bottom +=  document.documentElement.clientHeight;
            
        } else {
                bottom +=  -document.documentElement.clientHeight;
                document.documentElement.scrollBy(0, document.documentElement.clientHeight);
        }

   var count= 0;
section[0].addEventListener('scroll', function(e) {
    return count++
});
    

f = true; 

function scroll() {
    while (f) {
        
    }

}

/////////////////////////////////////////
(function() {
    var wrapper = document.querySelector('.wrapper');
    var windowTop = 0;
    var lock = false;
    wrapper.onwheel = function(e) {
        //if (lock) return;
        console.log(e.deltaY);
        console.log(e.deltaMode);
        var count = document.getElementsByTagName('section').length;
        var clientHeight = document.documentElement.clientHeight;
        var maxHeight = clientHeight*count;
        var windowTop = document.documentElement.getBoundingClientRect().top;

        /*if (windowTop < maxHeight) {
            windowTop += clientHeight;
            document.documentElement.scrollBy(0, clientHeight);
            console.log(`значение top ${top}`);
            console.log(`Высота документа ${maxHeight}`);
            console.log(`Высота окна ${clientHeight}`);
        }*/
    }

    //lock = true;

    /*function sectionDetection() {
        var currentSection;
        if (windowTop != 0) {
        currentSection =   Math.abs(windowTop)/maxHeight;
        } else currentSection = 1;
         console.log
         (currentSection)
    }*/
})();


//////////////////////////////// ops работающий //////////////////////////////

(function() {
    
    var ops = document.querySelector('.ops-container');
    var sections = [].slice.call(document.getElementsByTagName('section'));
    var lock = false;
    ops.addEventListener('wheel', scrolling);
   // ops.addEventListener('keydown', scrolling);
    
    
    function scrolling(e) {

        var percents;
        var index = sectionDetection();
        if (lock) return;
        if (e.deltaY < 0)  {
            if (index == 0) return;
            percents = -(index-1)*100+'%'
            sections[index].classList.remove('is-visible');
            sections[index].style.transform = '';
            sections[index-1].style.transform = `translateY(${percents})`;
            sections[index-1].classList.add('is-visible');
            sectionLock();
            

        } else if (e.deltaY > 0)  {
            if (index == sections.length-1) return
            percents = -(index+1)*100+'%'
            sections[index+1].style.transform = `translateY(${percents})`;
            sections[index+1].classList.add('is-visible');
            sections[index].classList.remove('is-visible');
            sections[index].style.transform = '';
            sectionLock();
            
        }

        function sectionDetection() {
            var index;
            sections.forEach(function(el){
                if (el.classList.contains('is-visible')) {
                    index = el.dataset.index;
                }
            });
            return parseInt(index);
        };

        function sectionLock() {
            lock = true;
            setTimeout(() => lock = false, 1000);
        }

    }

})();


////////////////////// Конец функции //////////////////////////// 




///////////////////////// Рабочий вариант запроса ///////////////////

const url = 'https://webdev-api.loftschool.com/sendmail';
//const fail = 'https://webdev-api.loftschool.com/sendmail/fail'
var deliveryForm = document.querySelector('#deliveryForm');
var submitButtom = document.querySelector('#submitButtom');

submitButtom.addEventListener('click', (e) => {
    e.preventDefault();
    var formData = new FormData(deliveryForm);
    formData.append('to', 'sapsanno@gmail.com')

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', url);
    //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(formData);
    
    xhr.addEventListener('load', () => showModalMessage(xhr.response));
    
});

function showModalMessage (messageObj) {
    var div = document.getElementsByClassName('modal-window-message')[0];
    if (messageObj.status === 1) {
        div.textContent = messageObj.message;
        //document.body.style.overflow = 'hidden';
        div.classList.add('is-active');
        setTimeout(deleteModalMessage, 	2000);
        
    } else {
            div.textContent = messageObj.message;
           //document.body.style.overflow = 'hidden';
            div.classList.add('is-active');
            setTimeout(deleteModalMessage, 	2000);
        }

    function deleteModalMessage() {
        div.classList.remove('is-active');
        div.textContent = '';
        document.body.style.overflow = '';
    }
}


////////////////////// Конец функции //////////////////////////// 



//////////////////// через промисы ////////////////////


const url = 'https://webdev-api.loftschool.com/sendmail';
var deliveryForm = document.querySelector('#deliveryForm');
var submitButtom = document.querySelector('#submitButtom');
const alertMessage = 'Произошел сбой при отправке заказа';

function sendData(url) {
    return new Promise((resolve, reject) => {
    var formData = new FormData(deliveryForm);
    formData.append('to', 'sapsanno@gmail.com');

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('POST', url);
    //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(formData);
    
        xhr.addEventListener('load', () => {
            if (xhr.status <= 400) {             
                resolve(xhr.response.message);
                
            } else {
                reject(xhr.response);                                                      
                }
        });

    });
};

function showModalMessage (messageObj) {
    var div = document.getElementsByClassName('modal-window-message')[0];
        div.textContent = (!messageObj) ? alertMessage : messageObj;
        div.classList.add('is-active');
        setTimeout(deleteModalMessage, 	2000);

    function deleteModalMessage() {
        div.classList.remove('is-active');
        div.textContent = '';
    }
};

/*submitButtom.addEventListener('click', (e) => {
    e.preventDefault();
        sendData(url)
        .then(value => showModalMessage(value))
        .catch(value => showModalMessage(value));

});
*/
////////////////////// Конец функции //////////////////////////// 


var submitButtom = document.querySelector('#submitButtom');

var dataObj = [
    document.querySelector('#name'),
    document.querySelector('#phone'),
    document.querySelector('#comment')
]
var flag;

/*function checkSpace(input) {

    input.forEach(function(el) {
        
        if (el.value == '') {
            var div = createAlert();
            el.parentElement.style.position = 'relative'; 
            el.parentElement.appendChild(div);
            el.style.borderColor = 'red';

            (function () {
                setTimeout(() => {
                    div.remove();
                    el.style.borderColor = '';
                    el.parentElement.style.position = ''; 
                }, 1500);
            })();   
            console.log('false');
            return flag = false;
            
        } else 
            console.log('true');
            return flag = true;
            
    }); 

}*/

function showAlert(el) {
    var div = createAlert();
    el.parentElement.style.position = 'relative'; 
    el.parentElement.appendChild(div);
    el.style.borderColor = 'red';

    (function () {
        setTimeout(() => {
            div.remove();
            el.style.borderColor = '';
            el.parentElement.style.position = ''; 
        }, 1500);
    })();   
}

function checkSpace(input) {
    flag = true;
    return new Promise((resolve) => {

        input.forEach(function(el) {
            if (el.value == '') {
                flag = false;
                resolve(el);
            }  else ;
        });
    });
}


function createAlert() {
    var div = document.createElement('div');
    div.classList.add('alert-text');
    div.textContent = 'Это поле дожно быть заполнено';
    return div;
}

function sendMessage(event) {
    if (event.cancelable) {
        event.preventDefault();
    } 
    checkSpace(dataObj)
    .then((el) => showAlert(el));
    if (flag) {
        sendData(url)
        .then(value => showModalMessage(value))
        .catch(value => showModalMessage(value));
    }
}

submitButtom.addEventListener('click', sendMessage);






/////////////////////////////// фильтры  /////////////////////////////////
var inputTextContent = [
    document.querySelector('#name'),
]

var inputDigitContent = [
    document.querySelector('#phone'), 
    document.querySelector('#housing'), 
    document.querySelector('#flat-number'), 
    document.querySelector('#floor'), 
]

var deliveryForm = document.querySelector('#deliveryForm');

deliveryForm.addEventListener('keydown', filters)

function filters(event) {

    target = event.target;

    /*target.addEventListener('keydown', () => {
        
    });*/

    inputDigitContent.forEach(el => {
        if (target === el) {
            digitFilter();
        } 
    });

    function digitFilter() {
        //.+7.+\d{3}.+\s\d{3}.+\d{2}.+\d{2} +7(xxx) xxx-xx-xx
        /*var regPhone = /^(.+7|8)\d{9}$/  //+7xxxxxxxxxx/8xxxxxxxxx
        if (!regPhone.test(target.value)) {
            console.log(regPhone.test(target.value))
        } else console.log(regPhone.test(target.value))*/
        //console.log(target.value.charCodeAt(event.key))  
        /*if (event.key >= '0' && event.key <= '9') {
            console.log('ddd')
        } else return false;*/
        var number = String.charCodeAt(event.key);
        console.log(event.key)
        if (number < 48 || number > 57)  {
            event.preventDefault();
        };
       console.log(String.charCodeAt(event.key))
    }
    //|| (number != 66) || (number != 70) || (number != 65)
}

////////////////////////////// команда слайдер //////////////////////////

var teamList = document.querySelector('.team');

function showTeam(event) {
    if(event.cancelable) {
        event.preventDefault(); 
    }

    var target = event.target;
    if (target.tagName != 'A') return;
    var currentDiv = target.nextElementSibling;

    target.classList.toggle('team-name-is-active');
    currentDiv.classList.toggle('team-is-active');
}

teamList.addEventListener('click', showTeam);




/////////////////////////////// меню слайдер ///////////////////////////////

var menuList = document.querySelector('.menu');
var previousTarget = null;
const maxWidth = 650;  
var itemsCount = menuList.children.length;

var f=true;

function showMenu(event) {
    if (event.cancelable) {
        event.preventDefault(); 
    }
    
    var target = event.target//.closest('a');
    //console.log(event.relatedTarget);
    if (target.nodeName !== 'A') {
        event.stopPropagation();
        //target = event.target.closest('a');
        
    //return; 
    } 

    /*if ((previousTarget != null) && (previousTarget !== target)) {
        toggleTarget(previousTarget);
    previousTarget = target;
    toggleTarget(target);
        console.log('if')
    } else { 
        console.log('else');
        toggleTarget(target);
        previousTarget = target;
    }*/

    if (previousTarget === null) {
        
        previousTarget = target;
    }

    if (previousTarget !== target) {

        closeTarget(previousTarget);  
        previousTarget = target;
        openTarget(target);


    }  else {
        toggleTarget(previousTarget);

    }

    if (target === link) {
        closeTarget(target);
    }

}

/*function variables (target){
    
    return (item, description, text)
};*/

function toggleTarget(target) {

    var item = target.closest('li');
    var description = item.querySelector('.menu-description-wrapper');
    var text = item.querySelector('.menu-description');
    
    item.classList.toggle('menu-description-is-active');
    description.classList.toggle('menu-description-is-active');
    var requireWidth = window.innerWidth - menuList.children[0].offsetWidth*(itemsCount-1);
    if ( requireWidth > maxWidth) {
        item.style.width = maxWidth + 'px';
        description.style.width = maxWidth + 'px';
    }  else {
        item.style.width = requireWidth + 'px';
        description.style.width = requireWidth + 'px';
    }  

    /*if (f) {
        elemWidth(item, description);
        f = false;
    } else { 
        item.style.width = '';
        description.style.width = '';
        f = true;
    }*/

    setTimeout(() => text.classList.toggle('text-visible'), 1100);
    return link = item.querySelector('.menu-description__link');
    
}

function openTarget(target) {
    var item = target.closest('li');
    var description = item.querySelector('.menu-description-wrapper');
    var text = item.querySelector('.menu-description');
    item.classList.add('menu-description-is-active');
    description.classList.add('menu-description-is-active');
    var requireWidth = window.innerWidth - menuList.children[0].offsetWidth*(itemsCount-1);
    if ( requireWidth > maxWidth) {
        item.style.width = maxWidth + 'px';
        description.style.width = maxWidth + 'px';
    }  else {
        item.style.width = requireWidth + 'px';
        description.style.width = requireWidth + 'px';
    }  

    //elemWidth(item, description);


    setTimeout(() => text.classList.toggle('text-visible'), 1100);
    
    return link = item.querySelector('.menu-description__link');
}

function closeTarget(previousTarget) {
    var item = previousTarget.closest('li');
    var description = item.querySelector('.menu-description-wrapper');
    var text = item.querySelector('.menu-description');
    item.classList.remove('menu-description-is-active');
    item.style.width = '';
    description.style.width = '';
    description.classList.remove('menu-description-is-active');

    text.classList.remove('text-visible');
    return link = item.querySelector('.menu-description__link');
}


/*function elemWidth(item, description) {
if (bodyWidth > 768) {
    item.style.width = maxWidth + 'px';
    description.style.width = maxWidth + 'px';
    }
}*/

menuList.addEventListener('click', showMenu);






//////////////////////////////////////////////////////////







////вариант меню  работающий последний

var menuList = document.querySelector('.menu');
var itemsCount = menuList.children.length;
var requireWidth = window.innerWidth - menuList.children[0].offsetWidth*(itemsCount-1);

menuList.addEventListener('click', showMenu);

function showMenu(event) {
    if (event.cancelable) {
        event.preventDefault(); 
    }
    
    var target = event.target;

    if (target.nodeName !== 'A') {
        event.stopPropagation();
    }  
    var items = document.querySelectorAll('.menu__item');
    var item = target.closest('li');
    var texts = document.querySelectorAll('.menu-description');
    var text = item.querySelector('.menu-description');
    var descriptions = document.querySelectorAll('.menu-description-wrapper');
    var description = item.querySelector('.menu-description-wrapper');
    const maxWidth = 550;  
    

    if (!item.classList.contains('menu-description-is-active')) {
        for (let i = 0; i<items.length; i++) {
            items[i].classList.remove('menu-description-is-active');
            descriptions[i].classList.remove('menu-description-is-active');
            texts[i].classList.remove('text-visible');
            items[i].style.width = '';
            descriptions[i].style.width = '';
        }
        item.classList.add('menu-description-is-active');
        description.classList.add('menu-description-is-active');
        setTimeout(() => text.classList.add('text-visible'), 1100);
        
        if (requireWidth > maxWidth) {
            item.style.width = maxWidth + 'px';
            description.style.width = maxWidth + 'px';
        }  else {
            item.style.width = requireWidth + 'px';
            description.style.width = requireWidth + 'px';
        }  
    } else {
        item.classList.remove('menu-description-is-active');
        description.classList.remove('menu-description-is-active');
        text.classList.remove('text-visible');
        item.style.width = '';
        description.style.width = '';
    }

}



////////////////////////////////////// отзывы старое ///////////////////////////////


function chow(e) {
    if (e.cancelable) {
        e.preventDefault();
    }
    showComment();
}

function showComment (e) {
    if (e.cancelable) {
        e.preventDefault();
    }

    var item = document.getElementsByClassName('peoples__link');
    var comment = document.getElementsByClassName('comments-full__item');
    for (let i = 0; i<item.length; i++) {
      
            let index = i;
            //console.log(index);
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

    }

} 

peoplesList.addEventListener('click', showComment);


////////////

peoplesList = document.querySelector('.peoples__list');
commentList = document.querySelector('.comments-full__list')

var links = document.getElementsByClassName('peoples__image');
var comment = document.getElementsByClassName('comments-full__item');


(function changePeoples(links){
    
    
    let i = 0;
    
    function repeat(i) {
        
        while (i < links.lenght) {
            
            if (i != 0) {
                links[i].classList.add('peoples-is-active');
                links[i-1].classList.remove('peoples-is-active');
            } else {
                links[i].classList.add('peoples-is-active');
            }
            console.log(i); 
            setTimeout(() => {
                i++;
                console.log(i);
            }, 3000);       
        }
        
    }
    setTimeout(() => {repeat(i++)}, 1000);
        
    
    
})(links);


/*function setBorder(i) {
    if (i >= links.length) {
        i = 0;

    } else 
        if (i != 0) {
            links[i].classList.add('peoples-is-active');
            links[i-1].classList.remove('peoples-is-active');
        } else {
            links[links.length-1].classList.remove('peoples-is-active');
            links[i].classList.add('peoples-is-active');
        }
    
    return i;
}*/

function setBorder(link) {
    link.classList.add('peoples-is-active');

}

function removeBorder(link) {
    link.classList.remove('peoples-is-active');
}

/*var i = 0
setBorder(i);

//while (i<links.lenght) {
    setTimeout(() => {
        setborder(i)
    }, 3000);
    ++i;
   
//} */

/*links.forEach(function(element, i){                   //работает добаление
    setTimeout(function(){
        setBorder(element);
    }, 5000 * ++i);
  
});*/


/////////////////////////////// слайдшоу работающее ///////////////////////////////
var links = [].slice.call(document.getElementsByClassName('peoples__image'));
var comment = [].slice.call(document.getElementsByClassName('comments-full__item'));

const delay = 4000;
const commentLength = links.length;

window.onload = () => {
    setInterval(() => {
        peoplesSlideshow();
        commentSlideshow();
    }, commentLength*delay);
}

function peoplesSlideshow() {

    function setBorder(link) {
        link.classList.add('peoples-is-active');
    }
    
    function removeBorder(link) {
        link.classList.remove('peoples-is-active');
    }

    links.forEach(function(element, i){                   //работает добаление
        setTimeout(() => setBorder(element), delay * ++i);
        setTimeout(() => removeBorder(element), delay * ++i);
    });
}

function commentSlideshow() {
    function showComment(comment) {
        comment.classList.add('is-active');
    }
    
    function hideComment(comment) {
        comment.classList.remove('is-active');
    }

    comment.forEach(function(element, i){                   //работает добаление
        setTimeout(() => showComment(element), delay * ++i);
        setTimeout(() => hideComment(element), delay * ++i);
    });
}

////////////////////////// конец функции /////////////////////////////////////


/*(function changePeoples(links){
    let i = 0;
    
        console.log(i);
        while (i < links.lenght) {

            (function act(i){
            if (i != 0) {
                links[i].classList.add('peoples-is-active');
                link[i-1].classList.remove('peoples-is-active');
            } else {
                links[i].classList.add('peoples-is-active');
            }
            console.log(i);
            setTimeout(function() {act(i+1)}, 1000);
            
             })(i);
        }
  
    
    
})(links);*/



/////////////////////////////////////////////////////////////////////////////////////////////

var animation = true;

window.onload = () => startSlideshow;


var startSlideshow = (function(animation){
    var links = [].slice.call(document.getElementsByClassName('peoples__image'));
    var comment = [].slice.call(document.getElementsByClassName('comments-full__item'));

    const delay = 4000;
    const commentLength = links.length;

    var timer = setInterval(() => {
                peoplesSlideshow();
                commentSlideshow();
                }, commentLength*delay);

    if (animation) {
        timer;
        return false;
    } else {
        clearInterval(timer);
    };


function peoplesSlideshow() {

    function setBorder(link) {
        link.classList.add('peoples-is-active');
    }
    
    function removeBorder(link) {
        link.classList.remove('peoples-is-active');
    }

    links.forEach(function(element, i){                   //работает добаление
        setTimeout(() => setBorder(element), delay * ++i);
        setTimeout(() => removeBorder(element), delay * ++i);
    });
}

function commentSlideshow() {
    function showComment(comment) {
        comment.classList.add('is-active');
    }
    
    function hideComment(comment) {
        comment.classList.remove('is-active');
    }

    comment.forEach(function(element, i){                   //работает добаление
        setTimeout(() => showComment(element), delay * ++i);
        setTimeout(() => hideComment(element), delay * ++i);
    });
}
})(animation);





///////////////////////////////////////////// почти рабочий комплекс слайдшоу + выбор

var animation = true;
var firstStart = true;
var prevIndex = 0;
var index;

window.onload = () => startSlideshow(animation);

function startSlideshow(animation) {
    var images = [].slice.call(document.getElementsByClassName('peoples__image'));
    var comment = [].slice.call(document.getElementsByClassName('comments-full__item'));
    var links = [].slice.call(document.getElementsByClassName('peoples__link'));
    var peoplesList = document.querySelector('.peoples__list');

    var delay = 4000;

    /*if (firstStart) {
        delay = 10;       
        firstStart = false;
    } else {
        delay = 4000;
    }*/

    const commentLength = images.length;

    var timer = setInterval(() => {
        if (animation) {
                peoplesSlideshow();
                commentSlideshow();
                console.log('прокрутка идет');
            }
            else {
                clearInterval(timer);
                console.log('прокрутка остановлена');
                return false;
            };
                }, commentLength*delay);

    function peoplesSlideshow() {

        function setBorder(link) {
            link.classList.add('peoples-is-active');
        }
        
        function removeBorder(link) {
            link.classList.remove('peoples-is-active');
        }

        images.forEach(function(element, i) {                   
            setTimeout(() => setBorder(element), delay * ++i);
            setTimeout(() => removeBorder(element), delay * ++i);
        });
    }

    function commentSlideshow() {
        function showComment(comment) {
            comment.classList.add('is-active');
        }
        
        function hideComment(comment) {
            comment.classList.remove('is-active');
        }

        comment.forEach(function(element, i) {                   
            setTimeout(() => showComment(element), delay * ++i);
            setTimeout(() => hideComment(element), delay * ++i);
        });
    };

   
    peoplesList.addEventListener('click', showCommentOnClick)

    function showCommentOnClick(event) {

        if (event.cancelable) {
            event.preventDefault();
        }
       // animation = false;

        var target = event.target;
        if (target.nodeName !== 'A') {
            event.stopPropagation();
            target = event.target.closest('a');
        } 

        index = links.indexOf(target)

        if ((index >= 0) && (prevIndex !== index)) {
            changeCommentAndMan(prevIndex, index);
            prevIndex = index;            
        } 
        return (index, prevIndex);

    }
    console.log(index);
    console.log(prevIndex);

    function changeCommentAndMan(prevIndex, index) {
        comment[index].classList.add('is-active');
        comment[prevIndex].classList.remove('is-active');
        images[index].classList.add('peoples-is-active');
        images[prevIndex].classList.remove('peoples-is-active');
    }

}




















/*function showCommentOnClick (item, comment) {
 
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

showComment(peoples, comment); 
*/




//////////слайдер меню /посленяя версия //////////////////////////

var menuList = document.querySelector('.menu');
    var itemsCount = menuList.children.length;
    var requireWidth = window.innerWidth - menuList.children[0].offsetWidth*(itemsCount-1);
    
    menuList.addEventListener('click', showCloseMenu);
    
    function showCloseMenu(event) {
        event.preventDefault(); 

        var target = event.target;
        
        if (target.tagName !== 'A') {
            target = target.closest('a');
            if (!target) return;
        } 

        
        var items = document.querySelectorAll('.menu__item');
        var item = target.closest('li');
        var texts = document.querySelectorAll('.menu-description');
        var text = item.querySelector('.menu-description');
        var descriptions = document.querySelectorAll('.menu-description-wrapper');
        var description = item.querySelector('.menu-description-wrapper');
        const maxWidth = 650;  
        
        if (!item.classList.contains('menu-description-is-active')) {
            for (var i = 0; i<items.length; i++) {
                items[i].classList.remove('menu-description-is-active');
                descriptions[i].classList.remove('menu-description-is-active');
                texts[i].classList.remove('text-visible');
                items[i].style.width = '';
                descriptions[i].style.width = '';
            }
            item.classList.add('menu-description-is-active');
            description.classList.add('menu-description-is-active');
            setTimeout(() => text.classList.add('text-visible'), 1100);
            
            if (requireWidth > maxWidth) {
                item.style.width = maxWidth + 'px';
                description.style.width = maxWidth + 'px';
            }  else {
                item.style.width = requireWidth + 'px';
                description.style.width = requireWidth + 'px';
            }  

        } else {
            item.classList.remove('menu-description-is-active');
            description.classList.remove('menu-description-is-active');
            text.classList.remove('text-visible');
            item.style.width = '';
            description.style.width = '';
        }

    }




/////////////////////// ссылки по дата-атрибуту /////////////////////////////////

(function() {

    var navList = document.querySelector('.navigation__list');
    var navListFullscreen = document.querySelector('.navigation__list.fullscreen');
    var paginationList = document.querySelector('.pagination__list');
    var sections = [].slice.call(document.getElementsByTagName('section'));
    var links = [].slice.call(document.querySelectorAll('.pagination__link'));
    var dots = [].slice.call(document.querySelectorAll('.pagination__dot-filled'));

    navList.addEventListener('click', anchorsTo);
    navListFullscreen.addEventListener('click', anchorsTo);
    paginationList.addEventListener('click', anchorsTo);


    function anchorsTo(e) {
        e.preventDefault();

        target = e.target;
        
        if (target.nodeName !== 'A') {
            target = target.closest('a');
            if (!target) return;
        }   

        

        index = parseInt(target.dataset.index);
        currentSection = sectionDetection();

        if (target.className == 'pagination__link') {
            links.forEach(el => el.classList.remove('active-section'));
            links[index].classList.add('active-section'); 

            
        } 

        percents = -(index)*100+'%'
        sections[index].style.transform = `translateY(${percents})`;
        sections[index].classList.add('is-visible');
        sections[currentSection].classList.remove('is-visible');
        sections[currentSection].style.transform = '';

        switchDotsColor(index);

    }

    function sectionDetection() {
        var index;
        sections.forEach(function(el){
            if (el.classList.contains('is-visible')) {
                index = el.dataset.index;
            }
        });
        return parseInt(index);
    };

    function switchDotsColor(currentSection) {
        switch (currentSection) {
                
            case 0: case 4: case 7: 
                paginationList.classList.remove('pagination__list_black');
                paginationList.classList.add('pagination__list_white');
                dots.forEach(function(el) {
                    el.classList.remove('pagination__dot-filled_black');
                    el.classList.add('pagination__dot-filled_white');
                });
            break;

            case 1: case 2: case 3: case 5: case 6: case 8:
                paginationList.classList.remove('pagination__list_white');
                paginationList.classList.add('pagination__list_black');
                dots.forEach(function(el) {
                    el.classList.remove('pagination__dot-filled_white');
                    el.classList.add('pagination__dot-filled_black');
                });
            break;
        }
    }
    
})();





//////////////////// состав по mouseenter/mouseleave ////////////////////
(function() {
    var item = document.querySelector('.bar-chocco__item.is-active')
    var composition = item.querySelector('.bar-composition');
    var fullComposition = document.querySelector('.bar-full-composition');

    composition.addEventListener('mouseenter', onMouseEnter);

    function onMouseEnter(e) {
        fullComposition.classList.add('on-touch');
    }

    composition.addEventListener('mouseleave', onMouseleave);

    function onMouseleave(e) {
        fullComposition.classList.remove('on-touch');
    }
})();








///////////////////////////////////// ops и ссылки комплекс //////////////////////////////
(function() {
    
    var ops = document.querySelector('.ops-container');
    var sections = [].slice.call(document.getElementsByTagName('section'));
    var lock = false;
    var paginationList = document.querySelector('.pagination__list');
    var links = [].slice.call(document.querySelectorAll('.pagination__link'));
    var dots = [].slice.call(document.querySelectorAll('.pagination__dot-filled'));

    ops.addEventListener('wheel', scrolling);
   // ops.addEventListener('keydown', scrolling);
    
    function scrolling(e) {

        var percents;
        var index = sectionDetection();
        if (lock) return;
        if (e.deltaY < 0)  {
            if (index == 0) return;
            changeSection(index, index-1);
            /*percents = -(index-1)*100+'%'
            sections[index-1].style.transform = `translateY(${percents})`;
            sections[index-1].classList.add('is-visible');
            sections[index].classList.remove('is-visible');
            sections[index].style.transform = '';*/
            

            sectionLock();
            switchDotsColor(index-1);
            setActiveDot(index-1);

        } else if (e.deltaY > 0)  {
            if (index == sections.length-1) return;

            changeSection(index, index+1);
            /*percents = -(index+1)*100+'%'
            sections[index+1].style.transform = `translateY(${percents})`;
            sections[index+1].classList.add('is-visible');
            sections[index].classList.remove('is-visible');
            sections[index].style.transform = '';*/

            sectionLock();
            switchDotsColor(index+1);
            setActiveDot(index+1);
        }

    }

    var navList = document.querySelector('.navigation__list');
    var navListFullscreen = document.querySelector('.navigation__list.fullscreen');

    navList.addEventListener('click', anchorsTo);
    navListFullscreen.addEventListener('click', anchorsTo);
    paginationList.addEventListener('click', anchorsTo);


    function anchorsTo(e) {
        e.preventDefault();

        target = e.target;
        
        if (target.nodeName !== 'A') {
            target = target.closest('a');
            if (!target) return;
        }   

        index = parseInt(target.dataset.index);                           //индекс активной секции
        currentSection = sectionDetection();

        setActiveDot(index);
        changeSection(currentSection, index)
        /*percents = -(index)*100+'%'                                        //
        sections[index].style.transform = `translateY(${percents})`;       //      
        sections[index].classList.add('is-visible');                       //   переключение секций
        sections[currentSection].classList.remove('is-visible');           //
        sections[currentSection].style.transform = '';*/                     //

        switchDotsColor(index);                                 

    }


    function changeSection(oldSection, newSection) {      
        percents = -(newSection)*100+'%'                                           //переключение секций
        sections[newSection].style.transform = `translateY(${percents})`;       //      
        sections[newSection].classList.add('is-visible');                       //   переключение секций
        sections[oldSection].classList.remove('is-visible');           //
        sections[oldSection].style.transform = ''; 
    }

    function sectionDetection() {                                       //определение активной секции
        var index;
        sections.forEach(function(el){
            if (el.classList.contains('is-visible')) {
                index = el.dataset.index;
            }
        });
        return parseInt(index);
    };

    function sectionLock() {                                            //блокировка прокрутки 
        lock = true;
        setTimeout(() => lock = false, 1000);
    }


    function switchDotsColor(currentSection) {                                                                                                                      //изменение цвета активной секции у списка с "точками"  
        switch (currentSection) {
                
            case 0: case 4: case 7:
                addAndRemoveClasses('pagination__list_black', 'pagination__list_white', 'pagination__dot-filled_black', 'pagination__dot-filled_white');   
            break;

            case 1: case 2: case 3: case 5: case 6: case 8:       
            addAndRemoveClasses('pagination__list_white', 'pagination__list_black', 'pagination__dot-filled_white', 'pagination__dot-filled_black');                       
            break;
        }

        function addAndRemoveClasses(listRemove, listAdd, dotRemove, dotAdd) {
            paginationList.classList.remove(listRemove);
            paginationList.classList.add(listAdd);
            dots.forEach(function(el) {
                el.classList.remove(dotRemove);
                el.classList.add(dotAdd);
            });
        }
    }

    function setActiveDot(index) {                                                              //добавление обводки на активной секции у списка с "точками"
        links.forEach(el => el.classList.remove('active-section'));
        links[index].classList.add('active-section');
    }

})();

ymaps.ready(init);
function init(){ 
    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7;
    });
}