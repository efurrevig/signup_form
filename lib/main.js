function checkPassword() {
    if (document.getElementById('password1').value == 
        document.getElementById('password2').value) {
            return true;
        } else {
            return false;
        }
};

function checkName() {
    first_name = document.getElementById('first_name').value;
    last_name = document.getElementById('last_name').value;
    valid = true
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
        document.getElementById('pwordmessage').style.color = 'red';
        document.getElementById('pwordmessage').innerHTML = 'Password does not match';
    }
    if (checkName() == false) {
        validationFailed = true;
    }
    if (validationFailed) {
        event.preventDefault();
        return false;
    }
}