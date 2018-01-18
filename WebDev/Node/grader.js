const average = ((scores) => {
  let total = 0;
  scores.map(score => {
    total += score;
  })
  return Math.round(total/scores.length);
});

let scores = [1,2,3,4];
console.log(average(scores));
