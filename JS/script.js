const elemTimer = document.querySelector('#timer');
let masqueJeter = 0;

function comptMask() {
    masqueJeter += 39351;
    elemTimer.textContent = Math.floor(masqueJeter);
}

setInterval(comptMask, 1000 );

