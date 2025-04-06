// TODO: Write a function 'totalScores' that takes an array of numbers
// TODO: Return the sum of all numbers in the array
const results = [70,72,95,81,37]
function totalScores(scores) {
  let total = 0
  for (let i = 0; i < scores.length; i++) {
    total += scores[i]
  } 
  return total
}
console.log(totalScores(results))
module.exports = { totalScores };
