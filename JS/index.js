const popupLink = document.getElementById("popup-link-create");
const popup = document.getElementById("popup-create");
const closeBtn = document.getElementById("close-btn-create");
const popupLinkattempt = document.getElementById("popup-link-attempt");
const popupattempt = document.getElementById("popup-attempt");
const closeBtnattempt = document.getElementById("close-btn-attempt");
url = document.getElementById("url_input");
url_text = document.getElementById("link-input-attempt");

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
// url.addEventListener("click", function () {
//   console.log(url_text.value);

//   console.log(getCode());
// });

function generatelink() {
  let sheetlink = document.getElementById("link-input-create").value;
  let sheetName = document.getElementById("sheet-name").value;
  let id = sheetlink.split("/")[5];
  window.location.href = `/Form_Ease/create_quiz.html?hash=${id}&Other=${sheetName}&`;
}
function openQuiz() {
  window.location.href = `/Form_Ease/attempt_quiz.html?code=${url_text.value}`;
}
function getCode() {
  const urlParams = new URLSearchParams(window.location.search);
  const myId = urlParams.get("code");
  console.log(myId);
  return myId;
}
