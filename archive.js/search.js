const btnSearch = document.getElementById('search-btn')
const inputSearch = document.getElementById('search-bar')
const closeBtn = document.getElementById('close-btn')

function openSearchBar() {
    if (inputSearch.classList.contains('visible')) {
        inputSearch.classList.remove('visible')
    } else {
        inputSearch.classList.add('visible')
    }

    if (closeBtn.classList.contains('active-close')) {
        closeBtn.classList.remove('active-close')
    } else {
        closeBtn.classList.add('active-close')
    }
}

function removeClass() {
    if (inputSearch.classList.contains('visible')) {
        inputSearch.classList.remove('visible')
    }

    if (closeBtn.classList.contains('active-close')) {
        closeBtn.classList.remove('active-close')
    }
}

btnSearch.addEventListener('click', openSearchBar)
closeBtn.addEventListener('click', removeClass)