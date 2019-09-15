(function() {

    // видеоплеер
    document.addEventListener("DOMContentLoaded", function() {

        var video = document.querySelector('#video__video-player');
        var duration = document.getElementById('duration');
        var sound = document.getElementById('sound');
        var play = document.querySelector('.controls__pic_play')
        var muteButton = document.querySelector('.controls__pic_sound')
        var durationStep;
        var currentSound;
        
        duration.min = 0;
        duration.value = 0;
        sound.min = 0;
        sound.max = 10;
    
    
        video.addEventListener('click', videoPlayPause)
        play.addEventListener('click', videoPlayPause)
        duration.addEventListener('mousedown', stopDurationMovement);
        duration.addEventListener('mouseup', setNewVideoTime);
        sound.addEventListener('mouseup', setNewSoundLevel);
        muteButton.addEventListener('click', muteUnmute);
    
        function videoPlayPause() {
            
            hideShowPlayButton();
            
            duration.max = video.duration;
    
            if (video.paused) {
                video.play();
                durationStep = setInterval(durationMovement, 1000/66);
            } else {
                stopDurationMovement();
            }
        }
    
        function hideShowPlayButton() {
            var playButton = document.querySelector('.video__img_play-button');
            playButton.classList.toggle('play-button-hidden');
        }
    
        function durationMovement() {
            duration.value = video.currentTime;
        }
    
        function stopDurationMovement() {
            video.pause();
            clearInterval(durationStep);
        }
    
        function setNewVideoTime() {
            video.currentTime = duration.value;
            durationStep = setInterval(durationMovement, 1000/66);
    
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    
        function setNewSoundLevel() {
            video.volume = sound.value/10;
        }
    
        function muteUnmute() {
            
    
            if (video.volume === 0) { 
                video.volume = currentSound;
                sound.value = currentSound*10;
    
            } else {
                currentSound = video.volume;
                video.volume = 0;
                sound.value = 0;
            }
        }
    
    });
    
})();