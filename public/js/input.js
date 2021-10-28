// diaper form handler
const diaperFormHandler = async function (event) {
  event.preventDefault();

  const diaperTypeEl = document.querySelector("#diaper-type");
  const diaperTimeEl = document.querySelector("#diaper-changeTime");

  const response = await fetch("api/diaper", {
    method: "POST",
    body: JSON.stringify({
      type: diaperTypeEl.value,
      time: diaperTimeEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to submit diaper form");
  }
};

document
  .querySelector("#diaper-form")
  .addEventListener("submit", diaperFormHandler);

// diet form handler
const dietFormHandler = async function (event) {
  event.preventDefault();

  const foodEl = document.querySelector("#food-type");
  const quantityEl = document.querySelector("#food-quantity");
  const eatTimeEl = document.querySelector("#eat-time");

  const response = await fetch("/api/diet", {
    method: "POST",
    body: JSON.stringify({
      food: foodEl.value,
      quantity: quantityEl.value,
      time: eatTimeEl.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to submit a diet form");
  }
};
document
  .querySelector("#diet-form")
  .addEventListener("submit", dietFormHandler);

// sleep form handler
const sleepFormHandler = async function (event) {
  event.preventDefault();

  const sleepTimeEl = document.querySelector("#sleep-time");

  const response = await fetch("/api/sleep", {
    method: "POST",
    body: JSON.stringify({
      time: sleepTimeEl.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to submit a diet form");
  }
};

document
  .querySelector("#sleep-form")
  .addEventListener("submit", sleepFormHandler);
