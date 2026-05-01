let count = 0;
let previousCount = 0;

function increaseCount() {
  previousCount = count;
  count = count + 1;
  updateDisplay();
}

function decreaseCount() {
  if (count > 0) {
    previousCount = count;
    count = count - 1;
    updateDisplay();
  }
}

function resetCount() {
  previousCount = count;
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("count").textContent = count;

  if (count === 0) {
    document.getElementById("count").style.color = "black";
    document.getElementById("message").textContent = "Counter is at zero";
  }else if(count<previousCount){
    document.getElementById("count").style.color="red";
    document.getElementById("message").textContent="Counter decreased";
  } else {
    document.getElementById("count").style.color = "green";
    document.getElementById("message").textContent = "Counter increased";
  }
}