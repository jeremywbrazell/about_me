'use strict'


let userName = prompt('What is your name?');
alert ('Nice to meet you,' + ' ' + userName + '!');

let finalScore = 0

let eatPizza = prompt('Do I like pizza?');
let lowereatPizza = eatPizza.toLowerCase();

switch(lowereatPizza = eatPizza) {
    case 'yes':
        // console.log ('pizza');
        alert ('Of course I do!');
        finalScore = finalScore + 1
        break;
    case 'yep':
        // console.log ('pizza');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'y':
        // console.log ('pizza');
        alert ('Of course I do!');
        finalScore = finalScore + 1
        break;
    case 'true':
        // console.log ('pizza');
        alert ('Of course I do!');
        finalScore = finalScore + 1
        break;
    case 't':
        // console.log ('pizza');
        alert ('Of course I do!');
        finalScore = finalScore + 1
        break;
    default:
        // console.log ('You are so wrong!')
        alert ('wrong!');
}

let photoNerd = prompt('Do I like photography?');
let upperphotoNerd = photoNerd.toUpperCase();

switch(upperphotoNerd = photoNerd) {
    case 'yes':
        // console.log ('I do!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'yep':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'y':
        // console.log ('I do!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'false':
        // console.log ('I do!');
        alert ('I do, actually!');
        finalScore = finalScore + 1
        break;
    case 'f':
        // console.log ('I do!');
        alert ('I do, actually!');
        finalScore = finalScore + 1
        break;
    default:
        // console.log ('I do, actually!')
        alert ('I do, actually!');
}

let liveWhere = prompt('Do I live in Seattle?');
let upperliveWhere = liveWhere.toUpperCase();

switch(upperliveWhere = liveWhere) {
    case 'yes':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'yep':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'y':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'true':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 't':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    default:
        // console.log ('I do, actually!')
        alert ('I do, actually!');
}

let likeRain = prompt('Do I like the rain?');
let lowerlikeRain = likeRain.toLowerCase();

switch(lowerlikeRain = likeRain) {
    case 'yes':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'yep':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'y':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'true':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 't':
        // console.log ('You are correct!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    default:
        // console.log ('I do, actually!')
        alert ('I do, actually!');
}

let likeCooking = prompt('Do I like to cook?');
let lowerlikeCooking = likeCooking.toLowerCase();

switch(lowerlikeCooking = likeCooking) {
    case 'yes':
        // console.log ('I sure do!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'yep':
        // console.log ('I sure do!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'y':
        // console.log ('I sure do!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 'true':
        // console.log ('I sure do!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    case 't':
        // console.log ('I sure do!');
        alert ('I do!');
        finalScore = finalScore + 1
        break;
    default:
        // console.log ('I do, actually!')
        alert ('I do, actually!');
}


let correctAnswer = Math.floor(Math.random() * 100) + 1;
let guessAmount = 4
console.log (correctAnswer);
let answeredCorrectly = false
for(let i = 0; i < guessAmount; i++) {
    let userAnswer = parseInt (prompt('Guess a number between 1 and 100.'));
    if (userAnswer===correctAnswer){
        answeredCorrectly = true
        alert('Great guess!  You were right!');
        finalScore = finalScore + 1
        break;
    } else if (userAnswer < correctAnswer){
        alert('Too low!  Guess again!');
    } else if (userAnswer > correctAnswer){
        alert('Too high! Guess again!');
    }
}
    if (answeredCorrectly === false){
    alert ('The correct answer was '  + correctAnswer)
    }


let goodCoffee = ['Vivaci', 'Gevalia', 'Broadcast', 'Milstead', 'Ballard'];
console. log('goodCoffee', goodCoffee)
let guess = 6;

for(let i = 0; i < goodCoffee.length; i++){
    let coffeeChoose = prompt('Can you guess some of my favorite coffee brands?')
    if (coffeeChoose === goodCoffee[0] || coffeeChoose === goodCoffee[1] ||coffeeChoose === goodCoffee[2] || coffeeChoose === goodCoffee[3] || coffeeChoose === goodCoffee[4] ||coffeeChoose === goodCoffee[5]){
        console.log(coffeeChoose);
        alert('Good guess!')
        finalScore = finalScore + 1
        break;
    }
    else {
        alert('Nope, but good guess!')
    }
}


alert (finalScore + '/7 is what you guessed right!')


