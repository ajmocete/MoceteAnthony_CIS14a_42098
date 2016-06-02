/*
	Blackjack
	By: Anthony Mocete
	Mocete, Anthony - BlackJack - 42098
*/


//View Object


var developer ={
	devOn: true,
	log: function(str){
		if(developer.devOn){
			console.log(str);
		}
	}
}

var view = {
	displayMessage: function(msg, Elmnt){
		var message = document.getElementById(Elmnt);
		message.innerHTML = msg;
		developer.log("Set message in " + Elmnt + " to " + msg);
	},
	setElement: function(Elmnt, eleString) {
		var element = document.getElementById(Elmnt);
		element.innerHTML = element.innerHTML + eleString;
		developer.log("Added" + eleString + " to "+Elmnt);
	},
	setButton: function(btn, sts){
		var buttonDisplay = document.getElementById(btn);
		buttonDisplay.setAttribute("class", sts);
		developer.log("set " +btn+ " to " + sts);
	},
	setButtonText: function(btn, msg){
		var ButtonText = document.getElementById(btn);
		ButtonText.value = msg;
		developer.log("setButtonText on "+btn+" to " + msg);
	},
	wipeElement: function(Elmnt) {
		var element = document.getElementById(Elmnt);
		element.innerHTML = "";
		//element.setAttribute("id", null);
		developer.log("Wiped Element" + Elmnt);
	},
	setCard: function(Elmnt, img){
		var card = document.getElementById(Elmnt);
		card.innerHTML = '<img src="'+img+'" alt="PlayerCard'+Elmnt+'">';
		developer.log("set "+img+" to "+Elmnt);
	}
}

//Game Object
var game = {
	startingBet: 0.00,
	roundsPlayed: 0,
	playersCard: [],
	dealersCard: [],
	playerMoney: 0.00,
	betAmount: 0,
	playerWins: 0,
	dealerWins: 0,
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
		var betArray = ["Bet5", "Bet10", "Bet20", "Bet50", "Bet100", "Bet500", "BetAll"];
		var betButton = document.getElementById("Bet5");
		developer.log("betArray set to: "+betArray);
		developer.log("betButton set to: "+betButton);
		developer.log(game.betAmount);
		
		if(game.betAmount > 5) {
			game.betAmount = 0;
		} else {
			game.betAmount++;
		}
		
		developer.log(game.betAmount);
		developer.log(betArray[game.betAmount])
		betButton.setAttribute("value", betArray[game.betAmount]);
	},
	pushToPlayer: function(card, player) {
		if(player == "Player"){
			game.playersCard.push(card);
			if(game.playersCard.length < 4){
				view.setElement("PlayersCards",'<div id="p'+game.playersCard.length+'" class="Cardsr1"></div>');
				view.setCard('p'+game.playersCard.length,"./cards/"+card+".gif");
				developer.log("Added "+card+ " to "+player+" on row 1");
			} else {
				view.setElement("PlayersCards",'<div id="p'+game.playersCard.length+'" class="Cardsr2"></div>');
				view.setCard('p'+game.playersCard.length,"./cards/"+card+".gif");
				developer.log("Added "+card+ " to "+player+" on row 2");
			}
		} else {
			if(game.dealersCard.length == 1){
				game.dealersCard.push(card);
				view.setElement("DealersCards",'<div id="d'+game.dealersCard.length+'" class="Cardsr1"></div>');
				view.setCard('d'+game.dealersCard.length,"./cards/bk.gif");
				developer.log("Added "+card+ " and bk to "+player+" on row 1");
			} else{ 
				game.dealersCard.push(card);
				if(game.dealersCard.length < 4){
					view.setElement("DealersCards",'<div id="d'+game.dealersCard.length+'" class="Cardsr1"></div>');
					view.setCard('d'+game.dealersCard.length,"./cards/"+card+".gif");
					developer.log("Added "+card+ " to "+player+" on row 1");
				} else {
					view.setElement("DealersCards",'<div id="d'+game.dealersCard.length+'" class="Cardsr2"></div>');
					view.setCard('d'+game.dealersCard.length,"./cards/"+card+".gif");
					developer.log("Added "+card+ " to "+player+" on row 1");
				}
			}
		}
		
	},
	CardCount: function(array, player){
		var count = 0;
		var hasAce = false;
		for(var i = 0; i < array.length; i++){
			var card = array[i].charAt(array[i].length - 1);
			developer.log("Card set to " + card);
			if(card === "a"){
				hasAce = true;
				count += 11;
				developer.log(player+" Count: " + count);
			} else if(card === "j" || card === "q" || card === "k" || card == "0") {
				count += 10;
				developer.log(player+" Count: " + count);
			} else {
				count += parseFloat(card);
				developer.log(player+" Count: " + count);
			}
		}	
		if(hasAce && (count > 21)) {
			count = count - 10;
			view.displayMessage(count, player+"CardCount");
			developer.log(player+" Count with Ace: " + count);
			return count;
		} else {
			view.displayMessage(count, player+"CardCount");
			developer.log(player+" Count: " + count);
			return count;
		}
	}
}

