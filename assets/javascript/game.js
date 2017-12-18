// Random # will be assigned a random # between 19 and 120 for each game
// Crystals (4) will be assigned a random # between 1 and 12- do these have to be individual variables or is there a way to randomly generate using 1 function??
// counter for wins and losses- this will be an if else i think
// total score will add crystal #'s up
// once user's total hits random #, add 1 point to the score
// or if user's score goes above random #, add 1 to losses and reset

//variables
var randomPick = Math.floor(Math.random() * 102) + 19; 
    console.log(randomPick);  
var wins = 0;
var losses = 0;
var currentScore = 0;
var crystalImages = ["<img src=assets/images/bluecrystal.png>", "<img src=assets/images/greencrystal.png>", "<img src=assets/images/redcrystal.png>", "<img src=assets/images/yellowcrystal.png>"];

//start of game- randomPick displays on screen
$("#random-pick-screen").html(randomPick);

//current score diplays on screen
$("#current-score").html(currentScore);

//wins displays on screen
$("#wins-screen").html(wins);

//losses displays on screen
$("#losses-screen").html(losses);

//wins and losses counter displays on screen
function checkWin(){
	if(currentScore == randomPick){
		$("#wins-screen").html(wins += 1);
		$("#current-score").html(currentScore = 0);
		randomPick = Math.floor(Math.random() * 102) + 19; 
		$("#random-pick-screen").html(randomPick);

		crystalRandom0 = Math.floor(Math.random() * 12) + 1;
		crystalRandom1 = Math.floor(Math.random() * 12) + 1;
		crystalRandom2 = Math.floor(Math.random() * 12) + 1;
		crystalRandom3 = Math.floor(Math.random() * 12) + 1;

	} else if (currentScore > randomPick){
		$("#losses-screen").html(losses += 1);
		$("#current-score").html(currentScore = 0);
		randomPick = Math.floor(Math.random() * 102) + 19; 
		$("#random-pick-screen").html(randomPick);

		crystalRandom0 = Math.floor(Math.random() * 12) + 1;
		crystalRandom1 = Math.floor(Math.random() * 12) + 1;
		crystalRandom2 = Math.floor(Math.random() * 12) + 1;
		crystalRandom3 = Math.floor(Math.random() * 12) + 1;
	}
}

// $("#crystalRow").html(crystalImages);
 
$("#current-score").html(currentScore);

var crystalRandom0 = Math.floor(Math.random() * 12) + 1;
var crystalRandom1 = Math.floor(Math.random() * 12) + 1;
var crystalRandom2 = Math.floor(Math.random() * 12) + 1;
var crystalRandom3 = Math.floor(Math.random() * 12) + 1;

//on click events and adding the numbers to the current score
//on-click events for gem0
$("#gem0").click(function(){
	var gem0 = currentScore += crystalRandom0;
	// console.log(currentScore);
	$("#current-score").html(currentScore);
	checkWin();
});

//on-click events for gem1
$("#gem1").click(function(){
	var gem1 = currentScore += crystalRandom1;
	// console.log(gem1);
	$("#current-score").html(currentScore);
	checkWin();
});

//on-click events for gem2
$("#gem2").click(function(){
	var gem2 = currentScore += crystalRandom2;
	// console.log(gem2);
	$("#current-score").html(currentScore);
	checkWin();
});

//on-click events for gem3
$("#gem3").click(function(){
	var gem3 = currentScore += crystalRandom3;
	// console.log(gem3);
	$("#current-score").html(currentScore);
	checkWin();
});