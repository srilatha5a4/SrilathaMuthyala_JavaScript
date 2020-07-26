function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error_message = document.getElementById("error_message");
    var phone = document.getElementById("phnumber").value;
    var dob = document.getElementById("dob").value;
   
    error_message.style.padding = "10px";
    error_message.style.textAlign = "center";
    error_message.style.color = "red";

    var data = dob.split("-");
   
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 15){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
      }
      if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(password  = null|| password.length <10){
      text = "Please Enter valid password";
      error_message.innerHTML = text;
      return false;
    }
    if((data[0])>2002){
      text ="You should be above 18 years to register";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }