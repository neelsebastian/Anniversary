$(document).ready(function(){
    $(".container").mouseenter(function(){
        $(".card").stop(true, true).animate({
            top: "-90px"
        }, "slow");
    }).mouseleave(function(){
        $(".card").stop(true, true).animate({
            top: "0"
        }, "slow");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let playButton = document.getElementById("play-button");
    let audio = document.getElementById("bg-music");

    playButton.addEventListener("click", function () {
        audio.play();
        playButton.textContent = "🎶 Playing..."; 
        playButton.disabled = true; // 
        playButton.style.opacity = "0.9"; 
        playButton.style.cursor = "default"; 
    });
});


