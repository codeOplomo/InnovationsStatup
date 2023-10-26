const navBurger = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const login = document.querySelector('#login');
const closeMenu = document.querySelector('.closeMenu');
let isNavBarVisible = false;

navBurger.addEventListener('click', () => {

    navbar.classList.remove('hide');
    navbar.classList.add('show');

    login.classList.remove('hide');
    login.classList.add('show');

    navBurger.classList.remove('show'); // Hide menu icon
    navBurger.classList.add('hide'); // Hide menu icon

    closeMenu.classList.remove('hide'); // Show close menu icon
    closeMenu.classList.add('show'); // Show close menu icon
    isNavBarVisible=true;
})

closeMenu.addEventListener('click', () => {

    closeMenu.classList.remove('show');
    closeMenu.classList.add('hide');

    navbar.classList.remove('show');
    navbar.classList.add('hide');
    login.classList.remove('show');
    login.classList.add('hide');

    navBurger.classList.remove('hide');
    navBurger.classList.add('show');
    isNavBarVisible=false;
})

document.addEventListener('click', (event)=>{
    if(isNavBarVisible && !navbar.contains(event.target) && !closeMenu.contains(event.target) && !navBurger.contains(event.target)){
        // Click occurred outside the menu, hide the nav links
        navbar.classList.remove('show');
        navbar.classList.add('hide');
        login.classList.remove('show');
        login.classList.add('hide');
        navBurger.classList.remove('hide');
        navBurger.classList.add('show');
        closeMenu.classList.remove('show');
        closeMenu.classList.add('hide');
        isNavBarVisible=false;
    }
})
///////////////
const titleItems = document.querySelectorAll('.columnsection h5');

// Add click event listeners to each h5 element
titleItems.forEach(titleItem => {
    titleItem.addEventListener('click', function () {
        
        // Toggle the visibility of the adjacent ul element
        const droplist = this.nextElementSibling; 
        
        // droplist.classList.toggle('show'); 
        if(droplist.style.display === 'block'){
            droplist.style.display='none';
            droplist.
        }else{
            droplist.style.display='block';
        }
        
    });
});
