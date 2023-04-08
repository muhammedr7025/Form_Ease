const popupLink = document.getElementById("popup-link-create");
const popup = document.getElementById("popup-create");
const closeBtn = document.getElementById("close-btn-create");
const popupLinkattempt = document.getElementById("popup-link-attempt");
const popupattempt = document.getElementById("popup-attempt");
const closeBtnattempt = document.getElementById("close-btn-attempt");
url = document.getElementById("url_input");
url_text = document.getElementById("link-input-attempt");
let sheetlink =
  "https://docs.google.com/spreadsheets/d/1xa5bCHfBd3wcRsMSWNGC-WT0FsOntJeB2faru0R1GcE/edit#gid=0";
function openPopupcreate() {
  popup.style.display = "block";
}
function closePopupcreate() {
  popup.style.display = "none";
}
closeBtn.addEventListener("click", closePopupcreate);
window.addEventListener("click", function (event) {
  if (event.target === popup) {
    closePopupcreate();
  }
});
popupLink.addEventListener("click", function (event) {
  event.preventDefault(); // prevent the default link behavior
  openPopupcreate();
});
function openPopupattempt() {
  popupattempt.style.display = "block";
}
function closePopupattempt() {
  popupattempt.style.display = "none";
}
closeBtnattempt.addEventListener("click", closePopupattempt);
window.addEventListener("click", function (event) {
  if (event.target === popup) {
    closePopupattempt();
  }
});
popupLinkattempt.addEventListener("click", function (event) {
  event.preventDefault(); // prevent the default link behavior
  openPopupattempt();
});
url.addEventListener("click", function () {
  console.log(url_text.value);
  window.open(`/attempt_quiz.html?code=${url_text.value}`);
  console.log(getCode());
});
function rot47(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 33 && charCode <= 126) {
      result += String.fromCharCode(33 + ((charCode + 14) % 94));
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}
function decryptRot47(str) {
  // To decrypt ROT47, we simply apply the ROT47 encryption again
  return rot47(str);
}
function generatelink() {
  code = rot47(sheetlink);
  console.log(code);
}
function getCode() {
  // Get the id parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const myId = urlParams.get("code");
  console.log(myId);
  return myId;
}
