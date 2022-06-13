function dynamicdropdown(listindex) {
    switch (listindex) {
        case "slovakia":
            document.getElementById("university").options.length = 1;
            document.getElementById("city").options[1] = new Option("Bratislava", "bratislava");
            document.getElementById("city").options[2] = new Option("Nitra", "nitra");
            document.getElementById("city").options[3] = new Option("Zilina", "zilina");
            break;
        case "serbia":
            document.getElementById("university").options.length = 1;
            document.getElementById("city").options[1] = new Option("Belgrade", "belgrade");
            document.getElementById("city").options[2] = new Option("Novi Sad", "novisad");
            document.getElementById("city").options[3] = new Option("Nis", "nis");
            break;
        case "ukraine":
            document.getElementById("university").options.length = 1;
            document.getElementById("city").options[1] = new Option("Kyiv", "kyiv");
            document.getElementById("city").options[2] = new Option("Dnipro", "dnipro");
            document.getElementById("city").options[3] = new Option("Donetsk", "donetsk");
            break;
        case "bratislava":
            document.getElementById("university").options[1] = new Option("STU", "stu");
            document.getElementById("university").options[2] = new Option("UK", "uk");
            document.getElementById("university").options[3] = new Option("EUBA", "euba");
            break;
        case "nitra":
            document.getElementById("university").options[1] = new Option("UKF", "ukf");
            document.getElementById("university").options[2] = new Option("SPU", "spu");
            document.getElementById("university").options[3] = new Option("UJS", "ujs");
            break;
        case "zilina":
            document.getElementById("university").options[1] = new Option("UNIZA", "uniza");
            break;
        case "belgrade":
            document.getElementById("university").options[1] = new Option("UNIBG", "unibg");
            document.getElementById("university").options[2] = new Option("SINGIDUNUM", "singidunum");
            document.getElementById("university").options[3] = new Option("EUBG", "eubg");
            break;
        case "novisad":
            document.getElementById("university").options[1] = new Option("UNS", "uns");
            document.getElementById("university").options[2] = new Option("FIMEK", "fimek");
            break;
        case "nis":
            document.getElementById("university").options[1] = new Option("UNIS", "unis");
            break;
        case "kyiv":
            document.getElementById("university").options[1] = new Option("TSNUK", "tsnuk");
            document.getElementById("university").options[2] = new Option("NUKMA", "nukma");
            document.getElementById("university").options[3] = new Option("NTUK", "ntuk");
            break;
        case "dnipro":
            document.getElementById("university").options[1] = new Option("OHDNU", "ohdnu");
            document.getElementById("university").options[2] = new Option("NTDUP", "ntdup");
            break;
        case "donetsk":
            document.getElementById("university").options[1] = new Option("DNU", "tsnuk");
            break;
    }
    return true;
}

function radiobutton(option) {
    document.getElementById(option).style.display = "block";
    if (option == "male-radio") {
        document.getElementById("female-radio").style.display = "none";
    } else {
        document.getElementById("male-radio").style.display = "none";
    }
}

function checkEmpty(elementName) {
    var element = document.getElementById(elementName)
    var text = element.value;
    var span = document.getElementById(elementName + "-span");
    if (text == "") {
        span.style.display = "block";
        span.style.color = "red";
        element.style.borderColor = "red";
        return false;
    } else {
        span.style.display = "none";
        element.style.borderColor = "black";
        return true;
    }
}


function checkAge() {
    var ageInput = document.getElementById("age-input");
    var dateInput = document.getElementById("date-input");
    var dateInputValue = dateInput.value;
    var today = new Date();
    var yearByInput = dateInputValue[0] + dateInputValue[1] + dateInputValue[2] + dateInputValue[3];
    var monthByInput = dateInputValue[5] + dateInputValue[6];
    var dayByInput = dateInputValue[8] + dateInputValue[9];
    var ageCalculated = today.getFullYear() - yearByInput;
    if (today.getMonth() + 1 < monthByInput) {
        ageCalculated--;
    }
    if (today.getMonth() + 1 == monthByInput) {
        if (today.getDate() < dayByInput) {
            ageCalculated--;
        }
    }
    if (ageCalculated != ageInput.value) {
        ageInput.setCustomValidity("Entered age does not match with the date of birth");
        return false;
    } else {
        ageInput.setCustomValidity("");
        return true;
    }
}

function showOther() {
    var chechkbox = document.getElementById('language4');
    var otherLabel = document.getElementById('language-other');
    if (chechkbox.checked) {
        otherLabel.style.visibility = "visible";
    } else {
        otherLabel.style.visibility = "hidden";
    }
}

function emailValidate() {
    var emailInput = document.getElementById('email-input');
    var pattern = new RegExp(emailInput.getAttribute("pattern"));
    if (!pattern.test(emailInput.value)) {
        emailInput.setCustomValidity("Email must have @, at least 2 domains(last domain must have 2-4 letters and before @ must be at least 3 letters)");
        return false;
    } else {
        emailInput.setCustomValidity("");
        return true;
    }

}

function checkFormValidity() {
    if (!checkEmpty("firstname-input")) {
        return false;
    } else
    if (!checkEmpty("lastname-input")) {
        return false;
    } else 
    if (!emailValidate()){
        return false;
    } else
    if(!checkEmpty("phonenumber-input")){
        return false;
    } else
    if(!checkAge()){
        return false;
    } else {
        return true;
    }
}

function sendForm(){
    if(checkFormValidity()){
        window.location.href = "mailto:jovanposta@gmail.com";
    }
}