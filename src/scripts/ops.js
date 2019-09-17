(function() {
    

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        var defUserAgent = true;
    } 
    //one page scroll, ссылки-якоря

    var ops = document.querySelector('.ops-container');
    var sections = [].slice.call(document.getElementsByTagName('section'));
    var lock = false;
    var paginationList = document.querySelector('.pagination__list');
    var links = [].slice.call(document.querySelectorAll('.pagination__link'));
    var dots = [].slice.call(document.querySelectorAll('.pagination__dot-filled'));
    var navList = document.querySelector('.navigation__list');
    var navListFullscreen = document.querySelector('.navigation__list.fullscreen');

    ops.addEventListener('wheel', (e) => {
        var direction = ( e.deltaY || e.originalEvent.deltaY) < 0 ? "down" : "up";
        scrolling(direction)
    });
   // ops.addEventListener('keydown', scrolling);
    navList.addEventListener('click', anchorsTo);
    navListFullscreen.addEventListener('click', anchorsTo);
    paginationList.addEventListener('click', anchorsTo);
    ops.addEventListener("touchmove", e=> {
        e.preventDefault();
    });
    
    function scrolling(direction) {                                             //прокрутка колесом
    
        
        var index = sectionDetection();

        if (lock) return;
        if (direction==="down")  {

            if (index == 0) return;

            changeSection(index, index-1);
            sectionLock();
            switchDotsColor(index-1);
            setActiveDot(index-1);


        } else if (direction==="up")  {
            if (index == sections.length-1) return;

            changeSection(index, index+1);
            sectionLock();
            switchDotsColor(index+1);
            setActiveDot(index+1);
        }

        //if (index == 5) closeComments();
 
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

    if (defUserAgent) {
        $(window).swipe({
            swipe: function(event, direction) {
                scrolling(direction);
            }
        });
    }
        

})();