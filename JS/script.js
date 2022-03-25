const maskTimer = document.querySelector('#timer-jeter');
const natureTimer = document.querySelector('#timer-nature');
const mPlasqtiqueTimer = document.querySelector('#timer-mplastique');

let masqueJeter = 0;
let masqueNature = 0;
let masqueMplastique = 0;

function format(number, options = {}) {
    return new Intl.NumberFormat("fr-FR", options).format(number);
}

function comptMask() {
    masqueJeter += 0.039351;
    maskTimer.textContent = format(masqueJeter, { minimumFractionDigits: 2,  maximumFractionDigits: 2});
};

function comptNature() {
    masqueNature += 197;
    natureTimer.textContent = format(Math.floor(masqueNature));
};

function comptMplastique() {
    masqueMplastique += 0.2955;
    mPlasqtiqueTimer.textContent = format(masqueMplastique, { minimumFractionDigits: 2,  maximumFractionDigits: 2});
};

setInterval(comptMask, 1000 );
setInterval(comptNature, 1000 );
setInterval(comptMplastique, 1000 );

/*let compteur = (type, timer, number) => {
    type += number;
    timer.textContent = Math.floor(type);

    return setInterval(compteur, 1000)
};*/
