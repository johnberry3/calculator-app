// const chk = document.getElementById("chk");
const chk = document.querySelector(".checkbox");
const calculator = document.querySelector(".calculator");

chk.addEventListener("change", () => {
  calculator.classList.toggle("dark");
});
