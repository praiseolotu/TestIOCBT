/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')

/*===== OPERATING SYSTEM OF DEVICE =====*/
let os = document.getElementById('os')
let sub = document.getElementById('login-in')

/*===== NETWORK STATUS OF DEVICE =====*/
let online = document.getElementById('online')

/*===== ROUTE USER TO OTHER PAGES =====*/
const getIn = document.getElementById('get-in')
const getUp = document.getElementById('get-up')

signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})


signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

os.innerHTML = "Your Operating System is " + navigator.platform;


if(navigator.onLine == true) {
    online.innerHTML = alert("Network Status: online");
}else {
    online.innerHTML = alert("Network Status: offline");
}

/*===== OTP VERIFICATION =====*/

let num = Math.random().toString(36).slice(2,20);
otp.innerHTML = num;

sub.addEventListener('submit', ()=>{
    let x = document.forms["myForm"]["password"].value;
    if(x === num) {
      window.location.href="otp.html";
    }else {
   window.location.href="unauth.html";
    }
})
