//login functions
const loginFormHandler = async function (event) {
  event.preventDefault();

  const emailEl = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
    console.log(response);
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to login");
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
