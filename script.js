function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 
 
 
 if(form.userid.value == "ayshik56@gmail.com"|| form.userid.value == "ayesha@gmail.com")
 
  {
    let new_tab =   document.getElementById("log")
    window.open(new_tab)
    /*opens the target page while Id & password matches*/
  }
 else
 {
  document.getElementById('error-message').innerHTML = "<span class='error'>Invalid Email!</span>";                  /*displays error message*/
  }
}
function password(form) 
{

  if(form.pswrd.value == "aysh" || form.pswrd.value == "ayesha"){
    alert("correct password")
  }
  else {
    document.getElementById('error-message').innerHTML = "<span class='error'>Wrong Password</span>";   
  }
}
