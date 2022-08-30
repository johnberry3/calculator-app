// const chk = document.getElementById("chk");
const chk = document.querySelector(".checkbox");
const calculator = document.querySelector(".calculator");

chk.addEventListener("change", () => {
  calculator.classList.toggle("dark");
});


function display(val){
  document.getElementById('result').value += val;
  return val;
}

function solve(){
  let x = document.getElementById('result').value;
  let y = eval(x);

  document.getElementById('result').value = y;

  return y;
}

function clearscreen(){
  document.getElementById('result').value = "";
}

