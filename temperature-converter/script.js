const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

if (degree.value === "") {
  convertBtn.setAttribute("disabled", "");
  setTimeout(() => {
    convertBtn.removeAttribute("disabled");
  }, 4000);
}

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToFaranheit();
});

function convertToFaranheit() {
  let inputValue = degree.value;
  if (tempType.value === "celsius") {
    const CelsiusToFahrenheit = inputValue * (9 / 5) + 32;
    celsiusField.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;c`;
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
  }
}
