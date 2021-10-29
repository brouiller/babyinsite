const signupFormHandler = async function (event) {
  event.preventDefault();

  const first_nameEl = document.querySelector("#first_name");
  const last_nameEl = document.querySelector("#last_name");
  const emailEl = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      first_name: first_nameEl.value,
      last_name: last_nameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/baby");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
