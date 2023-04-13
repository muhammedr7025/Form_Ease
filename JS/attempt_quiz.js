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
  });
});
