function check(){
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;

    if (username=="user1" && pass=="user10702")
    {
        alert("Login successful");
        window.location = "dashboard.html";
    }
    else
    {
        alert("Incorrect username or password");
    }
}