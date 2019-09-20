(function() {
    var teamList = document.querySelector('.team');
    var items = teamList.querySelectorAll('.team-proffesion ');
    var links = teamList.querySelectorAll('.team-name ');
    var flag = false;
    function showTeam(event) {
            event.preventDefault(); 

        var target = event.target;
        if (target.tagName != 'A') return;
        var currentDiv = target.nextElementSibling;
        var elemHeight = currentDiv.scrollHeight;        
        
        if (currentDiv.classList.contains('team-is-active') || (flag)) {
            openTeamDescription(currentDiv, elemHeight);

        } else {
            closeTeamDescription()
            openTeamDescription(currentDiv, elemHeight);
        }
        
        function openTeamDescription(currentDiv, elemHeight) {
            target.classList.toggle('team-name-is-active');
            currentDiv.classList.toggle('team-is-active');
            //currentDiv.style.height = elemHeight + 'px';
            currentDiv.classList.contains('team-is-active') ? currentDiv.style.height = elemHeight + 'px' : currentDiv.style.height = '';
            flag = false
        }

        function closeTeamDescription() {
            
            for (var i = 0; i < items.length; i++) {
                links[i].classList.remove('team-name-is-active');

                items[i].classList.remove('team-is-active');
                items[i].style.height = ''
            }
            flag = true;
        }
    
    
    }

 
   
    teamList.addEventListener('click', showTeam);
})();