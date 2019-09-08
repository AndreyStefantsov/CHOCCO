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

////////////////////// Конец функции //////////////////////////// 


//////////////////////////////// меню аккордеон ///////////////////

var menuList = document.querySelector('.menu');
var previousTarget = null;
const maxWidth = 650;  
var itemsCount = menuList.children.length;

var f=true;

function showMenu(event) {
    if (event.cancelable) {
        event.preventDefault(); 
    }

    var target = event.target;
    if (target.nodeName !== 'A') {
        event.stopPropagation();
    } 

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

menuList.addEventListener('click', showMenu);


////////////////////// Конец функции //////////////////////////// 



////////////////////// Меню скрытое//////////////////////

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

        } else {
            activeItem.classList.toggle('is-active', false);
            activeItem = firstItem; 
            activeItem.classList.toggle('is-active', true);
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





////////////////////slideshow


var animation = true;
//var firstStart = true;
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

    function changeCommentAndMan(prevIndex, index) {
        comment[index].classList.add('is-active');
        comment[prevIndex].classList.remove('is-active');
        images[index].classList.add('peoples-is-active');
        images[prevIndex].classList.remove('peoples-is-active');
    }

}


