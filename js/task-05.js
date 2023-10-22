const inputEl = document.querySelector("#name-input");
const changingNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value.trim();

  if (inputValue === "") {
    changingNameEl.textContent = "Anonymous";
  } else {
    changingNameEl.textContent = inputValue;
  }
}
