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
const between = document.querySelector('.between');
const muteButton = document.querySelector('#mute-button');
const img1 = document.querySelector('.mute img:nth-child(1)');
const img2 = document.querySelector('.mute img:nth-child(2)');




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



// Reset function
const handleReset = () => {
    // reset game specific variables
    guess.value = '';
    trials.innerHTML = '5'

    // reset DOM
    display.style.color = "#eee";
    number.style.color = "#222";
    display.innerHTML = 'Guess My Number'
    number.innerHTML = '?';
    check.removeAttribute("disabled");
    check.style.opacity = '1'
    msg.innerHTML = "Start guessing..."
    body.classList.add('body');
    body.classList.remove('fail', 'correct');
};


let isMuted = false;

// function to toggle mute/unmute
const toggleMute = () => {
    isMuted = !isMuted;
    if (isMuted) {
        // mute all audio elements
        correctSound.muted = true;
        wrongSound.muted = true;
        gameOverSound.muted = true;
        img1.style.display = 'block';
        img2.style.display = 'none';
    } else {
        // unmute all audio elements
        correctSound.muted = false;
        wrongSound.muted = false;
        gameOverSound.muted = false;
        img1.style.display = 'none';
        img2.style.display = 'block';
    }
};



// Game function
const playGames = function(){
    let randomNum = Math.ceil(Math.random() * 5);
// console.log(randomNum);    


// For trials
trials.innerHTML--;
(trials.innerHTML < 0) ? trials.innerHTML = 0 : trials.innerHTML



// Conditonals
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
    display.style.color = "green";
    number.innerHTML = randomNum;
    number.style.color = "green";
    body.classList.remove("fail")
    body.classList.remove("body")
    body.classList.add("correct")
    check.style.opacity = '0.6'
    msg.innerHTML = "Play again!!"
    between.innerHTML = "Play again"

}else if(trials.innerHTML ==0){
    playGameOverSound()
    display.innerHTML = "Game Over!!!"
    body.classList.remove("fail")
    body.classList.remove("correct")
    body.classList.add("body")
    guess.value = ""
    number.innerHTML = "?"
    check.setAttribute("disabled", "true")
    check.style.opacity = '0.6'
    msg.innerHTML = "Play again"
    between.innerHTML = "Play again"

}else{
    playClickSound()
    body.classList.remove("body")
    body.classList.remove("correct")
    body.classList.add("fail")
     // document.body.style.backgroundColor = "red";
    display.innerHTML = "Opps you're wrong!"
    msg.innerHTML = "Continue playing" 

}


}





// Event Listeners playGames()
check.addEventListener('click', (event) => {
    event.preventDefault();
    playGames();
} );

reset.addEventListener('click', (event) => {
    event.preventDefault();
    handleReset();
} );

muteButton.addEventListener('click', toggleMute);