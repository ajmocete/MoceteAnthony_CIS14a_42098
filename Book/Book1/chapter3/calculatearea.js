function calculateArea(r) {
	var area;
	if(r<=0) {
		return 0;
	}else{
		area = Math.PI * r * r;
		return area;
	}
}

var radius = prompt("Enter the radius of the circle");

alert("The area of a circle with the radius of: " + radius + " = " + calculateArea(radius));
