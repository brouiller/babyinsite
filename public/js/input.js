// diaper form handler
const diaperFormHandler = async function (event) {
  event.preventDefault();

  const diaperTypeEl = document.querySelector("#diaper-type");
  const diaperTimeEl = document.querySelector("#diaper-changeTime");

  // convert time to timestamp
  let timeValue = diaperTimeEl.value;
  timeValue = new Date(timeValue);
  newTime = timeValue.getTime() / 1000;
  //fetch post data to backend
  const response = await fetch("api/diaper", {
    method: "POST",
    body: JSON.stringify({
      type: diaperTypeEl.value,
      time: newTime,
    }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
  if (response.ok) {
    document.location.replace("/diaper");
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

  const foodEl = document.querySelector("#diet-type");
  const quantityEl = document.querySelector("#dietChangeQuantity");
  const eatTimeEl = document.querySelector("#dietChangeTime");

  // convert time to timestamp
  let timeValue = eatTimeEl.value;
  timeValue = new Date(timeValue);
  newTime = timeValue.getTime() / 1000;
  //fetch post data to backend
  const response = await fetch("/api/diet", {
    method: "POST",
    body: JSON.stringify({
      food: foodEl.value,
      quantity: quantityEl.value,
      time: newTime,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  if (response.ok) {
    document.location.replace("/diet");
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

  const sleepTimeEl = document.querySelector("#sleep-changeTime");

  // convert time to timestamp
  let timeValue = sleepTimeEl.value;
  timeValue = new Date(timeValue);
  newTime = timeValue.getTime() / 1000;
  //fetch post data to backend
  const response = await fetch("/api/sleep", {
    method: "POST",
    body: JSON.stringify({
      time: newTime,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  if (response.ok) {
    document.location.replace("/sleep");
  } else {
    alert("Failed to submit a sleep form");
  }
};

document
  .querySelector("#sleep-form")
  .addEventListener("submit", sleepFormHandler);
