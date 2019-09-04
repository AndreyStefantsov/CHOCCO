var menu = document.getElementsByClassName('menu__link');                                //получение коллекции ссылок <a>
var team = document.getElementsByClassName('team-name');
var closeButton = document.getElementsByClassName('menu-description__link');
var peoples = document.getElementsByClassName('peoples__link');
var comment = document.getElementsByClassName('comments-full__item');


//if (document.documentElement.clientWidth > 768) ? showMenu(menu, 'width', '650px') : showMenu(menu, 'width', '350px')

if (parseInt(document.documentElement.clientWidth) > 900) {
    showMenu(menu, 'width', '650px');
} else {
    //не работает на phones 320px+
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
                this.parentElement.style.width="";                           //скрытие div с текстом меню
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
}

////////////////////// Конец функции //////////////////////////// 


////////////////////// Меню //////////////////////

const burger = document.getElementsByClassName('burger')[0];
const greetingContainer = document.getElementsByClassName('container-greeting')[0];
const nav = document.getElementsByClassName('burger-menu-navigation')[0];
const burgerCloseLines = document.getElementsByClassName('close-lines')[0];

var navigationList = document.getElementsByClassName('fullscreen')[0]

burger.addEventListener('click', function(event) {
    event.preventDefault();

        nav.style.display = "flex";
        burgerCloseLines.style.display = 'block';
        greetingContainer.style.display='none';
        document.body.style.overflow = 'hidden'

});


burgerCloseLines.addEventListener('click', function(event) {
    event.preventDefault();

        nav.style.display = "none";
        burgerCloseLines.style.display = 'none';
        greetingContainer.style.display='flex';
        document.body.style.overflow = '';
});

(function() {
    for (node of navigationList.children) {
        node.addEventListener('click', function() {
       
                nav.style.display = "none";
                burgerCloseLines.style.display = 'none';
                greetingContainer.style.display='flex';
                document.body.style.overflow = '';
        });
    }
    
})();


////////////////////// Конец функции //////////////////////////// 



///////////////////////////////// отзывы ///////////////////////////////////////////////////

function showComment (item, comment) {
 
    for (var i = 0; i<item.length; i++) {
        
        item[i].addEventListener('click', function(event) {
            event.preventDefault();

            var index = i;
            var j = 0;
            var k = 0;

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
const arrowleft = document.getElementsByClassName('arrow__link-left')[0];
const arrowRight = document.getElementsByClassName('arrow__link-right')[0];

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

        } else {
            activeItem.classList.toggle('is-active', false);
            activeItem = lastItem; 
            activeItem.classList.toggle('is-active', true);
        }
});

////////////////////// Конец функции //////////////////////////// 





///////////////////////// Рабочий вариант запроса ///////////////////

const url = 'https://webdev-api.loftschool.com/sendmail';
var deliveryForm = document.querySelector('#deliveryForm');
var submitButtom = document.querySelector('#submitButtom');
const alertMessage = 'Произошел сбой при отправке заказа';
var submitButtom = document.querySelector('#submitButtom');

var dataObj = [
    inputName = document.querySelector('#name'),
    inputPhone = document.querySelector('#phone'),
    deliveryComment = document.querySelector('#comment')
]

var flag;

function sendData(url) {                                                                //создание xhr запроса
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
                reject(xhr.response);                                                   //null            
                }
        });

    });
};

function showModalMessage (messageObj) {                                                // показ и скрытие окна с сообщением об отправке/ошибке
    var div = document.getElementsByClassName('modal-window-message')[0];
        div.textContent = (!messageObj) ? alertMessage  : messageObj;                   //если не false(null), то показать ответ, иначе - шаблонный ответ
        div.classList.add('is-active');
        setTimeout(deleteModalMessage, 	2000);

    function deleteModalMessage() {
        div.classList.remove('is-active');
        div.textContent = '';
    }
};

function showAlert(el) {                                                                // показ и скрытие div с предупреждением о необходимости заполенния
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

function checkSpace(input) {                                                            //проверка на пустое поле
    flag = true;                                                                        //флаг для определения, все ли поля заполнены
    return new Promise((resolve) => {

        input.forEach(function(el) {                                                    //последовательный показ div с предупреждением если поле пустое
            if (el.value == '') {
                flag = false;
                resolve(el);
            }  else ;
        });
    });
}

function createAlert() {                                                                // создание div с предупреждением            
    var div = document.createElement('div');
    div.classList.add('alert-text');
    div.textContent = 'Это поле дожно быть заполнено';
    return div;
}

function sendMessage(event) {                                                           //отправка сообщения
    if (event.cancelable) {
        event.preventDefault();
    } 
    checkSpace(dataObj)                                                                 //проверка на пустое поле
    .then((el) => showAlert(el));
    if (flag) {                                                                         //если полей пустых нет, то отправить сообщение и показать соответсвующее сообщение
        sendData(url)
        .then(value => showModalMessage(value))
        .catch(value => showModalMessage(value));
    }
}

submitButtom.addEventListener('click', sendMessage);

////////////////////// Конец функции //////////////////////////// 


