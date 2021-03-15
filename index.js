function validation() {
    var user = document.getElementById("uname").value;
    var umail = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Validation of Username...
    if (user == "") {
        document.getElementById('unamee').innerHTML = "**Please Write Your User Name in the Box**";
        return false;
    }
    else if (user.length < 2) {
        document.getElementById('unamee').innerHTML = "**Username must should be greater than 2 character**";
        return false;
    }
    else if (!isNaN(user)) {
        document.getElementById('unamee').innerHTML = "**Sorry Numbers are not allowed in Username**";
        return false;
    }
    else {
        document.getElementById('unamee').innerHTML = "";
    }

    // Validation of email...
    if (umail == "") {
        document.getElementById('emaill').innerHTML = "**Please Write Your Email-Id in the Box**";
        return false;
    }
    else if (umail.search(/[@]/)==-1) {
        document.getElementById('emaill').innerHTML = "** In email-Id must contain '@' **";
        return false;
    }
    else if (umail.search(/.com/)==-1) {
        document.getElementById('emaill').innerHTML = "** In email-Id must contain '.com' **";
        return false;
    }
    // else if (umail.search(/./)== 1) {
    //     document.getElementById('emaill').innerHTML = "**Please enter a valid emil-Id**";
    //     return false;
    // }
    else if (umail.indexOf('@')<=0) {
        document.getElementById('emaill').innerHTML = "**Sorry Invalid position of '@' **";
        return false;
    }
    else if (umail.charAt(umail.length-4)!='.') {
        document.getElementById('emaill').innerHTML = "**Sorry Invalid position of '.' **";
        return false;
    }
    else {
        document.getElementById('emaill').innerHTML = "";
    }

    // Validation of Phone No...
    if (phone == "") {
        document.getElementById('phonee').innerHTML = "**Please Write Your Contact-No in the Box**";
        return false;
    }
    else if (phone.length < 10 || phone.length>10) {
        document.getElementById('phonee').innerHTML = "**Phone No must contain 10 Digits only**";
        return false;
    }
    else if (isNaN(phone)) {
        document.getElementById('phonee').innerHTML = "**Sorry Characters are not allowed in Contact No**";
        return false;
    }
    else {
        document.getElementById('phonee').innerHTML = "";
    }

    
};