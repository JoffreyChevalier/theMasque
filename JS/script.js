const elemTimer = document.querySelector('#timer');

let masqueJeter = 0;
let masqueJeterPerSec = 39351;
let masqueJeterFormated = new Intl.NumberFormat(undefined).format(masqueJeter)
let masqueJeterPerSecFormated = new Intl.NumberFormat(undefined).format(masqueJeterPerSec)

function comptMask() {
    masqueJeterFormated += masqueJeterPerSecFormated;
    elemTimer.textContent = Math.floor(masqueJeterFormated);
}

setInterval(comptMask, 1000 );

