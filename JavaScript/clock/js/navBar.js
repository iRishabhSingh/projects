// Navigation Bar JS is here...
function activeNav(isActive) {
    let allNavLinks = document.getElementsByClassName('nav-link');
    
    for (let i = 0; i < allNavLinks.length; i++) {
        allNavLinks[i].classList.remove('selected-nav-option');

        let displayClass = allNavLinks[i].innerHTML.toLowerCase();
        document.getElementById(displayClass).style.display = 'none';
    }

    document.getElementById(isActive).classList.add('selected-nav-option');

    let displayThisClass = document.getElementById(isActive).innerHTML.toLowerCase();
    document.getElementById(displayThisClass).style.display = 'flex';
}