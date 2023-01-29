
  var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    value: "function myScript(){return 100;}\n",
    mode: "text/javascript",
    theme: "monokai",
    lineNumbers: true,
    autoCloseBrackets: true,
    closeTags: true,
    lineWrapping: true,
  });

  var output = CodeMirror.fromTextArea(document.getElementById("result"), {
    theme: "monokai",
    lineNumbers: false,
    readOnly: true,
    lineWrapping: true,
    
  });

  var run = document.querySelector("#run-btn");
  var clear = document.querySelector("#clear-btn");

  // var output = "";
  // var log = function(msg){
  //   output += msg + "\n";
  // }; 



  // run.addEventListener("click", ()=>{
  //   output = "";
  //   var code = editor.getValue();
  //   try{
  //     // eval(code);
  //     eval(code);
  //   } catch(e){
  //     output = e.message;
  //   }
  //   document.getElementById("result").innerHTML = output;
  // })


  run.addEventListener("click", () => {
    const runCode = editor.getValue();
    if(editor.getValue() == "") return;
    try {
      output.replaceRange(
        `$ ` + eval(`${runCode}`) + "\n",
        CodeMirror.Pos(output.lastLine())
      );
    } catch (e) {
      output.replaceRange(`$ ` + e + "\n", CodeMirror.Pos(output.lastLine()));
      // output = e.message;

    }
  });
  clear.addEventListener("click", () => {
    output.setValue("");
  });


// submit(function(e){
//    var value = editor.getValue();
//    if(value. length == 0){
//      alert("Missing comment!");
//      } 
//     });
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
