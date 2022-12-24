function checkPassword() {
    var password = document.getElementById('password1').value;
    var valid = true;

    if (password != document.getElementById('password2').value) { // confirm password match
        document.getElementById('pwordmessage').style.color = 'red';
        document.getElementById('pwordmessage').innerHTML = 'Password does not match';
        valid = false;
    } else if (password.length < 8 || password.length > 32) {
        document.getElementById('pwordmessage').style.color = 'red';
        document.getElementById('pwordmessage').innerHTML = 'Password must be between 8 and 32 characters';
        valid = false;
    } else if (/^(?=.*[0-9])/.test(password) == false) { // ONE DIGIT
        document.getElementById('pwordmessage').style.color = 'red';
        document.getElementById('pwordmessage').innerHTML = 'Password must have at least one digit';
        valid = false;
    } else if (/^(?=.*[a-z])/.test(password) == false) { // one lowercase letter
        document.getElementById('pwordmessage').style.color = 'red';
        document.getElementById('pwordmessage').innerHTML = 'Password must have at least one lowercase letter';
        valid = false;
    } else if (/^(?=.*[A-Z])/.test(password) == false) { // one uppercase letter
        document.getElementById('pwordmessage').style.color = 'red';
        document.getElementById('pwordmessage').innerHTML = 'Password must have at least one uppercase letter';
        valid = false
    } else if (/^(?=.*[*!@$%&?~])/.test(password) == false) { // one special character
        document.getElementById('pwordmessage').style.color = 'red';
        document.getElementById('pwordmessage').innerHTML = 'Password must have at least one special character ("*!@$%&?~")';
        valid = false;
    } 
    
    return valid;

};


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
    var valid = true;

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
};


function checkPhoneNum() {

};

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
};