function showTime() {
  var datetime = new Date().toLocaleString();
  document.getElementById("myClock").style.color="orange"
  document.getElementById("myClock").style.fontSize="34px"
  document.getElementById("myClock").innerHTML = datetime;
}

document.body.onload = function () {
  var myName = prompt("Enter Your Name");
  document.getElementById("myName").innerHTML = myName;
  showTime();
};
