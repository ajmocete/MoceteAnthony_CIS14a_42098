function buildStoreDatabase() {
	//array of all items available in the store.
	var storeDatabase = [
		{
			prodName: "Mystery Bag",
			prodPrice: 9.99,
			prodComp: "Diver Dave's Goods, LLC",
			prodDescription: "Are you a picky shopper? Tired of all those wasted days browsing the web and running down store isles only to find that you can't decide on what to buy? Look no further than Diver Dave's Mystery Bag! At Diver Dave's, We've taken the work out of shopping and provide you a streamlined process that will leave you a Satisfied Customer.",
			prodReviews: [
							"The Kids were happy with their new pet! 5 Stars",
							"Does this product come in Blue? Every bag I order always comes in Brown and is Wet at the Bottom! Wish I could customize!"
						 ],
			prodRating: 3,
			prodImg: "./images/mystery_bag.jpg"
		},
		{
			prodName: "Mystery Dumpster",
			prodPrice: 199.99,
			prodComp: "Diver Dave's Goods, LLC",
			prodDescription: "From the makers of Mystery Bag! The Mystery Dumpster offers a great value to those shoppers that prefer to buy in Bulk. Recieve half a years worth of Mystery Bags; We Passed the Savings onto You!",
			prodReviews: [
							"Although Mystery Dumpster comes with alot of stuff, you can get an even bigger bundle at Costco!",
							"I love living in the same town as Diver Dave's. I get instand delivery!"
						 ],
			prodRating: 4.5,
			prodImg: "./images/mystery_dumpster.jpg"
		},
		{
			prodName: "Message Delivery System",
			prodPrice: 29.99,
			prodComp: "Overweight Anthony & Associates",
			prodDescription: "Express Delivery Available!",
			prodReviews: [
							"I bought this item to turn in my Two Week notice. Very Much Satisfied!",
							"My only complaint is that the Message Delivery System can only be used once! I deliver the message but the recieving party rarely returns it."
						 ],
			prodRating: 8.88,
			prodImg: "http://previews.123rf.com/images/photoman/photoman0904/photoman090400092/4659158-Red-Brick-and-Threat-letter-Message-tied-on-to-a-brick-Stock-Photo.jpg"
		},
		{
			prodName: "An Actual Diamond",
			prodPrice: 0.05,
			prodComp: "Desperate Joe's Diamond Conglomerate",
			prodDescription: 'Please Buy This Item! My diamond business has been in the red for years now. When my Great Grandpa started this company he never expected taht the "Most Valuable Sustance" on EARTH would be overtaken by CUBIC ZIRCONIA!',
			prodReviews: [
							"NOT WORTH THE COMPRESSED CARBON ITS MADE OF!",
							"SO THIS IS WHERE MY GOOD FOR NOTHING HUSBAND GOT MY ANNIVERSARY PRESENT! I'LL MAKE SURE TO PRINT THIS PAGE OUT FOR THE DIVORCE PROCEEDINGS"
						 ],
			prodRating: -2000,
			prodImg: "./images/diamond.jpg"
		},
		{
			prodName: "The Presidency Of The United States",
			prodPrice: 50000000.00,
			prodComp: "Illuminated and Co",
			prodDescription: ' Slightly Used. ',
			prodReviews: [
							"I honestly Didnt Think It Would Be THIS easy...",
						 ],
			prodRating: 2,
			prodImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Seal_of_the_President_of_the_United_States.svg/200px-Seal_of_the_President_of_the_United_States.svg.png"
		},
		{
			prodName: "Monopoly Money",
			prodPrice: 1.00,
			prodComp: "Big Buck Chuck, LCC",
			prodDescription: 'THE US DOLLAR IS LOSING VALUE!!! Make the wise decision and INVEST IN MONOPOLY BUCKS! Im BIG BUCK CHUCK and I\'ve been doing this for years. As the dollar slowly loses its value, Monopoly Money stays consistent! INVEST NOW!',
			prodReviews: [
							"I've made a killing in the PARKER BROS STOCK EXCHANGE!",
							"If I hadn't already invested in GOLD AND DIAMONDS, I would put all my stocks into MONOPOLY MONEY!"
						 ],
			prodRating: 7,
			prodImg: "http://ecx.images-amazon.com/images/I/81AGAI1D47L._SX522_.jpg"
		},
		{
			prodName: "A Horse With No Name",
			prodPrice: 1000,
			prodComp: "Metaphors Inc",
			prodDescription: '100% Reliable Transportation through the South West or your Money Back Guarantee!',
			prodReviews: [
							"False Advertisement! The Horses name was BOB!",
							"False Advertisement! It said Reliable Transportation through the southwest. THEY DIDNT SAY WHICH SOUTHWEST!"
						 ],
			prodRating: 2,
			prodImg: "http://2.bp.blogspot.com/-ViEF02c4GCI/VaQrS36Wq9I/AAAAAAAAUk8/iZj5qw1q_qo/s1600/photographis-horses-brown.jpg"
		},
		{
			prodName: "Finals Week Stress In A Bottle! 6-Pack",
			prodPrice: 19.99,
			prodComp: "ROCKSTER ENERGY",
			prodDescription: "Are you looking for a boost to get you to the end of the day? Grab a can of Final's! Finals will raise your heartrate, and give you a rush that so many students across the world feel on the hours approaching the end of the school term. You'll never have to worry about sleep with Finals!(WARNING: NOT FOR ANYONE IN AN ACEDEMIC ENVIRONMENT)",
			prodReviews: [
							"ive been awake for 3 weeks.",
							"The can says no crash, but I crashed my car into a bridge. I DONT CARE; I LOVE IT!"
						 ],
			prodRating: 7777777777,
			prodImg: "https://s.yimg.com/fz/api/res/1.2/b9h8.O8co0E.TBcV69h0Dw--/YXBwaWQ9c3JjaGRkO2g9OTU1O3E9OTU7dz0xMzAw/http://thumbs.dreamstime.com/z/six-pack-beverage-cans-7397601.jpg"
		},
	];
	
	var addStr = JSON.stringify(storeDatabase);
	localStorage.setItem("StoreDatabase",addStr);
}




