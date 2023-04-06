document.addEventListener('DOMContentLoaded', () => {
    let no_of_qn = document.getElementById('no_of_qn');
    console.log("testing..");
    result = []
    qn=[]

    fetch(`https://opensheet.elk.sh/1xa5bCHfBd3wcRsMSWNGC-WT0FsOntJeB2faru0R1GcE/1`)
        .then(response => {
            response.json().then(data => {
                data.forEach(element => {
                   item = {
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

                // Find object with highest no_of_correct property
                const highest = result.reduce((acc, curr) => {
                  return curr.no_of_correct > acc.no_of_correct ? curr : acc;
                }, { no_of_correct: -Infinity });

                console.log(`Object with highest no_of_correct: ${JSON.stringify(highest)}`);
            });        
        });
});
