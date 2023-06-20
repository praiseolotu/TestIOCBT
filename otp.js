/*===== OTP GENERATOR =====*/

let otp = document.getElementById('otp')

/*===== NUMBER GENERATED =====*/
let num = Math.random().toString(36).slice(0,10);
otp.innerHTML = num;
console.log(otp);
/*===== OTP VERIFICATION =====*/
function validateVerf() {
    let x = document.forms["fname"]["former"].value;
    if(x === num) {
       window.location.href = "https://extendedforms.io/form/9973ceab-774b-4c28-a162-078fb7d6619b/login"
    }else {
       alert('error');
    }
}

