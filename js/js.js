const box=document.querySelector('.box');
const setBtn=document.getElementById('set');

function changeColor(){
    if(setBtn.id=="set")set();
    else   reset();
}
function set(){
    box.setAttribute('class','pinkBox');
    setBtn.innerText="cyan";
    setBtn.setAttribute('id','reset');
}
function reset(){
    box.setAttribute('class','box');
    setBtn.innerText='pink';
    setBtn.setAttribute('id','set');
}
setBtn.addEventListener('click',changeColor); 
