const starApp = {};


// prompt to ask for name when they visit the page
// store than name in a variable
// let userName = prompt("Hi! Whats your name?");

// $('.userName').text(userName);


// create a counter for the stars
let counter = 0;

$(".starButton").one('click', function() {

    // increase the counter value by 1
    counter = counter + 1;
    $('span.counter').text(counter);
    //fade out when clicked
    $(this).fadeOut();
    // checkGoal();
})











// Document Ready
$(document).ready(function() {
    // starApp.init();
});