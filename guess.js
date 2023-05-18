// selecting DoM Elements
const display = document.querySelector('#display');
const check = document.querySelector('.check');
const reset = document.querySelector('.again');
let guess = document.querySelector('.guess');
let number = document.querySelector('.number');
let trials = document.querySelector('.trials');
const warning = document.querySelector('.warning');
const msg = document.querySelector('.message');
const body = document.querySelector('body');




// creating audio for different mode
const correctSound = new Audio('../sounds/mixkit-win-bonus-extra-in-a-video-game-2064.wav');
const clickSound = new Audio('../sounds/mixkit-play-small-hit-in-a-game-2072.wav');
const wrongSound = new Audio('../sounds/mixkit-long-game-over-notification-276.wav');
const gameOverSound = new Audio('../sounds/mixkit-fairytale-game-over-1945.wav');


// Function to play the correctsound
const playCorrectSound = function() {
    correctSound.play();
};

// Function to play the clicksound
const playClickSound = function() {
    clickSound.play();
};

// Function to play wrongsound
const playWrongSound = function() {
    wrongSound.play();
};

// Function to play gameoversound
const playGameOverSound = function() {
    gameOverSound.play();
};


const playGames = function(){
    let randomNum = Math.ceil(Math.random() * 5);
// console.log(randomNum);    


// For trials
trials.innerHTML--;
(trials.innerHTML < 0) ? trials.innerHTML = 0 : trials.innerHTML



if (guess.value == null || guess.value < 1 || guess.value > 5 || guess.value == "")
{
    playClickSound()
    warning.style.display = "block";
    warning.innerHTML = "please enter a number between 1-5";
    setTimeout(()=> warning.style.display = "none", 3000);
    guess.value = "";
}else if(guess.value == randomNum){
    // console.log("You're Correct");
    playCorrectSound()
    display.innerHTML = "Correct!!!";
    number.innerHTML = randomNum;
    body.classList.remove("fail")
    body.classList.remove("body")
    body.classList.add("correct")
    // document.body.style.backgroundColor = "green";

}else if(trials.innerHTML ==0){
    playGameOverSound()
    display.innerHTML = "Game Over!!!"
    body.classList.remove("fail")
    body.classList.remove("correct")
    body.classList.add("body")
    guess.value = ""
    number.innerHTML = "?"
    check.setAttribute("disabled", "true")
    msg.innerHTML = "Play again"

}else{
    playWrongSound()
    body.classList.remove("body")
    body.classList.remove("correct")
    body.classList.add("fail")
     // document.body.style.backgroundColor = "red";
    display.innerHTML = "Opps you're wrong!"
    msg.innerHTML = "Continue playing" 

}


}





// playGames()
check.addEventListener('click', playGames);
reset.addEventListener('click', handleReset);
console.log(window);


// reset function
function handleReset(){
    window.location.reload()
}