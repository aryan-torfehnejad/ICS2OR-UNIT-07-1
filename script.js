  document.getElementById('button').addEventListener
('click',randomizer)
let randomNumber = 4
let userGuess = 4
function randomizer() { 
  userGuess = document.getElementById('input').value
  userGuess =parseInt(userGuess)
// generate random number between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)
// compare user's guess with random number
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML =
      "You win a cookie!"
  }
}