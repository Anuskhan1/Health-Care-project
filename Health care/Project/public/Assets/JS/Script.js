

// Code For Top Button

topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

// Code for loader Starts

function loader(){
    document.querySelector(".loader-container").classList.add("fade-out")
}

function fadeOut(){
    setInterval(loader, 2000)
}

window.onload = fadeOut;

// Code for loader Ends

// Code For Responsive Navbar Starts
const menuToggle = document.querySelector(".toggle-menu");
const nav = document.getElementById("myNav")

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        menuToggle.classList.toggle("menu-active");
        nav.classList.toggle("active");
    });

const feedback = document.getElementById("feedback"); 
    feedback.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        menuToggle.classList.remove("menu-active");
        nav.classList.remove("active");
    })

// Code For Responsive Navbar Ends

// Code For Form Validation Starts

// First we will get the span location in which error will be displayed 
let fnameErr = document.getElementById("fnameError");
let lnameErr = document.getElementById("lnameError");
let emailErr = document.getElementById("emailError");
let msgErr = document.getElementById("msgError");
let submitErr = document.getElementById("submitError");

function validateFname(){
    var fname = document.getElementById("fname").value;

    if(fname.length == 0){
        fnameErr.innerHTML = "First Name Is Required*";
        return false;
    }
    else{
        fnameErr.innerHTML = ""
        return true;
    }
}

function validateLname(){
    var lname = document.getElementById("lname").value;

    if(lname.length == 0){
        lnameErr.innerHTML = "Last Name Is Required*";
        return false;
    }
    else{
        lnameErr.innerHTML = ""
        return true;
    }
}

function validateEmail(){
    var email = document.getElementById("email").value;

    if(email.length == 0){
        emailErr.innerHTML = "Email Is Required*"
        return false;
    }
    if(!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)){
        emailErr.innerHTML = "Enter Valid Email"
        return false;
    }
    else{
        emailErr.innerHTML = ""
        return true;
    }
}

function validateMsg(){
    var msg = document.getElementById("msg").value; 
    var required = 25;
    var left = required - msg.length;

    if(msg.length == 0){
        msgErr.innerHTML = "Message Is Required*";
        return false;
    }
    if(left > 0){
        msgErr.innerHTML = left + " More Characters Required*"
        return false;
    }
    else{
        msgErr.innerHTML = ""
        return true;
    }
}

function validateForm(){
    if(!validateFname() || !validateLname() || !validateEmail() || !validateMsg() ){
        submitErr.style.display = "block"
        submitErr.innerHTML = "Please Fill All Required Fields*";
        setTimeout(() => {
            submitErr.style.display = "none"
        }, 3500);
        return false;
    }
}

// Code For Form Validation Ends


// Code For Feedback Stars Starts

var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var star4 = document.getElementById("star4");
var star5 = document.getElementById("star5");

function oneStar(){
    star1.addEventListener("click", () =>{
        star1.classList.remove("fa-regular");
        star1.classList.add("fa-solid");
        star1.classList.add("rated")
        star2.classList.add("fa-regular");
        star2.classList.remove("fa-solid");
        star2.classList.remove("rated");
        star3.classList.add("fa-regular");
        star3.classList.remove("fa-solid");
        star3.classList.remove("rated");
        star4.classList.add("fa-regular");
        star4.classList.remove("fa-solid");
        star4.classList.remove("rated");
        star5.classList.remove("fa-solid");
        star5.classList.remove("rated");
        star5.classList.add("fa-regular");
    })
}
function twoStar(){
    star2.addEventListener("click", () =>{
        star1.classList.remove("fa-regular");
        star1.classList.add("fa-solid");
        star1.classList.add("rated")
        star2.classList.remove("fa-regular");
        star2.classList.add("fa-solid");
        star2.classList.add("rated");
        star3.classList.add("fa-regular");
        star3.classList.remove("fa-solid");
        star3.classList.remove("rated");
        star4.classList.add("fa-regular");
        star4.classList.remove("fa-solid");
        star4.classList.remove("rated");
        star5.classList.remove("fa-solid");
        star5.classList.remove("rated");
        star5.classList.add("fa-regular");
    })
}
function threeStar(){
    star3.addEventListener("click", () =>{
        star1.classList.remove("fa-regular");
        star1.classList.add("fa-solid");
        star1.classList.add("rated")
        star2.classList.remove("fa-regular");
        star2.classList.add("fa-solid");
        star2.classList.add("rated");
        star3.classList.remove("fa-regular");
        star3.classList.add("fa-solid");
        star3.classList.add("rated");
        star4.classList.add("fa-regular");
        star4.classList.remove("fa-solid");
        star4.classList.remove("rated");
        star5.classList.remove("fa-solid");
        star5.classList.remove("rated");
        star5.classList.add("fa-regular");
    })
}
function fourStar(){
    star4.addEventListener("click", () =>{
        star1.classList.remove("fa-regular");
        star1.classList.add("fa-solid");
        star1.classList.add("rated")
        star2.classList.remove("fa-regular");
        star2.classList.add("fa-solid");
        star2.classList.add("rated");
        star3.classList.remove("fa-regular");
        star3.classList.add("fa-solid");
        star3.classList.add("rated");
        star4.classList.remove("fa-regular");
        star4.classList.add("fa-solid");
        star4.classList.add("rated");
        star5.classList.remove("fa-solid");
        star5.classList.remove("rated");
        star5.classList.add("fa-regular");
    })
}
function fiveStar(){
    star5.addEventListener("click", () =>{
        star1.classList.remove("fa-regular");
        star1.classList.add("fa-solid");
        star1.classList.add("rated")
        star2.classList.remove("fa-regular");
        star2.classList.add("fa-solid");
        star2.classList.add("rated");
        star3.classList.remove("fa-regular");
        star3.classList.add("fa-solid");
        star3.classList.add("rated");
        star4.classList.remove("fa-regular");
        star4.classList.add("fa-solid");
        star4.classList.add("rated");
        star5.classList.remove("fa-regular");
        star5.classList.add("fa-solid");
        star5.classList.add("rated")
    })
}

// Code For Feedback Stars Ends