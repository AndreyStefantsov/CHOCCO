(function() {

    // слайдер на секции команда
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