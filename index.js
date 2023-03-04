let score = Number(getCookie('cookie_score') || sessionStorage.getItem('score')) || 0,
    scoreUp = document.getElementById('score'),
    holes = Array.from(document.getElementsByClassName('hole')),
    cookieConsent = !!getCookie('cookie_consent') || false;

/* Aligning visible and sessionStorage scores. */
scoreUp.innerText = score;
sessionStorage.setItem('score', score);

function newHole() {
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

        /* Track the score within the same visit. */
        sessionStorage.setItem('score', score);

        /* If we have received consent within the past day, save the score on the cookie. */
        if (cookieConsent) {
            setCookie('cookie_score', score, 1);
        }
    }
});

/* Cookie logic - pulled from https://www.tabnine.com/academy/javascript/how-to-set-cookies-javascript/ */
let cookie_score = score;

/* Set a Cookie */
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    console.log('setCookie expires variable', expires);
    console.log('setCookie document.cookie', document.cookie);
    /* resolve cookie expiration bug so it only updates with "cookie_consent" */
    /* only set expiration on cookie consent button */
}

/* Get a Cookie */
function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

/* Apply setCookie */
const cookieConsentButton = document.getElementById('cookie-consent-button');
cookieConsentButton.addEventListener('click', function(clickEvent) {
    alert('Tracking your score on the cookie!');
    setCookie('cookie_consent', true, 1);
    setCookie('cookie_score', cookie_score, 1);
    cookieConsent = true;
});
