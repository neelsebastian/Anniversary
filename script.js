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



