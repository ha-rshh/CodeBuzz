const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "text/javascript",
  // theme: "material-darker",
  lineNumbers: true,
  autoCloseBrackets: true,
  closeTags: true,
});
console.oldLog = console.log;
console.log = function(value) {
  // console.oldLog(value);
  return value;
}
const outputScreen = CodeMirror.fromTextArea(document.getElementById("result"), {lineNumbers: false})
const width = window.innerWidth;
editor.setSize(0.45 * width, "550");
// console.log("hello");

const input = document.getElementById("user-input");
const result = document.getElementById("result");

const [run, clear] = document.querySelectorAll("button");

run.addEventListener("click", () => {
  const codeRun = editor.getValue();
  // result.innerHTML = codeRun;
  //outputScreen.setValue(eval(`${codeRun}`));
  outputScreen.setValue(eval(`${codeRun}`));

});
// clear.addEventListener("click", (_) => input.setValue(""));
//if(codeRun) {
 // input.innerHTML = (eval(`${codeRun}`));
//}