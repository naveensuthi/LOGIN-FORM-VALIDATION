const loginPassword = document.getElementById("loginPassword");
const loginUsername = document.getElementById("loginUsername");
const showPassword = document.querySelector(".fa-eye");
const loginForm = document.getElementById("loginForm");

// show or hide password
showPassword.onclick = (e) => {
  console.log(loginPassword.type);
  //   loginPassword.type = loginPassword.type === "password" ? "text" : "password";
  if (loginPassword.type === "password") {
    loginPassword.type = "text";
    showPassword.style.color = "red";
    showPassword.classList.add("fa-eye-slash");
  } else {
    loginPassword.type = "password";
  }
};
// console.log(showPassword);

// Validation
loginForm.onsubmit = (e) => {
  e.preventDefault();
  //   Username validation
  if (loginUsername.value === "" || loginUsername.value.length < 4) {
    // console.log("empty");
    showError(
      loginUsername,
      "Username should not empty and should be more than 4 chars"
    );
  } else {
    // console.log("not empty");
    showSuccess(loginUsername);
  }
  //   Password validation
  if (loginPassword.value === "" || loginPassword.value.length < 6) {
    // console.log("empty");
    showError(
      loginPassword,
      "Password should not be empty and should be more 6 chars"
    );
  } else {
    // console.log("not empty");
    showSuccess(loginPassword);
  }
};

function showError(input, message) {
  const formField = input.parentElement;
  formField.className = "form-field error";
  if (formField.className === "form-field error") {
    const alert_message = formField.querySelector(".alert-message");
    //   console.log(formFeild);
    // console.log(alert_message);
    alert_message.style.visibility = "visible";
    alert_message.style.color = "red";
    alert_message.innerText = message;
    // alert_message.className = "alert-message error";
  }
}

function showSuccess(input) {
  const formField = input.parentElement;
  formField.className = "form-field success";
  if (formField.className === "form-field success") {
    const alert_message = formField.querySelector(".alert-message");
    alert_message.style.visibility = "hidden";
  }
}
