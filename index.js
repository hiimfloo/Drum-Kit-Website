document.querySelectorAll("button").forEach( button=>{
    button.addEventListener("click",handleClickforButtons);
});



function handleClickforButtons(){
   var audio =new Audio("sounds/tom-1.mp3");
   audio.play();
}