document.querySelector(".form").addEventListener('submit',function(){
  const firstName = document.querySelector("#First-name").value;
  const lastName = document.querySelector("#Last-name").value;
  const emailAddress = document.querySelector("#Email-Address").value;
  const password = document.querySelector("#Password").value;
  if (firstName == "") {
    document.querySelector(".erro-mesg1").classList.add("small-msg");
    document.querySelector(".error-icon1").classList.add("error-icon-display");
    document.querySelector("#First-name").classList.add("input-border");
  }
  else if (firstName != "") {
    document.querySelector(".erro-mesg1").classList.remove("small-msg");
    document.querySelector(".error-icon1").classList.remove("error-icon-display");
    document.querySelector("#First-name").classList.remove("input-border");
  }
   if (lastName== "") {
    document.querySelector(".erro-mesg2").classList.add("small-msg");
    document.querySelector(".error-icon2").classList.add("error-icon-display");
    document.querySelector("#Last-name").classList.add("input-border");
  }
  else if (lastName != "") {
   document.querySelector(".erro-mesg2").classList.remove("small-msg");
   document.querySelector(".error-icon2").classList.remove("error-icon-display");
   document.querySelector("#Last-name").classList.remove("input-border");
 }
 if (!validateEmail(emailAddress)) {
  document.querySelector(".erro-mesg3").classList.add("small-msg");
  document.querySelector(".error-icon3").classList.add("error-icon-display");
  document.querySelector("#Email-Address").classList.add("input-border");
}
else if (validateEmail(emailAddress)) {
  document.querySelector(".erro-mesg3").classList.remove("small-msg");
  document.querySelector(".error-icon3").classList.remove("error-icon-display");
  document.querySelector("#Email-Address").classList.remove("input-border");
}
   if (password == "") {
    document.querySelector(".erro-mesg4").classList.add("small-msg");
    document.querySelector(".error-icon4").classList.add("error-icon-display");
    document.querySelector("#Password").classList.add("input-border");
  }
  else if (password != "") {
    document.querySelector(".erro-mesg4").classList.remove("small-msg");
    document.querySelector(".error-icon4").classList.remove("error-icon-display");
    document.querySelector("#Password").classList.remove("input-border");
  }
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

event.preventDefault();
});
