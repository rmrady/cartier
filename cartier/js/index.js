$(function(){
    $("body").show(function(){
        $(".img-h img").fadeIn(4000)
    })
})

/*~~~~~~~~~~~~~~~~~~~~~slider~~~~~~~~~~~~~~~~~~~~~~~~~~ */
let slides = document.getElementsByClassName("slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let n = 0;

function displaynone(){
    for(var i = 0 ; i < slides.length; i++){
        slides[i].style.display = "none"
    }
}

function noactive(){
    for(var i = 0 ; i < slides.length; i++){
        slides[i].classList.remove ("active");
    }
}
document.querySelector(".next").addEventListener("click", function(){
    n++;
    if(n > slides.length-1){
        n = 0
    }
    displaynone();
    noactive();
    slides[n].style.display="block";
    slides[n].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", function(){
    n--;
    if(n < 0){
        n = slides.length-1
    }
    displaynone();
    noactive();
    slides[n].style.display="block";
    slides[n].classList.add("active");
});
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */