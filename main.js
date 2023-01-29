
var htmlCode = CodeMirror.fromTextArea(document.getElementById("html-code"), {
   mode: "text/html",
   lineNumbers: true,
   theme: "monokai",
   autoCloseBrackets: true,
   autoCloseTags: true,
   htmlHint: true,
   htmlHintOptions: {
    'tag-pair': true
  }

});
var cssCode = CodeMirror.fromTextArea(document.getElementById("css-code"), {
   mode: "text/css",
   lineNumbers: true,
   theme: "monokai",
   autoCloseBrackets: true,

});
var jsCode = CodeMirror.fromTextArea(document.getElementById("js-code"), {
   mode: "text/javascript",
   lineNumbers: true,
   theme: "monokai",
   autoCloseBrackets: true,
   autoclosetags: true,

});

console.log(htmlCode);
// const result = document.getElementById("result");

function updatePreview() {
  const preview = document.getElementById("result").contentDocument;
  preview.open();
  preview.write(htmlCode.getValue() + "<style>" + cssCode.getValue() + "</style>" + "<scri" + "pt>" + jsCode.getValue() + " </scri" + "pt>");
  preview.close();
}

htmlCode.on("change", updatePreview);
cssCode.on("change", updatePreview);
jsCode.on("change", updatePreview);

// function run() {
//   localStorage.setItem("htmlCode", htmlCode.getValue());
//   localStorage.setItem("cssCode", cssCode.getValue());
//   localStorage.setItem("jsCode", jsCode.getValue());
//   result.contentDocument.body.innerHTML = `<style> ${localStorage.cssCode} </style>` + localStorage.htmlCode;
//   result.contentWindow.eval(localStorage.jsCode);
// }

// htmlCode.onkeyup = () => run();
// cssCode.onkeyup = () => run();
// jsCode.onkeyup = () => run();

// htmlCode.getValue() = localStorage.htmlCode;
// cssCode.getValue() = localStorage.cssCode;
// jsCode.getValue() = localStorage.jsCode;

// x navbar
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    overlay.classList.toggle('is-overlay-active');
})