
const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const result = document.getElementById("result");

function run() {
  localStorage.setItem("htmlCode", htmlCode.value);
  localStorage.setItem("cssCode", cssCode.value);
  localStorage.setItem("jsCode", jsCode.value);
  result.contentDocument.body.innerHTML = `<style> ${localStorage.cssCode} </style>` + localStorage.htmlCode;
  result.contentWindow.eval(localStorage.jsCode);
}

htmlCode.onkeyup = () => run();
cssCode.onkeyup = () => run();
jsCode.onkeyup = () => run();

htmlCode.value = localStorage.htmlCode;
cssCode.value = localStorage.cssCode;
jsCode.value = localStorage.jsCode;
