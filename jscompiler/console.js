var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    value: "function myScript(){return 100;}\n",
    mode: "text/javascript",
    theme: "monokai",
    lineNumbers: true,
    autoCloseBrackets: true,
    closeTags: true,
    lineWrapping: true,
  });

  
  var run = document.querySelector("#run-btn");
  var clear = document.querySelector("#clear-btn");


   run.addEventListener("click", ()=>{
   var output
    var code = editor.getValue();
    var fn;
    try{
        fn = new Function(code);
        output.innerHTML = fn();
    } catch(e){
      output = e.message;
    }
    document.getElementById("result").innerHTML = output;
  })

//   var result;
//   try {
//     result = eval(editor.getValue());
//     document.getElementById("output").innerHTML = result;
//   } catch (error) {
//     document.getElementById("output").innerHTML = error;
//   }