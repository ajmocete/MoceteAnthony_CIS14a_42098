/*
	Blackjack
	By: Anthony Mocete
	Mocete, Anthony - BlackJack - 42098
*/


//View Object
var view = {
	displayMessage: function(msg, Elmnt){
		var message = document.getElementById(Elmnt);
		message.innerHTML = msg;
	},
	setButton: function(btn, sts){
		var buttonDisplay = document.getElementById(btn);
		buttonDisplay.setAttribute("id", sts);
	},
	setButtonText: function(btn, msg){
		var ButtonText = document.getElementById(btn);
		ButtonText.value = msg;
	},
	wipeElement: function(Elmnt) {
		var element = document.getElementById(Elmnt);
		element.innerHTML = "";
		element.setAttribute("id", null);
	},
	setCard: function(Elmnt, img){
		var card = document.getElementById(Elmnt);
		card.innerHTML = '<img src="'+img+'" alt="PlayerCard'+Elmnt+'">';
	}
}

//Game Object
var game = {
	startingBet: 0.00,
	roundsPlayed: 0,
	playerCards: [],
	dealersCards: [],
	betAmount: 0,
	cardDeck: ["c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "ca", "cj", "ck", "cq",
			   "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "da", "dj", "dk", "dq",
			   "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "ha", "hj", "hk", "hq",
			   "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "sa", "sj", "sk", "sq"],
	shuffleDeck: function(array) {
		/**
		* Randomize array element order in-place.
		* Using Durstenfeld shuffle algorithm.
		*/ 
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	},
	ChangeBetAmount: function() {
		var betArray = ["Bet5", "Bet10", "Bet20", "Bet50", "Bet100", "Bet500"];
		var betButton = document.getElementById("Bet5");
		console.log(betArray);
		console.log(betButton);
		
		if(this.betAmount > 5) {
			this.betAmount = 0;
		} else {
			this.betAmount++;
		}
		console.log(this.betAmount);
		console.log(betArray[this.betAmount])
		betButton.setAttribute("value", betArray[this.betAmount]);
	}
}

var controller = {
	
}

function init() {
	//Change Banner to the Default, Show welcome message
	//Set Play button message
	view.displayMessage("Welcome To Blackjack! Place A Bet To Begin Play!", "Banner");
	view.setButtonText("Play", "Place Bet");
	view.setCard("p1", "./cards/da.gif");
	view.setCard("p2", "./cards/sk.gif");
	view.setCard("p3", "./cards/c4.gif");
	view.setCard("p4", "./cards/hq.gif");
	view.setCard("p5", "./cards/da.gif");
	view.setCard("p6", "./cards/sk.gif");
	view.setCard("p7", "./cards/c4.gif");
	view.setCard("p8", "./cards/hq.gif");
	view.setCard("d1", "./cards/d3.gif");
	view.setCard("d2", "./cards/ha.gif");
	view.setCard("d3", "./cards/s8.gif");
	view.setCard("d4", "./cards/c10.gif");
	view.setCard("d5", "./cards/da.gif");
	view.setCard("d6", "./cards/sk.gif");
	view.setCard("d7", "./cards/c4.gif");
	view.setCard("d8", "./cards/hq.gif");
	
	var playButton = document.getElementById("Play");
	playButton.onclick = startGame;
}

function startGame(){
	var betAmount = document.getElementById("Bet").value;
	if(isNaN(betAmount)){
		view.displayMessage("You must enter a monetary amount between $5.00 and 500,000", "Banner");
	} else {
		//set startingBet to betAmount
		game.startingBet = betAmount;
	
		//set Information on Board
		view.displayMessage(betAmount, "PlayerMoney");
		view.setButtonText("Play", "CashOut")
		view.displayMessage("Set Your Bet Amount And Press Hit to Begin the Game!", "Banner");
		view.displayMessage('<h2 id="pPlackard">Player:</h2>', "PlayersCards");
		view.displayMessage('<h2 id="dPlackard">Player:</h2>', "DealersCards");
		view.setButton("Surrender", "off");
		view.setButton("Stand", "off");
		view.setButton("Double", "off");
		
		//Setting listeners for the buttons
		var betButton = document.getElementById("Bet5");
		betButton.onclick = game.ChangeBetAmount;
	}
}

//view.displayMessage("$10000", "PlayerMoney");
//view.displayMessage("$5", "BetAmount");
//view.setButton("CashOut", "off");
//view.wipeElement("PlayGame");
window.onload = init;
