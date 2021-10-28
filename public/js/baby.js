const babyFormHandler = async function (event) {
  event.preventDefault();

  const babyDropdownEl = document.querySelector("#babyDropdown");
  const nameEl = document.querySelector("#name");
  const dobEl = document.querySelector("#dob");

  const response = await fetch("/api/baby", {
    method: "POST",
    body: JSON.stringify({
      babyDropdown: babyDropdownEl.value,
      name: nameEl.value,
      dob: dobEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Baby not added!");
  }
};

document
  .querySelector("#baby-form")
  .addEventListener("submit", babyFormHandler);
