
////////////////////// Меню скрытое//////////////////////

(function() {
    const burger = document.getElementsByClassName('burger')[0];
    const greetingContainer = document.getElementsByClassName('container-greeting')[0];
    const nav = document.getElementsByClassName('burger-menu-navigation')[0];
    const burgerCloseLines = document.getElementsByClassName('close-lines')[0];
    const opsContainer = document.querySelector('.ops-container');
    
    var navigationList = document.getElementsByClassName('fullscreen')[0]
    
    burger.addEventListener('click', function(event) {
        event.preventDefault();
    
            nav.style.display = "flex";
            burgerCloseLines.style.display = 'block';
            greetingContainer.style.display='none';
            document.body.style.overflow = 'hidden'
            opsContainer.classList.remove('is-hidden');
    });
    
    burgerCloseLines.addEventListener('click', function(event) {
        event.preventDefault();
    
            nav.style.display = "none";
            burgerCloseLines.style.display = 'none';
            greetingContainer.style.display='flex';
            document.body.style.overflow = '';
            opsContainer.classList.add('is-hidden');
    });
    
    (function() {
        for (node of navigationList.children) {
            node.addEventListener('click', function() {
                nav.style.display = "none";
                burgerCloseLines.style.display = 'none';
                greetingContainer.style.display='flex';
                document.body.style.overflow = '';
                opsContainer.classList.add('is-hidden');
            });
        }
        
    })();
})();


////////////////////// Конец функции //////////////////////////// 


//////////////////////////////// ops и ссылки //////////////////////////////

(function() {
    
    var ops = document.querySelector('.ops-container');
    var sections = [].slice.call(document.getElementsByTagName('section'));
    var lock = false;
    var paginationList = document.querySelector('.pagination__list');
    var links = [].slice.call(document.querySelectorAll('.pagination__link'));
    var dots = [].slice.call(document.querySelectorAll('.pagination__dot-filled'));
    var navList = document.querySelector('.navigation__list');
    var navListFullscreen = document.querySelector('.navigation__list.fullscreen');

    ops.addEventListener('wheel', scrolling);
   // ops.addEventListener('keydown', scrolling);
    navList.addEventListener('click', anchorsTo);
    navListFullscreen.addEventListener('click', anchorsTo);
    paginationList.addEventListener('click', anchorsTo);
    
    function scrolling(e) {                                             //прокрутка колесом

        var index = sectionDetection();

        if (lock) return;
        if (e.deltaY < 0)  {
            if (index == 0) return;

            changeSection(index, index-1);
            sectionLock();
            switchDotsColor(index-1);
            setActiveDot(index-1);

        } else if (e.deltaY > 0)  {
            if (index == sections.length-1) return;

            changeSection(index, index+1);
            sectionLock();
            switchDotsColor(index+1);
            setActiveDot(index+1);
        }

    }

    function anchorsTo(e) {                                             //переход по ссылкам навигации
        e.preventDefault(); 

        target = e.target;
        
        if (target.nodeName !== 'A') {
            target = target.closest('a');
            if (!target) return;
        }   

        index = parseInt(target.dataset.index);                           //индекс активной секции
        currentSection = sectionDetection();

        setActiveDot(index);
        changeSection(currentSection, index);
        sectionLock();
        switchDotsColor(index);                                 

    }

    function changeSection(oldSection, newSection) {                            //переключение секций
        var percents;    
        percents = -(newSection)*100+'%'                                           
        sections[newSection].style.transform = `translateY(${percents})`;        
        sections[newSection].classList.add('is-visible');                       
        sections[oldSection].classList.remove('is-visible');           
        sections[oldSection].style.transform = ''; 
    }

    function sectionDetection() {                                             //определение активной секции
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


////////////////////// Конец функции //////////////////////////// 


///////////////////////////////// Слайдер с батончиками ///////////////////////////////////////////////////
(function() {
    var f = false;
    const arrowleft = document.getElementsByClassName('arrow__link-left')[0];
    const arrowRight = document.getElementsByClassName('arrow__link-right')[0];

    showComposition();

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
        showComposition();
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
        showComposition();

    });

    function showComposition() {
        var item;
        item = document.querySelector('.bar-chocco__item.is-active')
        var composition = item.querySelector('.bar-composition');
        var fullComposition = item.querySelector('.bar-full-composition');

        composition.addEventListener('mouseenter', onMouseEnter);

        function onMouseEnter() {
            fullComposition.classList.add('on-touch');
            composition.classList.add('bar-composition_hover-color');
        }

        composition.addEventListener('mouseleave', onMouseleave);

        function onMouseleave() {
            fullComposition.classList.remove('on-touch');
            composition.classList.remove('bar-composition_hover-color');
        }
    };

})();


////////////////////// Конец функции //////////////////////////// 


////////////////////////////// команда слайдер //////////////////////////
(function() {
    var teamList = document.querySelector('.team');

    function showTeam(event) {
            event.preventDefault(); 

        var target = event.target;
        if (target.tagName != 'A') return;
        var currentDiv = target.nextElementSibling;

        target.classList.toggle('team-name-is-active');
        currentDiv.classList.toggle('team-is-active');
    }

    teamList.addEventListener('click', showTeam);
})();


////////////////////// Конец функции //////////////////////////// 


//////////////////////////////// меню аккордеон ///////////////////

(function() {
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

})();


////////////////////// Конец функции //////////////////////////// 



///////////////////////// Рабочий вариант запроса ///////////////////
(function() {
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
            event.preventDefault();
        checkSpace(dataObj)                                                                 //проверка на пустое поле
        .then((el) => showAlert(el));
        if (flag) {                                                                         //если полей пустых нет, то отправить сообщение и показать соответсвующее сообщение
            sendData(url)
            .then(value => showModalMessage(value))
            .catch(value => showModalMessage(value));
        }
    }
    
    submitButtom.addEventListener('click', sendMessage);
    
})();

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

            event.preventDefault();
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


