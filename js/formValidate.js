const name = document.querySelector("#name");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const formContact = document.querySelector("#formContact");

const resetBtn = document.getElementById("resetBtn");

formContact.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  if (name.value && email.value && tel.value) {
    successMessage("Tack så mycket");
  } else {
    errorMessage("Något har blivit tökigt");
  }
}

function errorMessage(errorMsg) {
  const error = document.querySelector("#error");
  error.style.display = "block";
  error.innerHTML = errorMsg;
  setTimeout(() => {
    error.style.display = "none";
  }, 2000);
}

function successMessage(successMsg) {
  const success = document.querySelector("#success");
  success.style.display = "block";
  success.innerHTML = successMsg;
  setTimeout(() => {
    success.style.display = "none";
  }, 2000);
}

// reset all fields

resetBtn.addEventListener("click", resetForm);

function resetForm() {
  name.value = "";
  email.value = "";
  tel.value = "";
}
