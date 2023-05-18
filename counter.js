// selecting DOM elements
const result = document.querySelector('.result');
const decrease = document.querySelector('.dec');
const increase = document.querySelector('.inc');
const reset = document.querySelector('.res');
const display = document.querySelector('.display');
// console.log(result);
// console.log(decrease, increase);
// console.log(reset);


//For Decrease
decrease.addEventListener('click', ()=>{
    result.innerHTML --
    handleColorChange()
})

//For Increase
increase.addEventListener('click', ()=>{
    result.innerHTML ++
    handleColorChange()
})

//For Reset
reset.addEventListener('click', ()=>{
    result.innerHTML =0
    handleColorChange()
})

function handleColorChange() {
    if(result.innerHTML < 0){
        display.style.color = 'red';
    }else if(result.innerHTML > 0){
        display.style.color = 'green';
    }else{
        display.style.color = 'black';
    }
    
}