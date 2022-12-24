function checkPassword() {
    var password = document.getElementById('password1').value;
    var valid = true
    /*
    var oneDigit = /^?=.*[0-9]/;
    var oneDownCase = /?=.*[a-z]/;
    var oneUpCase = /?=.*[A-Z]/;
    var oneSpecial = /?=.*[*.!@$%^&(){}[]:;<>,.?\~_+-=|\]/;
    var length = /.{8,32}/;
    */
    if (password != document.getElementById('password2').value) {
        document.getElementById('pwordmessage').style.color = 'red';
        document.getElementById('pwordmessage').innerHTML = 'Password does not match';
        valid = false;
        //console.log(/^(?=.*[a-z])/.test(password));
    } else if (/^(?=.*[0-9])/.test(password) == false) { // ONE DIGIT
        message.style.color = 'red';
        message.innerHTML = 'Password must have at least one digit';
        valid = false;
        //console.log(/^(?=.*[a-z])/.test(password));
    } /* else if (/^(?=.*[a-z])/.test(password) == false) {
        message.style.color = 'red';
        message.innerHTML = 'Password must have at least one lowercase letter';
        valid = false;
    }
    */
    

    return valid;

}


/*                                           Match the beginning of the string
(?=.*[0-9])                                  Require that at least one digit appear anywhere in the string
(?=.*[a-z])                                  Require that at least one lowercase letter appear anywhere in the string
(?=.*[A-Z])                                  Require that at least one uppercase letter appear anywhere in the string
(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\])    Require that at least one special character appear anywhere in the string
.{8,32}                                      The password must be at least 8 characters long, but no more than 32
$                                            Match the end of the string.

*/


function checkName() {
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var valid = true

    if (first_name.length == 0 || first_name.length > 20) { 
        document.getElementById('first_name_message').style.color = 'red';
        document.getElementById('first_name_message').innerHTML = 'Please enter a valid name (max 20 characters)';
        valid = false;      
    }
    if (last_name.length == 0 || last_name.length > 20) { 
        document.getElementById('last_name_message').style.color = 'red';
        document.getElementById('last_name_message').innerHTML = 'Please enter a valid name (max 20 characters)';
        valid = false;
    }

    return valid;
}


function checkPhoneNum() {

}

function validate() {
    var validationFailed = false;
    if (checkPassword() == false) {
        validationFailed = true;
    }

    if (checkName() == false) {
        validationFailed = true;
    }

    if (validationFailed) {
        event.preventDefault();
        return false;
    }
    event.preventDefault();
}