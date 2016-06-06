function buildStoreDatabase() {
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
		
	];
	
	var addStr = JSON.stringify(storeDatabase);
	localStorage.setItem("StoreDatabase",addStr);
}




