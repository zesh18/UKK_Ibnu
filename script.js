function appendValue(value) {
  const display = document.getElementById("display");
  const currentValue = display.value;

  if (value === "+" && currentValue.slice(-1) === "+") return;
  if (value === "-" && currentValue.slice(-1) === "-") return;
  if (value === "" && currentValue.slice(-1) === "") return;
  if (value === "/" && currentValue.slice(-1) === "/") return;
  if (value === "%" && currentValue.slice(-1) === "%") return;

  if (value === "%") {
    if (currentValue) {
      display.value += "%";
    }
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  let expression = display.value;

  if (expression.includes("/0")) {
    display.value = "Tidak bisa dibagi dengan nol";
    return;
  }

  expression = expression.replace(/(\d+)%/g, (match, p1) => p1 * 0.01);

  try {
    let result = eval(expression);
    display.value = result; 
  } catch (error) {
    if (error instanceof SyntaxError) {
      display.value = "Error: Data Tidak Valid";
    } else if (error instanceof TypeError) {
      display.value = "Error";
    }
  }
}
