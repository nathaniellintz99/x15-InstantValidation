function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var passLength = passEntered.length;

  if(/\s/.test(userEntered)){
  document.getElementById("usernameError").innerHTML="Username can't have spaces.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.add("has-error");
}
  else if(userEntered.length < 6){
  document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.add("has-error");
}
else{
  document.getElementById("usernameGroup").classList.add("has-success");
}

  if(passEntered !== "password" && passEntered !== "Password" && passLength >=6 && passLength <=20 && passEntered !== userEntered){
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  else{
    if(passEntered == "password" || passEntered == "Password"){
      document.getElementById("passwordError").innerHTML="Password must not be password";
}
    else if(passLength >=6 && passLength <=20 ){
      document.getElementById("passwordError").innerHTML="Password must be 6 characters long and no greater than 20.";
  }
    else if(passEntered == userEntered){
      document.getElementById("passwordError").innerHTML="Bad password.";
}
    else{
      document.getElementById("passwordError").innerHTML="Bad password.";
}
}
  if(passEntered == "password" && passEntered == "Password" && passLength <6 && passLength >20 && passEntered == userEntered){
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
}
}
