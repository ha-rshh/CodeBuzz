window.onload = () => {
  const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    value: "function myScript(){return 100;}\n",
    mode: "text/javascript",
    theme: "monokai",
    lineNumbers: true,
    autoCloseBrackets: true,
    closeTags: true,
    lineWrapping: true,
  });

  const output = CodeMirror.fromTextArea(document.getElementById("result"), {
    theme: "monokai",
    lineNumbers: false,
    readOnly: true,
    
  });

  const run = document.querySelector("#run-btn");
  const clear = document.querySelector("#clear-btn");

  run.addEventListener("click", () => {
    const runCode = editor.getValue();
    try {
      output.replaceRange(
        `$ ` + eval(`${runCode}`) + "\n",
        CodeMirror.Pos(output.lastLine())
      );
    } catch (e) {
      output.replaceRange(`$ ` + e + "\n", CodeMirror.Pos(output.lastLine()));
    }
  });
  clear.addEventListener("click", () => {
    output.setValue("");
  });
};

submit(function(e){
   var value = editor.getValue();
   if(value. length == 0){
     alert("Missing comment!");
     } 
    });
// run.addEventListener("click", () => {
//   const runCode = editor.getValue();
// clear.addEventListener("click", () => {
//    output.setValue("")
//    console.log(output.value)
//   }
// try {
//
// } catch (e) {
//
//   });

// run.addEventListener("click", () => {
//   const runCode = editor.getValue();
//   output.setValue(eval(`${runCode}`));
//   //console.log(ans())
//   // outputScreen.innerText += ans;
// });

// clear.addEventListener("click", () => {
//   outputScreen.setValue("");
// });

// console.oldLog = console.log;
// console.log = function (value) {
//   console.oldLog(value);
//   return value;
// };
