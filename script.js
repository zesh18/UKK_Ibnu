function appendValue(value) {
  const display = document.getElementById("display");
  const currentValue = display.value;

  if (value === '+' && currentValue.slice(-1) === '+') return;
  if (value === '-' && currentValue.slice(-1) === '-') return;
  if (value === '*' && currentValue.slice(-1) === '*') return;
  if (value === '/' && currentValue.slice(-1) === '/') return;

  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "error";
  }
}
