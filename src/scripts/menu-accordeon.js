(function() {

    //аккордеон на секции меню
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