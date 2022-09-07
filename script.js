const formTag = document.getElementById("form");
const fnameTag = document.getElementById("firstname");
const lnameTag = document.getElementById("lastname");
const emailTag = document.getElementById("email");
const passwordTag = document.getElementById("password");
const emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordpattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;


formTag.addEventListener("submit", (e) => {
    console.log(fnameTag)
    e.preventDefault();
    
    
    const firstName = fnameTag.value.trim();
    const lastName = lnameTag.value.trim();
    const email = emailTag.value.trim();
    const password = passwordTag.value.trim();
    
    if(firstName === '') {
        errorFunc(fnameTag, "First Name cannot be empty");
    } else {
        successFunc(fnameTag);
    }

    if(lastName === '') {
        errorFunc(lnameTag, "Last Name cannot be empty");
    } else {
        successFunc(lnameTag);
    }

    if(email === '') {
        errorFunc(emailTag, "Email cannot be empty");
    } else if(!email.match(emailpattern)) {
        errorFunc(emailTag, 'Looks like not an email')
    } else {
        successFunc(emailTag);
    }
    
    if(password === '') {
        errorFunc(passwordTag, "Password cannot be empty");
    } else if (!password.match(passwordpattern)) {
        errorFunc(passwordTag, 'Your password is not strong enough')
        alert("password should contain atleast one number and one special character")
    } else {
        successFunc(passwordTag);
    }
    
    
})


function errorFunc(req, message) {
    req.classList.remove('success');
    req.classList.remove('error');
    
    const formControl = req.parentElement;
    const span = formControl.querySelector("span");
    span.classList.remove('error-text');
    span.innerText = message;
    // if(req.className.contains('error')) {
    //     req.removeNamedItem('class');
    // }
    req.className += 'error';
    span.className += 'error-text';
}

function successFunc(req) {
    req.classList.remove('success');

    const formControl = req.parentElement;
    const span = formControl.querySelector('span');

    span.innerText ="";
    req.classList.remove('error');
    req.className += 'success';
}