function red() {
  colourRed = document.getElementById("text");
  colourRed.style.color = 'red';
  size();
}

function green() {
  colourGreen = document.getElementById("text");
  colourGreen.style.color = 'green';
  size();
}

function blue() {
  colourBlue = document.getElementById("text");
  colourBlue.style.color = 'blue';
  size();
}

function size() {
  var text = document.getElementById("text");
  var rozmiar = document.getElementById("rozmiar");
  var styl = document.getElementById("styl");
  text.style.fontSize = rozmiar.value + '%';
  text.style.fontStyle = styl.value;
}