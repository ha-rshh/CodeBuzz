function preview() {
  let content = "";
  content +=
    "<style>" + document.querySelector(".cssEditor").innerText + "</style>";
  content +=
    "<script>" + document.querySelector(".jsEditor").innerText + "</script>";
  content +=
    "<body>" + document.querySelector(".htmlEditor").innerText + "</body>";

    document.getElementById("preview").src = "data:text/html; charset=UTF-8, <html>" + content + "<\/html>";
}

