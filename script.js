// ----------------------------------heart increase----------------------//
const heartCounter = document.getElementById("heart-icon");
const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let currentCount = parseInt(heartCounter.textContent);
    heartCounter.textContent = currentCount + 1;

    btn.classList.toggle("text-red-500");
  });
});

//---------------------------------------coin decrease-----------------------------//
const callCounter = document.getElementById("call-icon");
const calltButtons = document.querySelectorAll(".call-btn");

calltButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let currentCall = parseInt(callCounter.textContent);
    if (currentCall <= 20) {
      alert("Not enoungh coin available to make the call")
      return;
    }

    btn.classList.toggle("text-gray-500");

    callCounter.textContent = currentCall - 20;
    const cardBody = btn.closest(".card-body");
    const name = cardBody.querySelector("p").textContent;
    const number = cardBody.querySelector("h2").textContent;
    alert("Calling" + " " + name + " " + number + "....");
  });
});
// --------------------------------Call history------------------------------//
const callHistory = document.getElementById("history");
const callButtons = document.querySelectorAll(".call-btn");


callButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {

    const cardBody = btn.closest(".card-body");
    const name = cardBody.querySelector("h1").textContent;
    const number = cardBody.querySelector("h2").textContent;
    const date = new Date().toLocaleTimeString()


    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm mt-3"; // Updated CSS classes

    div.innerHTML = `
      <div>
        <p class="font-bold">${name}</p> 
        <p class="text-sm text-gray-600">${number}</p>
      </div>
      <span class="text-xs text-gray-500">${date}</span>
    `;
    callHistory.appendChild(div);

  });
});


const callClearBtn = document.getElementById("clear");

callClearBtn.addEventListener("click", function () {
  callHistory.innerHTML = "";
});

//--------------------------Copy button-------------//
const copytCounter = document.getElementById("copy-icon");
const copyButtons = document.querySelectorAll(".copy-btn");
let currentCount = 0;

copyButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let currentCount = parseInt(copytCounter.textContent);
    copytCounter.textContent = currentCount + 1;
  });
});

//-----------copy clipborad----------------//
document.querySelectorAll(".copy-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const cardBody = btn.closest(".card-body");
    const h2Text = cardBody.querySelector("h2").textContent;
    navigator.clipboard.writeText(h2Text)
      .then(() => {
        console.log('Text copied to clipboard:', h2Text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
    alert("The copied number is" + " " + h2Text);
  });
});