var controller = {
	cardDealt: 0,
	playerCount: 0,
	dealerCount: 0,
	roundBet: 0,
	gameDeck: [],
	startRound: function(){
		game.roundsPlayed++;
		view.displayMessage("Round "+game.roundsPlayed, "Banner");
		developer.log("Round "+game.roundsPlayed);
		
		
		var betValue = document.getElementById("Bet5").value;
		developer.log("Player is betting: $"+betValue);
		var bet = controller.betAmount(betValue);
		developer.log("bet Amount: "+bet);
		controller.roundBet = bet;
		developer.log("controller.roundBet set to "+bet);
		developer.log("game.playerMoney value before subtracting bet: "+game.playerMoney);
		game.playerMoney = game.playerMoney - bet;
		developer.log("game.playerMoney set to "+game.playerMoney);
		view.displayMessage(bet, "BetAmount");
		view.displayMessage(game.playerMoney, "PlayerMoney");
		
		
		controller.gameDeck = game.cardDeck;
		for(var i=0; i<= 6; i++){
			controller.gameDeck = game.shuffleDeck(controller.gameDeck);
			developer.log("Shuffled deck"+i+" time(s)");
		}
		developer.log("The Game Deck: "+controller.gameDeck);
		
		//Deal Hands
		game.pushToPlayer(controller.gameDeck[controller.cardDealt], "Player");
		controller.cardDealt++;
		game.pushToPlayer(controller.gameDeck[controller.cardDealt], "Dealer");
		controller.cardDealt++;
		game.pushToPlayer(controller.gameDeck[controller.cardDealt], "Player");
		controller.cardDealt++;
		game.pushToPlayer(controller.gameDeck[controller.cardDealt], "Dealer");
		controller.cardDealt++;
		
		view.setButton("Stand", "on");
		view.setButton("Surrender", "on");
		view.setButton("CashOut", "off");
		view.setButton("Bet5", "off");
		//view.setButton("")
		
		controller.playerCount = game.CardCount(game.playersCard, "p");
		developer.log("controller.playerCount set to: "+controller.playerCount);
		
		if(controller.playerCount == 21){
			controller.DealerTurn();
			developer.log("player has Blackjack!");
		}
		
		var hitButton = document.getElementById("Hit");
		//var betButton = document.getElementById("Bet5");
		var surButton = document.getElementById("Surrender");
		var standButton = document.getElementById("Stand");
		//var cashOut = document.getElementById("CashOut");
		
		hitButton.onclick = controller.HitButtonHandle;
		surButton.onclick = controller.SurButtonHandle;
		standButton.onclick = controller.DealerTurn;
	},
	HitButtonHandle: function(){
		var hitButton = document.getElementById("Hit").className;
		developer.log(hitButton);
		if(hitButton == "on") {
			view.setButton("Surrender", "off");
			developer.log("HitButtonHandle called");
			game.pushToPlayer(controller.gameDeck[controller.cardDealt], "Player");
			controller.cardDealt++;
			controller.playerCount = game.CardCount(game.playersCard, "p");
		
			if(controller.playerCount > 21){
				controller.DealerTurn("bust");
				developer.log("player has bust");
				view.setButton("Hit", "off");
			} else if(controller.playerCount == 21){
				controller.DealerTurn();
				developer.log("player has Blackjack!");
			}
		}
	},
	SurButtonHandle: function(){
		
	},
	DealerTurn: function(playerAction){
		view.setButton("Hit", "off");
		view.setCard("d2", "./cards/"+game.dealersCard[1]+".gif");
		switch(playerAction){
				
			case'bust':
				controller.dealerCount = game.CardCount(game.dealersCard, "d");
				developer.log("DealerCount: "+controller.dealerCount);
				break;
				
			default:
				controller.dealerCount = game.CardCount(game.dealersCard, "d");
				developer.log("DealerCount: "+controller.dealerCount);
				
				var dealerDraw = true;
				do{
					if(controller.dealerCount < 17) { //if the dealer has less than 17
						game.pushToPlayer(controller.gameDeck[controller.cardDealt], "Dealer");
						controller.cardDealt++;
						controller.dealerCount = game.CardCount(game.dealersCard, "d");
						developer.log("DealerCount: "+controller.dealerCount);
					} else if(controller.dealerCount == 21) { //if the dealer has blackjack
						dealerDraw = false;
						developer.log("DealerCount: "+controller.dealerCount);
						if(controller.dealerCount == controller.playerCount){
							developer.log("Push Detected!");
							view.displayMessage("Push! Bet Has been Returned to Player", "Banner");
							game.playerMoney = game.playerMoney + controller.roundBet;
							view.displayMessage(game.playerMoney, "PlayerMoney");
							developer.log(parseFloat(game.playerMoney) + parseFloat(controller.roundBet));
							//controller.endRound();
							developer.log("End Round");
						} else {
							developer.log("Dealer has 21!");
							view.displayMessage("Dealer Wins. Press Hit to bet again!", "Banner");
							//controller.endRound();
							developer.log("End Round");
						}
					} else { 
						dealerDraw = false;
						developer.log("DealerCount: "+controller.dealerCount); 
						if(controller.dealerCount == controller.playerCount){ //if the dealer has the same amount as the player
							developer.log("Push Detected!");
							view.displayMessage("Push! Bet Has been Returned to Player", "Banner");
							game.playerMoney = game.playerMoney + controller.roundBet;
							developer.log(parseFloat(game.playerMoney) + parseFloat(controller.roundBet));
							view.displayMessage(game.playerMoney, "PlayerMoney");
							//controller.endRound();
							developer.log("End Round");
						} else if((controller.dealerCount > controller.playerCount) && !(controller.dealerCount > 21)) { //if the dealer has more than the player
							developer.log("Dealer Wins!");
							view.displayMessage("Dealer Wins. Press Hit to bet again!", "Banner");
							view.displayMessage(game.playerMoney, "PlayerMoney");
							//controller.endRound();
							developer.log("End Round");
						} else {
							developer.log("Player Wins!");
							view.displayMessage("Player Wins! Press Hit to Bet again!", "Banner");
							game.playerMoney = game.playerMoney + (controller.roundBet * 2);
							view.displayMessage(game.playerMoney, "PlayerMoney");
							developer.log(parseFloat(game.playerMoney) + parseFloat(controller.roundBet));
							//controller.endRound();
							developer.log("End Round");
						}
					}
				
				}while(dealerDraw);
				
		}
		
		var hitButton = document.getElementById("Hit");
		hitButton.onclick = controller.restartRound;
	},
	restartRound: function(){
		
		//view.wipeElement("dealersCard");
		//view.wipeElement("playersCard");
		view.setButton("Hit", "on");
		view.setButton("Bet5", "on");
		view.setButton("CashOut","on");
		view.setButton("Stand", "off");
		
		
		controller.cardDealt = 0;
		controller.playerCount = 0;
		controller.dealerCount = 0;
		game.dealersCard = [];
		game.playersCard = [];
		
		view.displayMessage('<h2 id="pPlackard">Player:<div id="pCardCount"></div></h2>', "PlayersCards");
		view.displayMessage('<h2 id="dPlackard">Dealer:<div id="dCardCount"></div></h2>', "DealersCards");
		controller.startRound();
	},
	betAmount: function(betValue) {
		var betAmount;
		switch(betValue){
			case'Bet5':
				betAmount = 5.00;
				break;
			case'Bet10':
				betAmount = 10.00;
				break;
			case'Bet20':
				betAmount = 20.00;
				break;
			case'Bet50':
				betAmount = 50.00;
				break;
			case'Bet100':
				betAmount = 100.00;
				break;
			case'Bet500':
				betAmount = 500.00;
				break;
			default:
				betAmount = game.playerMoney;
		}
		return betAmount;
	}
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
	if((isNaN(betAmount)) ||(betAmount < 5) || betAmount == ""){
		view.displayMessage("You must enter a monetary amount between $5.00 and 500,000", "Banner");
	} else {
		//set startingBet to betAmount
		developer.log("The player has invested: $"+betAmount);
		game.startingBet = betAmount;
		developer.log("game.StartingBet set to: " + game.startingBet);
		game.playerMoney = betAmount;
		developer.log("game.playerMoney set to: " + game.playerMoney);
		
		
		//set Information on Board
		view.displayMessage("$"+betAmount, "PlayerMoney");
		//view.setButtonText("Play", "CashOut")
		view.displayMessage("Set Your Bet Amount And Press Hit to Begin the Game!", "Banner");
		view.displayMessage('<h2 id="pPlackard">Player:<div id="pCardCount"></div></h2>', "PlayersCards");
		view.displayMessage('<h2 id="dPlackard">Dealer:<div id="dCardCount"></div></h2>', "DealersCards");
		view.setButton("Surrender", "off");
		view.setButton("Stand", "off");
		//view.setButton("Double", "off");
		
		var hitButton = document.getElementById("Hit");
		var betButton = document.getElementById("Bet5");
		var surButton = document.getElementById("Surrender");
		var standButton = document.getElementById("Stand");
		var cashOut = document.getElementById("CashOut");
		//Setting listeners for the buttons
		betButton.onclick = game.ChangeBetAmount;
		hitButton.onclick = controller.startRound;
		CashOut.onclick = controller.CashOut;
	}
}

//view.displayMessage("$10000", "PlayerMoney");
//view.displayMessage("$5", "BetAmount");
//view.setButton("CashOut", "off");
//view.wipeElement("PlayGame");
window.onload = init;
