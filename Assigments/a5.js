var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["yellow", "green", "blue", "purple", "red", "orange"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);