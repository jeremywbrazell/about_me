'use strict'

let userName = prompt('What is your name?');
alert ('Nice to meet you,' + ' ' + userName + '!');

let eatPizza = prompt('Do I like pizza?');
let lowereatPizza = eatPizza.toLowerCase();

switch(lowereatPizza = eatPizza) {
    case 'yes':
        // console.log ('Of course I do!');
        alert ('Of course I do!');
        break;
    case 'yep':
        // console.log ('You are correct!');
        alert ('I do!');
        break;
    case 'y':
        // console.log ('Of course I do!');
        alert ('Of course I do!');
        break;
    case 'true':
        // console.log ('Of course I do!');
        alert ('Of course I do!');
        break;
    case 't':
        // console.log ('Of course I do!');
        alert ('Of course I do!');
        break;
    default:
        // console.log ('You are so wrong!')
        alert ('You are so wrong!');
}

let photoNerd = prompt('Do I like photography?');
let upperphotoNerd = photoNerd.toUpperCase();

switch(upperphotoNerd = photoNerd) {
    case 'yes':
        // console.log ('I do!');
        alert ('I do!');
        break;
    case 'yep':
        // console.log ('You are correct!');
        alert ('I do!');
        break;
    case 'y':
        // console.log ('I do!');
        alert ('I do!');
        break;
    case 'false':
        // console.log ('I do!');
        alert ('I do, actually!');
        break;
    case 'f':
        // console.log ('I do!');
        alert ('I do, actually!');
        break;
    default:
        // console.log ('I do, actually!')
        alert ('I do, actually!');
}

let liveWhere = prompt('Do I like in Seattle?');
let upperliveWhere = liveWhere.toUpperCase();

switch(upperliveWhere = liveWhere) {
    case 'yes':
        // console.log ('You are correct!');
        alert ('I do!');
        break;
    case 'yep':
        // console.log ('You are correct!');
        alert ('I do!');
        break;
    case 'y':
        // console.log ('You are correct!');
        alert ('I do!');
        break;
    case 'true':
        // console.log ('You are correct!');
        alert ('I do!');
        break;
    case 't':
        // console.log ('You are correct!');
        alert ('I do!');
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
        break;
    case 'yep':
        // console.log ('You are correct!');
        alert ('I do!');
        break;
    case 'y':
        // console.log ('You are correct!');
        alert ('I do!');
        break;
    case 'true':
        // console.log ('You are correct!');
        alert ('I do!');
        break;
    case 't':
        // console.log ('You are correct!');
        alert ('I do!');
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
        break;
    case 'yep':
        // console.log ('I sure do!');
        alert ('I do!');
        break;
    case 'y':
        // console.log ('I sure do!');
        alert ('I do!');
        break;
    case 'true':
        // console.log ('I sure do!');
        alert ('I do!');
        break;
    case 't':
        // console.log ('I sure do!');
        alert ('I do!');
        break;
    default:
        // console.log ('I do, actually!')
        alert ('I do, actually!');
}

alert('Thanks for playing the guessing game,' + ' ' + userName)();

