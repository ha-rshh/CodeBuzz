const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "text/javascript",
  theme: "material-darker",
  lineNumbers: true,
  autoCloseBrackets: true,
});

const width = window.innerWidth;
editor.setSize(0.45 * width, "550");
console.log("hello");

const input = document.getElementById("user-input");

const [run, clear] = document.querySelectorAll("button");

run.addEventListener("click", () => {
    const codeRun = editor.getValue();
    input.innerHTML = (eval(`${codeRun}`));
});
// clear.addEventListener("click", (_) => input.setValue(""));
