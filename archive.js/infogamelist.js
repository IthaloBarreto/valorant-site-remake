const listInfoGame = document.getElementById('list__info-game');
const labelGameInfo = document.getElementById('game__info-menu');

function addListGameInfo() {
    if (!listInfoGame.classList.contains('active__game-list-info')) {
        listInfoGame.classList.add('active__game-list-info');
    }
}

function removeListGameInfo(event) {
    if (!listInfoGame.contains(event.relatedTarget) && event.relatedTarget !== labelGameInfo) {
        listInfoGame.classList.remove('active__game-list-info');
    }
}

labelGameInfo.addEventListener('mouseover', addListGameInfo);
labelGameInfo.addEventListener('mouseout', removeListGameInfo);

listInfoGame.addEventListener('mouseover', addListGameInfo);
listInfoGame.addEventListener('mouseout', removeListGameInfo);





const listSuport = document.getElementById('list__suport');
const labelSuport = document.getElementById('suport-menu');
const selectSuport = document.getElementById('suport');

function addListSuport() {
    if (!listSuport.classList.contains('active__list-suport')) {
        listSuport.classList.add('active__list-suport');
    }
}

function removeListSuport(event) {
    if (!listSuport.contains(event.relatedTarget) && event.relatedTarget !== labelSuport && event.relatedTarget !== selectSuport) {
        listSuport.classList.remove('active__list-suport');
    }
}

labelSuport.addEventListener('mouseover', addListSuport);
labelSuport.addEventListener('mouseout', removeListSuport);

listSuport.addEventListener('mouseover', addListSuport);
listSuport.addEventListener('mouseout', removeListSuport);

selectSuport.addEventListener('mouseover', addListSuport);
selectSuport.addEventListener('mouseout', removeListSuport);






const listSocial = document.getElementById('list__social');
const labelSocial = document.getElementById('social-menu');
const selectSocial = document.getElementById('social');

function addListSocial() {
    if (!listSocial.classList.contains('active__list-social')) {
        listSocial.classList.add('active__list-social');
    }
}

function removeListSocial(event) {
    if (!listSocial.contains(event.relatedTarget) && event.relatedTarget !== labelSocial && event.relatedTarget !== selectSocial) {
        listSocial.classList.remove('active__list-social');
    }
}

labelSocial.addEventListener('mouseover', addListSocial);
labelSocial.addEventListener('mouseout', removeListSocial);

listSocial.addEventListener('mouseover', addListSocial);
listSocial.addEventListener('mouseout', removeListSocial);

selectSocial.addEventListener('mouseover', addListSocial);
selectSocial.addEventListener('mouseout', removeListSocial);





const listComunit = document.getElementById('list__comunit');
const labelComunit = document.getElementById('comunit-menu');
const selectComunit = document.getElementById('comunit');

function addListComunit() {
    if (!listComunit.classList.contains('active__list-comunit')) {
        listComunit.classList.add('active__list-comunit');
    }
}

function removeListComunit(event) {
    if (!listComunit.contains(event.relatedTarget) && event.relatedTarget !== listComunit && event.relatedTarget !== selectComunit) {
        listComunit.classList.remove('active__list-comunit')
    }
}

labelComunit.addEventListener('mouseover', addListComunit);
labelComunit.addEventListener('mouseout', removeListComunit);

listComunit.addEventListener('mouseover', addListComunit);
listComunit.addEventListener('mouseout', removeListComunit);

selectComunit.addEventListener('mouseover', addListComunit);
selectComunit.addEventListener('mouseout', removeListComunit);