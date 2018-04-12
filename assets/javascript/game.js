$(document).ready(function() {
    console.log('jabroni');

    var phillySkyline = $("#skyline");
    var paddysSign = $("#barSign");
    var dialogBox = $("#dialog-box");
    
    //link to all sounds as jQuery vars
    var creditsSound = document.createElement("audio");
    creditsSound.setAttribute("src", "assets/sounds/openerCloser.mp3");
    var music1 = document.createElement("audio");
    music1.setAttribute("src", "assets/sounds/captainsTable.mp3");
    var music2 = document.createElement("audio");
    music2.setAttribute("src", "assets/sounds/coconutShy.mp3");
    var music3 = document.createElement("audio");
    music3.setAttribute("src", "assets/sounds/glitteratiParty.mp3");
    var music4 = document.createElement("audio");
    music4.setAttribute("src", "assets/sounds/onYourBike.mp3");
    var music5 = document.createElement("audio");
    music5.setAttribute("src", "assets/sounds/takeThePlunge.mp3");
    var attackSound1 = document.createElement("audio");
    attackSound1.setAttribute("src", "assets/sounds/punch.mp3");
    var attackSound2 = document.createElement("audio");
    attackSound2.setAttribute("src", "assets/sounds/slap.mp3");
    var attackSound3 = document.createElement("audio");
    attackSound3.setAttribute("src", "assets/sounds/smash.mp3");
    var itemSound = document.createElement("audio");
    itemSound.setAttribute("src", "assets/sounds/burp.mp3");
    var defeatSound = document.createElement("audio");
    defeatSound.setAttribute("src", "assets/sounds/wilhelm.mp3");

    var musicArray = [music1, music2, music3, music4, music5];
    //beef is inquired about
    $("#dialog-box").append("<h1>You got beef, Jabroni?</h1>");
   // $("#dialog-box").append("<p>The last thing we need right now is for all of us to fight each other.</p>");
    $("#dialog-box").append(
        "<div class='col-md-5'></div><div class='col-md-2'><button class='btn' id='beefBtn'>No, I have no beef.</button></div>");    
    $("#beefBtn").on("click", function(){
        console.log("jabronis");
        $("#dialog-box").empty();
        $("#dialog-box").append("<h1>OK good.</h1>");
        $("#dialog-box").append("<p>The last thing we need right now is for all of us to fight each other.</p>");
        $("#dialog-box").append(
            "<div class='col-md-5'></div><div class='col-md-2'><button class='btn' id='initBtn'>Whew.</button></div>");
        });    
    $("body").on("click", "#initBtn", function(){
        console.log("jaaaaabroni");
        $("#dialog-box").css({"opacity": "0"});
        $("#dialog-box").empty();
        $("#foe-box").append("<img id='titleCard' src='assets/images/titleCard.jpg'>");
        creditsSound.play();
        phillySkyline.animate({opacity: "1"}, 5000);
        paddysSign.animate({opacity: "1"}, 1000);
        
        $("#dialog-box").append("<div class='col-md-5'></div><div class='col-md-2'><button class='btn' id='startBtn'>LET'S RUMBLE.</button></div>");
        
        dialogBox.animate({opacity: "1"}, 5000);
    });
    $("body").on("click", "#startBtn", function(){
        $("#foe-box").empty();
        $("#dialog-box").empty();
        $("#foe-box").append("<h1>Choose your character!</h1>");
        creditsSound.pause();
        musicArray[Math.floor(Math.random()*5)].play();
        //$("#dialog-box").append("<div class='col-md-1'></div>");
        var characterBox = $("#dialog-box");
        for (i=0; i<gang.length; i++) {
            
            //$("#dialog-box").append("<div class='col-md-2' id='character" + i + "'</div>");
            var jabroniIcon = $("<img>");
            jabroniIcon.addClass("jabroni-image");
            jabroniIcon.attr("src", "assets/images/"+avatars[i][0]);
            jabroniIcon.attr("id", "jabroniIcon"+i);
            jabroniIcon.attr("characterSelector", i);
            characterBox.append(jabroniIcon);
        }

        characterBox.on("click", ".jabroni-image", function() {
            var characterSelector = ($(this).attr("characterSelector"));
            characterSelector = parseInt(characterSelector);
            console.log(characterSelector);
            var playerIcon = $("#jabroniIcon"+characterSelector);
            $("#foe-box").empty();
            $("#foe-box").append("<h1>You chose " + gang[characterSelector] + ".");
        });
        
    });    
        
    


//character names
var gang = ["The Aluminum Monster", "King of the Rats", "The Enforcer", "The Golden God", "The Trash Man"];

//character moves weak/strong
var moves = [
    ["Talon Strike", "Dry Heave"],
    ["Charlie Work", "Bird Law"],
    ["Sweet Jiu Jitsu", "Ocular Patdown"],
    ["The Implication", "D.E.N.N.I.S. System"],
    ["Business Acumen", "Gun"]
];

//character avatars [full hp, low hp]
var avatars = [
    ["dee1.jpg", "dee2.jpg"],
    ["charlie1.jpg", "charlie2.jpg"],
    ["mac1.jpg", "mac2.jpg"],
    ["dennis1.jpg", "dennis2.jpg"],
    ["frank1.jpg", "frank2.jpg"]
];

//character bios
var bios = [
    "<p>Desperate.</p><p>Birdlike.</p><p>Low self-esteem.</p.",
    "<p>Wild card.</p><p>Catfood-fueled.</p>",
    "<p>Catlike.</p><p>Closeted.</p><p>Sheriff of Paddy's.</p>",
    "<p>Lithe.</p><p>Erotic.</p><p>A five-star man.</p>",
    "<p>Old.</p><p>Rich</p><p>Donkey-brained.</p>"
];


//initial HP/XP for player, constant for opponent
var gangHP = [100, 125, 200, 180, 90];
var gangXP = [25, 40, 50, 50, 80];

//array of initial attack power for player-selected characters [weak, strong]
var gangAttack = [
    [5,10],
    [8, 20],
    [10, 20],
    [8, 15],
    [15, 25]
];

//array of computer attack powers
var gangCounterattack = [
    [10, 20],
    [10, 20],
    [15, 30],
    [15, 30],
    [20, 40]
];

//1 in 4 strong attack miss multiplier
var wildCard = [0, 1, 1, 1];





//individualized character items and their respective icons
var item = ["Cosmo", "Pocket Spaghetti", "Fight Milk", "Car Cereal", "Wine in a Can"];
var itemPics = ["cosmo.png","spaghetti.png", "milk.png", "cereal.png", "can.png"];


var strength = 0;
//user-chosen character object
var character = {
    name: gang[characterSelector],
    weakMove: moves[characterSelector][0],
    strongMove: moves[characterSelector][1],
    maxHP : gangHP[characterSelector],
    xp: gangXP[characterSelector],
    powerUp: item[characterSelector],
    attackPower: gangAttack[characterSelector][strength],
    damage: 0,
    counterAttackPower: gangCounterattack[characterSelector][strength],
    //attack fires, returns damage to be applied to foe hp
    attack: function() {
        if (strength === 0) {
            this.damage = Math.floor((Math.random() * 10) + this.attackPower) * wildCard[(Math.floor(Math.random()*4))];
        }
        else {
            this.damage = Math.floor((Math.random() * 10) + this.attackPower);
        }

    },
    //on victory, enemy's xp is added to character's attack power, push a 1 to wildCard to lower chance of strong attack miss
    victory: function() {
        this.attackPower = foe.xp + this.attackPower;
        wildCard.push(1);
    }
    
    };

    var foe = {
        name: gang[foeSelector],
        weakMove: moves[foeSelector][0],
        strongMove: moves[foeSelector][1],
        maxHP : gangHP[foeSelector],
        xp: gangXP[foeSelector],
        powerUp: item[foeSelector],
        attackPower: gangAttack[foeSelector][strength],
        damage: 0,
        counterAttackPower: gangCounterattack[foeSelector][strength],
        attack: function() {
            this.damage = Math.floor((Math.random() * 10) + this.attackPower);
        }
    };
    //strength = 1;

character.attack();
character.victory();

//console.log(character.damage);
//console.log(character);
//console.log(foe);
//console.log(wildCard);
});
//weakAttack = (Math.floor((Math.random() * 10) + this.attackPower));