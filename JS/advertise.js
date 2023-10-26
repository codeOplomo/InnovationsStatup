const navBurger = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const login = document.querySelector('#login');
const closeMenu = document.querySelector('.closeMenu');
let isNavBarVisible = false;


const firstModal = document.querySelector('.firstmodal');
const secondtModal = document.querySelector('.secondmodal');
const thirdModal = document.querySelector('.thirdmodal');
const modal = document.querySelector('.modals');
const modal1 = document.querySelector('.modals1');
const modal3 = document.querySelector('.modals3');
const closeModal = document.querySelector('.closeModal');

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
    isNavBarVisible = false;
})

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
})
// firstModal.addEventListener('click', ()=> {
//     modal.classList.remove('hide');
//     modal.classList.add('show');
// }) 
// closeModal.addEventListener('click', ()=>{
//     modal.classList.remove('show');
//     modal.classList.add('hide');
// })


// secondtModal.addEventListener('click', ()=> {
//     modal2.classList.remove('hide');
//     modal2.classList.add('show');
// }) 
// closeModal.addEventListener('click', ()=>{
//     modal2.classList.remove('show');
//     modal2.classList.add('hide');
// })

// Sélectionnez tous les boutons d'ouverture
const openModal = document.querySelectorAll('.openModal');

// Ajoutez un gestionnaire d'événement à chaque bouton
openModal.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const modalId = this.getAttribute('data-modal'); // Obtenez l'ID de la fenêtre modale associée au bouton
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.style.display = 'flex';
            // document.body.classList.add('modal-open');
        }

        modal.querySelector(".closeModal").addEventListener('click', () => {
            modal.style.display = "none";
        })

    });
});

// Gestionnaire d'événement pour fermer toutes les modales
// const closemodal = document.querySelectorAll('.closeModal');
// closemodal.forEach(closeM =>{
//      closeM.addEventListener('click', function(event){
//         event.preventDefault();
//         const closeMod = this.getAttribute('data-modal');
//         const modal = document.getElementById(closeMod);

//         if(modal){
//             modal.style.display='none';
//         }
//      })
// })

document.addEventListener('click', function (event) {
    let openedModal;
    let modals = document.querySelectorAll('.modales');
    let learnMoreBtns = document.querySelectorAll('.openModal');
    let hada_bach_tkhdem_openModal = true;

    learnMoreBtns.forEach(btn => {
        btn.contains(event.target) ? hada_bach_tkhdem_openModal = false : null
    })

    modals.forEach( modal => {
        if (modal.style.display == "flex"){
            openedModal = modal;
            return true;
        }
    })

    openedModal.firstChild.contains(event.target) ? console.log("ziefjk") : console.log('doesnt contains');;
    if ( openedModal && !openedModal.firstChild.contains(event.target) && hada_bach_tkhdem_openModal ) {
        openedModal.style.display = 'none';
        // modal.style.display = 'none';
        // document.body.classList.remove('modal-open');
    }
});

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
