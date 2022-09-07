const chk = document.querySelector(".checkbox");
const container = document.querySelector(".container");
const calculator = document.querySelector(".calculator");

chk.addEventListener("change", () => {
  calculator.classList.toggle("dark");
  container.classList.toggle("dark");
});

function display(val) {
  if (val === "." && document.getElementById("result").value.includes("."))
    return;
  document.getElementById("result").value += val;
  return val;
}

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);

  document.getElementById("result").value = y;

  return y;
}

function clearscreen() {
  document.getElementById("result").value = "";
}
