function register(){
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    var con_pass = document.getElementById("con_pass").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var user_type = document.getElementById("user_type").value;



    if ( user_type=="" )
        alert("Select user type");
    
    else if ( name=="" )
        alert("Enter Name");

    else if ( username=="" )
        alert("Enter Username");

    else if ( pass=="" )
        alert("Enter Password");

    else if ( con_pass=="" )
        alert("Confirm Password");

    else if ( con_pass != pass )
        alert("Password donot match");
    
    else if ( email=="" )
        alert("Enter E-mail");

    else if ( contact=="" )
        alert("Enter Contact no");
    
    
    else if (contact.length!=10 )
        alert("Enter valid Contact no."); 

    else 
    {
        if (user_type=="consumer")
        {
            alert("Registration successful.\nUser type : " + user_type + "\nName : " + name + "\nUsername : " + username + "\nE-mail : " + email + "\nContact No. : " + contact );
            window.location = "dashboard.html";
        }
        else if (user_type == "producer")
        {
            alert("Registration successful.\nUser type : " + user_type + "\nName : " + name + "\nUsername : " + username + "\nE-mail : " + email + "\nContact No. : " + contact );
            window.location = "producer_dashboard.html";
        }
    }
}