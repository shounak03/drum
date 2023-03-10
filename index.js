var n = document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
   
    var b = this.innerHTML;

    makeSound(b);

    buttonAnimation(b);
});
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);

    buttonAnimation(event.key)
});

function makeSound(key){

    switch(key){
        case "w":
        var a = new Audio('crash.mp3');
        a.play(); break;

        case "a":
        var a = new Audio('kick-bass.mp3');
        a.play(); break;

        case "s":
        var a = new Audio('snare.mp3');
        a.play(); break;

        case "d":
        var a = new Audio('tom-1.mp3');
        a.play(); break;

        case "j":
        var a = new Audio('tom-2.mp3');
        a.play(); break;

        case "k":
        var a = new Audio('tom-3.mp3');
        a.play(); break;

        case "l":
        var a = new Audio('tom-4.mp3');
        a.play(); break;

    }

}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
