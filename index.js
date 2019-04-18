let score = 0;
let scoreUp = document.getElementById('score');

let holes = Array.from(document.getElementsByClassName('hole'));


function newHole () {
    let randomHole = Math.floor(Math.random() * 9);
    holes[randomHole].classList.toggle('mole');
}

setInterval(newHole,500);

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
    if (clickEvent.target.matches('.mole')) {
        let target = clickEvent.target;
        target.classList.toggle('mole');
        score++;
        scoreUp.innerText = score;
    }
});