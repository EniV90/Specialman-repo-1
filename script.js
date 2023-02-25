function validateForm() {
  // Get the form values
  const fname = document.forms["registrationForm"]["fname"].value;
  const lname = document.forms["registrationForm"]["lname"].value;
  const tel = document.forms["registrationForm"]["tel"].value;
  const email = document.forms["registrationForm"]["email"].value;
  const password = document.forms["registrationForm"]["password"].value;


    const form = document.getElementById("registrationForm");
    let errorMessage = document.getElementsById("errorMessage");
    errorMessage.textContent = "Please enter a valid email address";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "12px";
    form.appendChild(errorMessage);

  // Check that all required fields are filled out
  if (
    fname == "" ||
    lname == "" ||
    tel == "" ||
    email == "" ||
    password == ""
  ) {
    // alert("This field is empty");
    return errorMessage;
  }

  // Check that the email is properly formatted
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check that the password and confirm password fields match
  if (!/^ (2=. * [A-Za-z]) (?=.*\d) [A-Za-z\d] {8, ]$/g) {
    alert(
      "Password should be atleast 8 characters, one capital and small letter"
    );
    return false;
  }

  // If all validation checks pass, submit the form
  return true;
}
