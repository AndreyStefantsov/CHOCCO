(function() {

    // переключение отзывов

    var images = [].slice.call(document.getElementsByClassName('peoples__image'));
    var commentList = [].slice.call(document.getElementsByClassName('comments-full__item'));
    var links = [].slice.call(document.getElementsByClassName('peoples__link'));
    var peoplesList = document.querySelector('.peoples__list');
    
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
    
        }
    
        function changeCommentAndMan(prevIndex, index) {
            commentList[index].classList.add('is-active');
            commentList[prevIndex].classList.remove('is-active');
            images[index].classList.add('peoples-is-active');
            images[prevIndex].classList.remove('peoples-is-active');
        }
    
    
})();
