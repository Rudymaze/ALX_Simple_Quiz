// FUNCTION FOR ADDITION!
function add(number1, number2) {
  return number1 + number2;
}

document.getElementById("add").addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = add(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

// FUNCTION FOR SUBTRACTION!

function subtract(number1, number2) {
  return number1 - number2;
}

document.getElementById("subtract").addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = subtract(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

// FUNCTION FOR MULTIPLICATION!

function multiply(number1, number2) {
  return number1 * number2;
}

document.getElementById("multiply").addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = multiply(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

// FUNCTION FOR DIVISION!
function divide(number1, number2) {
  return number1 / number2;
}

document.getElementById("divide").addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = divide(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
