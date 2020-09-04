function check(){
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;

    if (username=="user1" && pass=="user10702")
    {
        if (user_type.value=="consumer")
        {
            alert("Login successful");
            window.location = "dashboard.html";
        }
        else if (user_type.value=="producer")
        {
            alert("Login successful");
            window.location = "producer_dashboard.html";
        }
    }
    else
    {
        alert("Incorrect username or password");
    }
}