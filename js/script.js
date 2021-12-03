var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var loop = document.getElementById("loop");
icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "/images/pause.png";
  } else {
    mySong.pause();
    icon.src = "/images/play.png";
  }
};
// تحديد دالة myBtn بعد ما يقوم الشخص بالضغط على الزر سوف تعمل الدالة
document.getElementById("myBtn").onclick = function () {
  myFunction();
};

/* toggle between hide and show */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
loop.onclick = function () {
  mySong.loop = true;
  loop.src = "/images/loop-inf.png";
};
