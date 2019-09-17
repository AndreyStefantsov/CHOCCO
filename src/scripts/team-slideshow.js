(function() {

    // переключение отзывов

    var images = [].slice.call(document.getElementsByClassName('peoples__image'));
    var commentList = [].slice.call(document.getElementsByClassName('comments-full__item'));
    var links = [].slice.call(document.getElementsByClassName('peoples__link'));
    var peoplesList = document.querySelector('.peoples__list');
    var prevIndex = 0;
    var index;
    var fullItem = [];

    document.addEventListener("DOMContentLoaded", () => {
        var texts = document.querySelectorAll('.comments-text__text');
        var maxLength = 230;
        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            maxLength = 150;
        } 

        for (var i=0; i<texts.length; i++) {
            if(texts[i].textContent.length > maxLength) {
                fullItem[i] = texts[i].textContent;
                texts[i].innerHTML = `${texts[i].textContent.slice(0, maxLength-30)} `;
                createModalLink(texts[i]);
            } 
        }

        showMOdalWindow();
    });

    
    peoplesList.addEventListener('click', showCommentOnClick)
    
        function showCommentOnClick(event) {
    
             event.preventDefault();
    
            var target = event.target;
            if (target.nodeName !== 'A') {
                target = event.target.closest('a');
            } 
    
            index = links.indexOf(target)
    
            if ((index >= 0) && (prevIndex !== index)) {
                changeCommentAndMan(prevIndex, index);
                prevIndex = index;            
            } 

            
            showMOdalWindow();
        }

        function showMOdalWindow() {
            var activeItem = document.querySelector('.comments-full__item.is-active');
            var modalLink = activeItem.querySelector('.modal-link');
            if (modalLink) {
                
                modalLink.addEventListener('click', () => {console.log('ttt')
                    var div = document.querySelector('.modal-window'); 
                    div.innerHTML =`${fullItem[index]} <a href="#" class="modal-window__close-window"></a>`;
                    divWrap.classList.add('visible');
                });
            }
        };
        
        var divWrap = document.querySelector('.modal-window-wrap'); 
        
       

        divWrap.addEventListener('click', closeModalWindow)

        function closeModalWindow(e) {
            target = e.target;
            if (target.className === 'modal-window') return
            divWrap.classList.remove('visible');
        }
    
        function changeCommentAndMan(prevIndex, index) {
            commentList[index].classList.add('is-active');
            commentList[prevIndex].classList.remove('is-active');
            images[index].classList.add('peoples-is-active');
            images[prevIndex].classList.remove('peoples-is-active');
        }
    

    
    
    function createModalLink(div) {
        var modalLink = document.createElement('span');
        modalLink.classList.add('modal-link');
        modalLink.textContent = 'подробнее';
        div.appendChild(modalLink);
    }
    
})();
