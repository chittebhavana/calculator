let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }
  
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
