(function() {

    //слайдер секция батончики
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
