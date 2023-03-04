const redirectButton = document.getElementById('redirect-button');

/* Show redirect button after a few seconds */
setTimeout(function() {
	redirectButton.style.display = 'block';
}, 3000);

/* Troll button switch to index.html pathname */
redirectButton.addEventListener('click', function(clickEvent) {
    location.pathname = '/index.html';
});