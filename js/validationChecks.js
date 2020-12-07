// Validation checks
// Validate length of names
function validatefnameLength(){
    var first = document.form.fname.value;
    var reg1 = /^[a-zA-Z\'\-]{2,15}$/;

    if (reg1.test(first)) {
        return true;
    } else {
        alert("Please input a valid First name!");
        document.form.fname.focus();
        return false; 
    }
}

function validatelnameLength(){
    var last = document.form.lname.value;
    var reg2 = /^[a-zA-Z\'\-]{2,25}$/;
    if (reg2.test(last)) {
        return true;
    } else {
        alert("Please input a valid Last name!");
        document.form.lname.focus();
        return false;
    }
}

// Validate Email format
function validateEmail() {
    var emailID = document.form.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter a valid Email address!")
       document.form.email.focus();
       return false;
    }
    return true;
}

//Validate phone number format
function validatePhone() {
    var phn = document.form.phone.value;
    var reg3 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
    if (reg3.test(phn)){
        return true;
    } else{
        alert('Invalid Phone number format!');
        document.form.phone.focus();
        return false;
    }
}

// Check radio inputs: Gender and Education fields
function checkRadioFields() {
    var gen = document.form.gender.value;
    var ed = document.form.education.value;
    if (gen == "" || gen == null) {
        alert("Please select your Gender!");
        return false;
    }
    if (ed == "" || ed == null) {
        alert("Please select your Education level!");
        return false;
    }
    return true;
}

// Check for at least one checkbox checked
function checkCheckboxes() {
    var skl = document.form.skill;   
    for (var i = 0; i < skl.length; i++){
        if (skl[i].checked){
            return true;
        }
    }
    return false;
}

function validateSkills() {
    if (!checkCheckboxes()) {
        alert("Please select at least one skill to enroll to!");
        return false;
    }
    return true;
}

//Full validation checks: Check if any field is empty
function Validate() {
    if (validatefnameLength() && validatelnameLength() && validateEmail() && validatePhone() && checkRadioFields() && validateSkills()){
        alert('REGISTRATION SUCCESSFUL!!');
        return true;
    }
    alert("Please fill any empty fields!");
    return false;
}