var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
          elem.innerHTML = "Abrir"
          elem.href = 'https://mateus-santos.github.io/mateusdeveloper/'
        }
        else {
            width++;
            elem.style.width = width + "%";
        }
    }
  }
}