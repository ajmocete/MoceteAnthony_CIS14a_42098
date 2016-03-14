function bark(name, weight) {
	if(weight > 20){
		console.log(name + " says WOOF WOOF");
	}else {
		console.log(name + " says woof woof");
	};
}
var dogAmount;
var dogList = [];
var loopCount = 0;

dogAmount = prompt("How many dogs are you weighing in?");
if(dogAmount <= 0){
	alert("Please enter a valid number");
} else {
	for(i=1; i <= dogAmount; i++)
	{
		var dogName = prompt("What is the name of dog number: "+i+"?");
		var dogWeight = prompt("what is " + dogName + "'s weight?");
		dogList.push(dogName, dogWeight);
	}
	
} 

while(loopCount <= dogAmount){
	bark(dogList[loopCount], dogList[loopCount+1]);
	loopCount = loopCount + 2;
}

