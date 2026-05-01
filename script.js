let count = 0;

function increaseCount() {
  count = count + 1;
  updateDisplay();
}

function decreaseCount() {
  if (count > 0) {
    count = count - 1;
    updateDisplay();
  }
}

function resetCount() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("count").textContent = count;

  if (count > 0) {
    document.getElementById("count").style.color = "green";
  } else {
    document.getElementById("count").style.color = "black";
  }
}