const starApp = {};


// prompt to ask for name when they visit the page
// store than name in a variable
let userName = prompt("Hi! Whats your name?");

// use that name in text throughout the game
$('.userName').text(userName);


// create a counter for the stars
let counter = 0;

//check star counter 
// reveal buttons as stars are found
const checkGoal = function() {
    if (counter === 3) {
        $(".levelOneButton").show();
    }
    if (counter === 6) {
        $(".levelTwoButton").show();
    }
    if (counter === 9) {
        $(".levelThreeButton").show();
    }
}

//stars
$(".starButton").one('click', function() {

    // increase the counter value by 1
    counter = counter + 1;
    $('span.counter').text(counter);
    //fade out when clicked
    $(this).fadeOut();
    checkGoal();
})

//Inventory Items
const lootBox = [];

$(".cookieCatButton").one('click', function() {
    $(this).fadeOut();
    $(".inventoryContainerOne").append(`<img src="Assets/icons/cookieCat.png" alt="Cookie Cat, an icecream sandwich that looks like a cat" width="50" height="50">`);
    lootBox.push(`<img src="Assets/icons/cookieCat.png" alt="Cookie Cat, an icecream sandwich that looks like a cat" width="100" height="100"></img>`);
})

$(".pearlPointButton").one('click', function() {
    $(this).fadeOut();
    $(".inventoryContainerTwo").append(`<img src="Assets/icons/pearlPoint.png" alt="Pearl point sticker" width="50" height="50">`);
    lootBox.push(`<img src="Assets/icons/pearlPoint.png" alt="Pearl point sticker" width="100" height="100">`);
})

$(".sheildButton").one('click', function() {
    $(this).fadeOut();
    $(".inventoryContainerThree").append(`<img src="Assets/icons/stevenShield.png" alt="Steven's shield" width="50" height="50">`);
    lootBox.push(`<img src="Assets/icons/stevenShield.png" alt="Steven's shield" width="100" height="100">`);
})

//Loot Box
$(".lootBoxButton").one('click', function() {
    $(this).fadeOut();
    const randomLoot = lootBox[Math.floor(Math.random() * lootBox.length)];
    $(".lootDisplay").append(randomLoot);
})



function getLoot() {
    lootBox[Math.floor(Math.random() * lootBox.length)];
    console.log(getLoot);
}
getLoot();



//level counter in top left of screen
let lvlCounter = 1;

//on click, unhide next level and scroll to it
$(".levelOneButton").on('click', function() {

    $(".levelTwo").show();
    //increase level counter so user can see updated level title
    lvlCounter++;
    $('span.lvlCounter').text(lvlCounter);
    $("body,html").animate({
        scrollTop: $("#levelTwo").offset().top
    }, 800);
})

$(".levelTwoButton").on('click', function() {
    $(".levelThree").show();
    lvlCounter++;
    $('span.lvlCounter').text(lvlCounter);
    $("body,html").animate({
        scrollTop: $("#levelThree").offset().top
    }, 800);
})

$(".levelThreeButton").on('click', function() {
    $(".lootScreen").show();
    $(".lvlTitle").hide();
    $("body,html").animate({
        scrollTop: $("#lootScreen").offset().top
    }, 800);
})

$(".lootScreenButton").on('click', function() {
    $(".credits").show();
    $(".starCounter").hide();
    $("body,html").animate({
        scrollTop: $("#credits").offset().top
    }, 800);
})











// Document Ready
$(document).ready(function() {
    // starApp.init();
    // $(".levelOneButton").hide();
    // $(".levelTwoButton").hide();
    // $(".levelThreeButton").hide();
    // $(".lootScreenButton").hide();
    // $(".levelTwo").hide();
    // $(".levelThree").hide();
    // $(".lootScreen").hide();
    // $(".credits").hide();
});