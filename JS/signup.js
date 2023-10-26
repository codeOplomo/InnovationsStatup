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


const linksign = document.getElementById('signuplink');
const loginsign = document.getElementById('loginlink');
const loginForm = document.querySelector('.log');
const signForm = document.querySelector('.signup');

let isForm1Visible = false;
let isForm2Visible = false;

linksign.addEventListener('click', function(event){
    event.preventDefault();
      loginsign.classList.remove('activelink');
      linksign.classList.add('activelink');
      
      loginForm.classList.remove('activeForm');
      loginForm.classList.add('desactiveForm');
      signForm.classList.remove('desactiveForm');
      signForm.classList.add('activeForm');

      
    // signForm.classList.remove('activeForm');
    // signForm.classList.add('desactiveForm');

    // loginForm.classList.remove('desactiveForm');
    // loginForm.classList.add('activeForm');

    //   signForm.style.display = "none";
    //   loginForm.style.display = "block";
    })

loginsign.addEventListener('click', function(event){
    event.preventDefault();
    linksign.classList.remove('activelink');
    loginsign.classList.add('activelink');

    signForm.classList.remove('activeForm');
    signForm.classList.add('desactiveForm');

    loginForm.classList.remove('desactiveForm');
    loginForm.classList.add('activeForm');
    // loginForm.style.display = "none";
    // signForm.style.display = "flex";
    

})


//login validation
const logForm = document.querySelector('.form1');
const emailInput = document.getElementById('email1');
const passwordInput = document.getElementById('password1');
 
const namesRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/; 

logForm.addEventListener('submit', function(event){
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (emailRegex.test(email)) {
        emailInput.nextElementSibling.style.display='none';
        
        // You can redirect to another page or perform further actions here.
      } else {
        emailInput.nextElementSibling.style.display='block';
      }

      if (passwordRegex.test(password)) {
        passwordInput.nextElementSibling.style.display='none';
        
        // You can redirect to another page or perform further actions here.
      } else {
        passwordInput.nextElementSibling.style.display='block';
      }
      
})

//sign up validation
const signupForm = document.querySelector('.form2');
const nameInput = document.getElementById('name');
const lastname = document.getElementById('lastname');
const emailInput2 = document.getElementById('email2');
const passwordInput2 = document.getElementById('password2');

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
// const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/; 

signupForm.addEventListener('submit', function(event){
    event.preventDefault();
    //alert('hello');
    
    const name = nameInput.value;
    const lastName = lastname.value;
    const email2 = emailInput2.value;
    const password2 = passwordInput2.value;

    if (namesRegex.test(name)) {
        nameInput.nextElementSibling.style.display='none';
        
        // You can redirect to another page or perform further actions here.
      } else {
        nameInput.nextElementSibling.style.display='block';
        
      }

      if (namesRegex.test(lastName)) {
        lastname.nextElementSibling.style.display='none';
        
        // You can redirect to another page or perform further actions here.
      } else {
        lastname.nextElementSibling.style.display='block';
      }

    if (emailRegex.test(email2)) {
        emailInput2.nextElementSibling.style.display='none';
        
        // You can redirect to another page or perform further actions here.
      } else {
        emailInput2.nextElementSibling.style.display='block';
      }

      if (passwordRegex.test(password2)) {
        passwordInput2.nextElementSibling.style.display='none';
        
        // You can redirect to another page or perform further actions here.
      } else {
        passwordInput2.nextElementSibling.style.display='block';
      }
      
})