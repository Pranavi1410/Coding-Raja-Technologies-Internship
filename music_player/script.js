const audio= document.getElementById('audio');
const playButton= document.getElementById('audio');
const prevButton= document.getElementById('audio');
const nextButton= document.getElementById('audio');

let isPlaying = false;

function togglePlay(){
    if(isPlayong){
        audio.onpause();
        playButton.innerText='Play';

    }else{
        audio.play();
        playButton.innerText='pause';

    }
    isPlaying=!isPlaying;
}
playButton.addEventListener('click',togglePlay);