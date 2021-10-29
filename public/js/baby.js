const babyFormHandler = async function (event) {
  event.preventDefault();

  const babyDropdownEl = document.querySelector("#babyDropdown");
  const nameEl = document.querySelector("#name");
  const dobEl = document.querySelector("#dob");
  const dobConversion = Date.parse(dobEl.value);
  var dob = parseInt(dobConversion);
  dob = dob / 1000 + 60120;

  const response = await fetch("/api/baby", {
    method: "POST",
    body: JSON.stringify({
      babyDropdown: babyDropdownEl.value,
      name: nameEl.value,
      dob: dob,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

const relocate = () => document.location.replace("/");

document
  .querySelector("#baby-form")
  .addEventListener("submit", babyFormHandler);

document
  .querySelector("#baby-btn")
  .addEventListener("click", relocate);
