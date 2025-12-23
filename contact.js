function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  saveFormData(name, email, message);
  showSuccessSendMsg();
  clearForm();

  return false;
}

function saveFormData(name, email, message) {
  const contactData = {
    name: name,
    email: email,
    message: message,
    date: new Date().toLocaleString()
  };

  let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
  messages.push(contactData);

  localStorage.setItem("contactMessages", JSON.stringify(messages));
}

function showSuccessSendMsg() {
  const msg = document.getElementById("successMsg");
  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
