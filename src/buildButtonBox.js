let content = document.getElementById("content");

let buttonBox = document.createElement("div");
buttonBox.id = "buttonBox";
let buttonBoxTop = document.createElement("div");
buttonBoxTop.id = "buttonBoxTop";
let buttonBoxBottom = document.createElement("div");
buttonBoxBottom.id = "buttonBoxBottom";

function buildButtonBox() {
  buttonBox.appendChild(buttonBoxTop);
  buttonBox.appendChild(buttonBoxBottom);
  content.appendChild(buttonBox);
}
export { buildButtonBox };
