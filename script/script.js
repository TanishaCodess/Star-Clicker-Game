const starApp = {};


// prompt to ask for name when they visit the page
// store than name in a variable
//user that name in the text
let userName = prompt("Hi! Whats your name?");

const checkName = function() {
    if (userName === "") {
        let userName = "friend";
    } else {
        $('.userName').text(userName);
    }
}
checkName();





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
    lootBox.push(`<img src="Assets/icons/cookieCat.png" alt="Cookie Cat, an icecream sandwich that looks like a cat"></img> <p>Remember, the key to Steven's Powers wasnt an icecream cake. It was the friends he made along the way.</p>`);
})

$(".pearlPointButton").one('click', function() {
    $(this).fadeOut();
    $(".inventoryContainerTwo").append(`<img src="Assets/icons/pearlPoint.png" alt="Pearl point sticker" width="50" height="50">`);
    lootBox.push(`<img src="Assets/icons/pearlPoint.png" alt="Pearl point sticker"> <p>Pearl thinks you did such a great job so she gave you a Pearl Point!</p>`);
})

$(".sheildButton").one('click', function() {
    $(this).fadeOut();
    $(".inventoryContainerThree").append(`<img src="Assets/icons/stevenShield.png" alt="Steven's shield" width="50" height="50">`);
    lootBox.push(`<img src="Assets/icons/stevenShield.png" alt="Steven's shield"> <p>Steven's powers manifested into a shield so that he could protect the ones he cares about. We should all be more like Steven.</p>`);
})

//Loot Box
$(".lootBoxButton").one('click', function() {
    $(this).fadeOut();
    $(".lootSteven").hide();
    const randomLoot = lootBox[Math.floor(Math.random() * lootBox.length)];
    $(".lootDisplay").append(randomLoot);
    $(".lootScreenButton").show();

})






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
    $(".inventory").hide();
    $("body,html").animate({
        scrollTop: $("#credits").offset().top
    }, 800);
})











// Document Ready
$(document).ready(function() {
    // starApp.init();
    $(".levelOneButton").hide();
    $(".levelTwoButton").hide();
    $(".levelThreeButton").hide();
    $(".lootScreenButton").hide();
    $(".levelTwo").hide();
    $(".levelThree").hide();
    $(".lootScreen").hide();
    $(".credits").hide();
});