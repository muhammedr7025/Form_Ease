const questionElement = document.getElementById("qn-section");
const optionElement = document.getElementById("option-container");
const nextBtn = document.getElementById("qn-btn");
const balanceQn = document.getElementById("balance-qn");
const qnOption1 = document.getElementById("qn-option1");
const qnOption2 = document.getElementById("qn-option2");
const qnOption3 = document.getElementById("qn-option3");
const qnOption4 = document.getElementById("qn-option4");
const answerButton = document.getElementById("answer-buttons");
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
  resetState();
  let currentQn = result[currentQnIndex];
  questionElement.innerHTML = currentQn.numb + ". " + currentQn.question;
  let crtAns = currentQn.answer;
  currentQn.options.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer;
    button.classList.add("qn-option");
    answerButton.appendChild(button);
    if (answer == getAnswer(currentQn)) {
      button.dataset.answer = true;
    }
    button.addEventListener("click", selectAnswer);
  });

  balanceQn.innerHTML = currentQnIndex + 1 + " of " + result.length;
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.answer === "true";
  console.log(isCorrect);
  if (isCorrect) {
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.answer === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}
function handleNextButton() {
  currentQnIndex++;
  if (currentQnIndex < result.length) {
    showQn();
  }
}
nextBtn.addEventListener("click", () => {
  console.log(result.length);
  if (currentQnIndex < result.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
function getAnswer(currentQn) {
  let ans = "";
  if (currentQn.answer == "a" || currentQn.answer == "A") {
    ans = currentQn.options[0];
  } else if (currentQn.answer == "b" || currentQn.answer == "B") {
    ans = currentQn.options[1];
  } else if (currentQn.answer == "c" || currentQn.answer == "C") {
    ans = currentQn.options[2];
  } else if (currentQn.answer == "d" || currentQn.answer == "D") {
    ans = currentQn.options[3];
  }
  return ans;
}
function submitAnswer() {}
