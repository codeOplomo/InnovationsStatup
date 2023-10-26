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
    isNavBarVisible = true;
});

closeMenu.addEventListener('click', () => {

    closeMenu.classList.remove('show');
    closeMenu.classList.add('hide');

    navbar.classList.remove('show');
    navbar.classList.add('hide');
    login.classList.remove('show');
    login.classList.add('hide');

    navBurger.classList.remove('hide');
    navBurger.classList.add('show');
    isNavBarVisible = false;
});

document.addEventListener('click', (event) => {
    if (isNavBarVisible && !navbar.contains(event.target) && !closeMenu.contains(event.target) && !navBurger.contains(event.target)) {
        // Click occurred outside the menu, hide the nav links
        navbar.classList.remove('show');
        navbar.classList.add('hide');
        login.classList.remove('show');
        login.classList.add('hide');
        navBurger.classList.remove('hide');
        navBurger.classList.add('show');
        closeMenu.classList.remove('show');
        closeMenu.classList.add('hide');
        isNavBarVisible = false;
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     const informationItems = document.querySelectorAll(".information");
//     let currentIndex = 0;
// console.log('hello');
//     function showItem(index) {
//         informationItems.forEach((item, i) => {
//             item.classList.remove("active");
//             if (i === index) {
//                 item.classList.add("active");
//             }
//         });
//     }

//     function nextItem() {
//         currentIndex = (currentIndex + 1) % informationItems.length;
//         showItem(currentIndex);
//     }

//     function prevItem() {
//         currentIndex = (currentIndex - 1 + informationItems.length) % informationItems.length;
//         showItem(currentIndex);
//     }

//     // Initial display
//     showItem(currentIndex);

//     // Event listeners for next and previous buttons
//     const nextButton = document.querySelector(".nxtbtn");
//     const prevButton = document.querySelector(".prebtn");

//     nextButton.addEventListener("click", nextItem);
//     prevButton.addEventListener("click", prevItem);
// });

document.addEventListener('DOMContentLoaded', function () {
    const herosProfile = document.querySelector('.herosprofile');
    const prevBtn = document.querySelector('.prebtn');
    const nextBtn = document.querySelector('.nxtbtn');
    let currentIndex = 0;
    
    function slide() {
        const itemWidth = herosProfile.children[0].offsetWidth;
        herosProfile.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < herosProfile.children.length - 1) {
            currentIndex++;
            slide();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            slide();
        }
    });

})
