document.querySelectorAll("button").forEach( button=>{
    button.addEventListener("click",handleClickforButtons);
});



function handleClickforButtons(){
    alert("I got clicked!");
}