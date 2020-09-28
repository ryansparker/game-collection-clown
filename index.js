const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const clowns = document.querySelectorAll('.clown');
let mouseCursor = document.querySelector('.cursor')
let lastHole;
let timeUp = false;
let score = 0;

window.addEventListener('mousemove', cursor) 

const clickems = document.addEventListener("click", function(){
    mouseCursor.classList.add('link-grow');

    setTimeout(function(){ mouseCursor.classList.remove('link-grow'); }, 100);
})




function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        console.log('Ah nah thats the same one bud');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(500, 2000);
    const hole = randomHole(holes);
    var roll = new Audio("pop.wav");
    roll.play();
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up')
        if (!timeUp) peep()

    }, time)
}
const timer = 15000

function startGame() {
    score.textContent = 0
    timeUp = false;
    score = 0
    peep();
    setTimeout(() => timeUp = true, timer)
}


function bonk(e) {
    console.log(e)
    var roll = new Audio("bonk1.wav"); // buffers automatically when created
    roll.play();
    if (!e.isTrusted) return; // cheater!
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;

    if (e.target === clowns[0]) {
        clowns[0].classList.add("bonked")
        clowns[1].classList.remove("bonked")
        clowns[2].classList.remove("bonked")
        clowns[3].classList.remove("bonked")
        clowns[4].classList.remove("bonked")
        clowns[5].classList.remove("bonked")
        console.log("you got #1")
    } else if (e.target === clowns[1]) {
        clowns[1].classList.add("bonked")
        clowns[0].classList.remove("bonked")
        clowns[2].classList.remove("bonked")
        clowns[3].classList.remove("bonked")
        clowns[4].classList.remove("bonked")
        clowns[5].classList.remove("bonked")
        console.log("you got #2")
    } else if (e.target === clowns[2]) {
        clowns[2].classList.add("bonked")
        clowns[1].classList.remove("bonked")
        clowns[0].classList.remove("bonked")
        clowns[3].classList.remove("bonked")
        clowns[4].classList.remove("bonked")
        clowns[5].classList.remove("bonked")
        console.log("you got #3")
    } else if (e.target === clowns[3]) {
        clowns[3].classList.add("bonked")
        clowns[1].classList.remove("bonked")
        clowns[2].classList.remove("bonked")
        clowns[0].classList.remove("bonked")
        clowns[4].classList.remove("bonked")
        clowns[5].classList.remove("bonked")
        console.log("you got #4")
    } else if (e.target === clowns[4]) {
        clowns[4].classList.add("bonked")
        clowns[1].classList.remove("bonked")
        clowns[2].classList.remove("bonked")
        clowns[3].classList.remove("bonked")
        clowns[0].classList.remove("bonked")
        clowns[5].classList.remove("bonked")
        console.log("you got #5")
    } else if (e.target === clowns[5]) {
        clowns[5].classList.add("bonked")
        clowns[1].classList.remove("bonked")
        clowns[2].classList.remove("bonked")
        clowns[3].classList.remove("bonked")
        clowns[4].classList.remove("bonked")
        clowns[0].classList.remove("bonked")
        console.log("you got #6")
    }

}

clowns.forEach(clown => clown.addEventListener('click', bonk))




//save high scores in local storage
//expert level
//countdown clock

var timeClock = document.getElementById('timer');
var timesup = new Audio("timesup1.wav"); // buffers automatically when created
timesup.play();

function timing() {
    var timer = 15;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeClock.innerHTML = ":" + seconds;

        if (--timer <= 0) {
            timer = 0;
        }
    }, 1000);
}



// cursor into image https://medium.com/@amieeverett/how-to-make-your-cursor-into-an-image-using-javascript-83e2efeca0ef
