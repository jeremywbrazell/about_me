'use strict'

function askName() {
    let userName = prompt('What is your name?');
    alert ('Nice to meet you, ' + ' ' + userName + '!');
}

askName();

let finalScore = 0

function photoNerd() {
    let title = prompt('Do I like photography?');
    
    if (title === 'yes' || title === 'Yes' || title === 'yep' || title === 'Yep' || title === 'y' || title === 'Y') {
        alert ('I do!');
        finalScore += 1
    } else {
        alert ('I do, actually!');
    } 
}

photoNerd();

 function liveWhere() {
     let title = prompt('Do I live in Seattle?');

     if (title === 'yes' || title === 'Yes' || title === 'yep' || title === 'Yep' || title === 'y' || title === 'Y') {
        alert ('I do!');
        finalScore += 1
    } else {
        alert ('I do, actually!');
    }   
 }

 liveWhere();

 function likeRain() {
     let title = prompt('Do I like the rain?');

     if (title === 'yes' || title === 'Yes' || title === 'yep' || title === 'Yep' || title === 'y' || title === 'Y') {
        alert ('I do!');
        finalScore += 1
    } else {
        alert ('I do, actually!');
    }  
 }

 likeRain();

 function likeCooking() {
    let title = prompt('Do I like to cook?');

    if (title === 'yes' || title === 'Yes' || title === 'yep' || title === 'Yep' || title === 'y' || title === 'Y') {
       alert ('I do!');
       finalScore += 1
   } else {
       alert ('I do, actually!');
   }  
}

likeCooking();

function likeRain() {
    let title = prompt('Do I like the rain?');

    if (title === 'yes' || title === 'Yes' || title === 'yep' || title === 'Yep' || title === 'y' || title === 'Y') {
       alert ('I do!');
       finalScore += 1
   } else {
       alert ('I do, actually!');
   }  
}

likeRain();

function randomNumber() {
    let correctAnswer = Math.floor(Math.random() * 100) + 1;
    let guessAmount = 4
    let answeredCorrectly = false
    for(let i = 0; i < guessAmount; i++) {
        let userAnswer = parseInt (prompt('Guess a number between 1 and 100.'));
        if (userAnswer===correctAnswer){
            answeredCorrectly = true
            alert('Great guess!  You were right!');
            finalScore += 1
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
}

randomNumber();

function seattleDrink() {
    let goodCoffee = ['Vivaci', 'Gevalia', 'Broadcast', 'Milstead', 'Ballard'];
    let guess = 6;
    
    for(let i = 0; i < goodCoffee.length; i++){
        let coffeeChoose = prompt('Can you guess some of my favorite coffee brands?')
        if (coffeeChoose === goodCoffee[0] || coffeeChoose === goodCoffee[1] ||coffeeChoose === goodCoffee[2] || coffeeChoose === goodCoffee[3] || coffeeChoose === goodCoffee[4] ||coffeeChoose === goodCoffee[5]){
            console.log(coffeeChoose);
            alert('Good guess!')
            finalScore += 1
            break;
        }
        else {
            alert('Nope, but good guess!')
        }
    }
}

seattleDrink();

alert (finalScore + '/7 is what you guessed right!')


