const questionElement = document.getElementById("qn-section");
const optionElement = document.getElementById("option-container");
const nextBtn = document.getElementById("qn-btn");
const balanceQn = document.getElementById("balance-qn");
const qnOption1 = document.getElementById("qn-option1");
const qnOption2 = document.getElementById("qn-option2");
const qnOption3 = document.getElementById("qn-option3");
const qnOption4 = document.getElementById("qn-option4");
let currentQnIndex = 0;
result = [];
fetch(
  `https://opensheet.elk.sh/1xa5bCHfBd3wcRsMSWNGC-WT0FsOntJeB2faru0R1GcE/1`
).then((response) => {
  response.json().then((data) => {
    data.forEach((element) => {
      let item = {
        numb: element.qno,
        question: element.question,
        answer: element.answer,
        options: [element.a, element.b, element.c, element.d],
        no_of_correct: element.no_of_correct,
        no_of_wrong: element.no_of_wrong,
      };
      result.push(item);
    });
    startQuiz();
  });
});
function startQuiz() {
  currentQnIndex = 0;
  nextBtn.innerHTML = "Next";
  showQn();
}
function showQn() {
  let currentQn = result[currentQnIndex];
  questionElement.innerHTML = currentQn.numb + ". " + currentQn.question;
  qnOption1.innerHTML = currentQn.options[0];
  qnOption2.innerHTML = currentQn.options[1];
  qnOption3.innerHTML = currentQn.options[2];
  qnOption4.innerHTML = currentQn.options[3];
  balanceQn.innerHTML = currentQnIndex + 1 + " of " + result.length;
}
