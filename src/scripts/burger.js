(function() {

    //скрытое меню на приветсвенной секции
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
    
    function closeBurgerMenu() {
        for (nodeItem of navigationList.children) {
            nodeItem.addEventListener('click', function() {
                nav.style.display = "none";
                burgerCloseLines.style.display = 'none';
                greetingContainer.style.display='flex';
                document.body.style.overflow = '';
                opsContainer.classList.add('is-hidden');
            });
        }
        
    };


    closeBurgerMenu();
})();
