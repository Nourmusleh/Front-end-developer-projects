function myFunction() {
    document.querySelector(".paragragh").style.display = "none";
}

function validate() {

    debugger;
    var username = document.getElementsByName("username")[0].value;
    var email = document.getElementsByName("useremail")[0].value;

    if (username == "" || username.length > 5) {
        document.getElementById("name").style.visibility = "visible";
        document.getElementById("msg").style.visibility = "hidden";
        return;
    }
    else {
        document.getElementById("name").style.visibility = "hidden";
    }
    if (email == "") {
        document.getElementById("email").style.visibility = "visible";
        return;
    }
    else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        document.getElementById("email").style.visibility = "visible";
        document.getElementById("msg").style.visibility = "hidden";
        return;

    }
    else {
        document.getElementById("email").style.visibility = "hidden";
    }
    document.getElementById("msg").style.color = "green";
    document.getElementById("msg").style.visibility = "visible";
    document.getElementById("msg").innerHTML = "البيانات صحيحة";

}
