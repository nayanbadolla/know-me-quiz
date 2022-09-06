var read = require('readline-sync')

console.log('Welcome to DO YOU KNOW NAYAN?')
console.log()
console.log('Quiz of 5 questions; each 1 mark; no negative mark')
console.log()

//var user=prompt("Enter name:")
var user = read.question("Enter name:")
// console.log(user)

var q1 = {
  q: "Nayan's dream Sunday:",
  a: "reading"
}

var q2 = {
  q: "Nayan's DOB(dd-mm-yyyy):",
  a: "27-03-2002"
}

var q3 = {
  q: "Nayan's latest achievement:",
  a: "DE Shaw"
}

var q4 = {
  q: "Nayan's dearest dream:",
  a: "flying"
}

var q5 = {
  q: "Nayan's latest guilt:",
  a: "DJI camera"
}

var highScore = 1
var userScore = 0

console.log()
console.log("Let's begin!!!")
console.log("High Score:" + highScore)
console.log("\nKindly answer in one word\n")

var a1 = read.question(q1.q)
var a1Lower = a1.toLowerCase()
if (a1Lower === 'reading' || a1Lower === 'novel' || a1Lower === 'book' || a1Lower === 'books' || a1Lower === 'novels') {
  userScore++
}

var a2 = read.question(q2.q)
if (a2 === '27-03-2002' || a2 === '27/03/2002' || a1 === '27 March 2002') {
  userScore++
}

var a3 = read.question(q3.q)
var a3Lower = a3.toLowerCase()
if (a3Lower === 'de shaw' || a3Lower === 'd e shaw' || a3Lower === 'placement' || a3Lower === 'job') {
  userScore++
}

var a4 = read.question(q4.q)
var a4Lower = a4.toLowerCase()
if (a4Lower === 'aviation' || a3Lower === 'flying' || a3Lower === 'pilot' || a3Lower === 'planes') {
  userScore++
}

var a5 = read.question(q5.q)
var a5Lower = a5.toLowerCase()
if (a5Lower === 'dji' || a5Lower === 'camera' || a5Lower === 'dji camera' || a5Lower === 'dji osmo pocket 2' || a5Lower === 'pocket 2') {
  userScore++
}

console.log("\nEnd of Quiz")
console.log("\nFinal Score:" + userScore)

if (userScore > highScore) {
  console.log("\nHIGHSCORE...YAYY!!!")
}

else if (userScore == 5) {
  console.log("MAXIMUM SCORE")
}

console.log("Thank you for participating.")