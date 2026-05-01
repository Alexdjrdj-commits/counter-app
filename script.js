let count=0;

function increasecount() {
    count= count+1;
    document.getElementById("count").textContent= count;
}
function decreasecount() {
  if(count>0) {
    count= count-1;
    document.getElementById("count").textContent= count;
  }
}


function resetCount() { 
    count= 0;
    document.getElementById("count").textContent=count;

}   