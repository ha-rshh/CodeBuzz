const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "text/javascript",
  theme: "monokai",
  lineNumbers: true,
  autoCloseBrackets: true,
  closeTags: true,
});


console.oldLog = console.log;
console.log = function (value) {
  console.oldLog(value);
  return value;
};


const outputScreen = document.getElementById("result")

const input = document.getElementById("user-input");
const result = document.getElementById("result");

const [run, clear] = document.querySelectorAll("button");

run.addEventListener("click", () => {
 const codeRun = editor.getValue();
 const ans =  eval(codeRun)
  //console.log(ans())
  outputScreen.innerText += ans;
});

clear.addEventListener("click", () => {
  outputScreen.setValue("");
});
