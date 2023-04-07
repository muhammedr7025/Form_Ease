  let no_of_qn = document.getElementById('no_of_qn');
  let most_corrected_answer = document.getElementById('most_corrected_answer');
  let most_wrong_answer=document.getElementById('most_wrong_answer');
  let total_no_attendes=document.getElementById('total_no_attendes');
  let qn_container = document.getElementById("qn_container");
  let result = []
  let highest = 0
  let lowest=0
  let qnnohighest=0
  let qnnolowest=0
  fetch(`https://opensheet.elk.sh/1xa5bCHfBd3wcRsMSWNGC-WT0FsOntJeB2faru0R1GcE/1`)
    .then(response => {
      response.json().then(data => {
        data.forEach(element => {
          let item = {
            numb: element.qno,
            question: element.question,
            answer: element.answer,
            options: [
              element.a,
              element.b,
              element.c,
              element.d,
            ],
            no_of_correct: element.no_of_correct,
            no_of_wrong: element.no_of_wrong
          }
          result.push(item)
        });
        no_of_qn.innerText = result.length.toString();
        for(let i=0;i<result.length;i++){
          if(highest<parseInt(result[i].no_of_correct)){
            highest=parseInt(result[i].no_of_correct)
            qnnohighest=result[i].numb
          }
        }
        lowest=result[0].no_of_wrong
        for(let j=0;j<result.length;j++){
          if(lowest<parseInt(result[j].no_of_wrong)){
            lowest=parseInt(result[j].no_of_wrong)
            qnnolowest=result[j].numb
          }
        }
        most_wrong_answer.innerHTML=qnnolowest
        most_corrected_answer.innerHTML=qnnohighest
        total_no_attendes.innerHTML=parseInt(result[0].no_of_correct)+parseInt(result[0].no_of_wrong)
        for (let i = 0; i <result.length; i++) {
            const div = document.createElement("div");
            div.classList.add("question");
            div.innerHTML = `
            <h4>${result[i].numb}. ${result[i].question}</h4>
            <h4>ans. ${getAnswer(result[i].answer,i)}</h4>
            <div class="bar-container">
              <div class="bar">
                <div class="green-bar" style="width:${getPercentage("correct",i)}%"></div>
                <p>${getPercentage("correct",i)}%</p>
              </div>
              <div class="bar">
                <div class="red-bar" style="width:${getPercentage("wrong",i)}%"></div>
                  <p>${getPercentage("wrong",i)}%</p>
                </div>
            </div>
            `;
            qn_container.appendChild(div);
        }
      });
    });
    function getAnswer(answer,i){
      let ans = ""
      if(answer=='a'||answer=='A'){
        ans=result[i].options[0]
      }else if(answer=='b'||answer=='B'){
         ans=result[i].options[1]
      }else if(answer=='c'||answer=='C'){
         ans=result[i].options[2]
      }else if(answer=='d'||answer=='D'){
         ans=result[i].options[3]
      }
      return ans
    }
    function getPercentage(option,i){
        let total=parseInt(result[i].no_of_wrong)+parseInt(result[i].no_of_correct)
        let percentage = 0
        if(option==="correct"){
            percentage=(parseInt(result[i].no_of_correct)*100)/total
        }else if(option==="wrong"){   
            percentage=(parseInt(result[i].no_of_wrong)*100)/total
        }
        return parseInt(percentage)
    }
   