
    var user=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;
  


    function validate(){
    if(user.value == "admin" & pwd.value == "12345"){
          return true;
        }
    else{
        alert("Invalid Username or Password");
        return false;
       }
    }