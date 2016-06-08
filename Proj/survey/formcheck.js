function nameCheck() {
		var str = document.getElementById('nameField').value;
		console.log(str);
		var myArray = str.match(/^\s*[A-Z]{1}[a-z]{1,15}\s*[A-Z]{1}[']?\w{1,15}\s*$/g)
		console.log(myArray);
		if(myArray == null){
			document.getElementById('name').innerHTML = "Input is Invalid";
			document.getElementById('name').style.background = "red";
			nmeFldCheck = false;
		} else {
			document.getElementById('name').innerHTML = "Input is Valid";
			document.getElementById('name').style.background = "green";
			nmeFldCheck = true;
			
		}
}
	
function emailCheck() {
	var str = document.getElementById('emailField').value;
	console.log(str);
	var myArray = str.match(/^\s*(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})\s*$/g)
	console.log(myArray);
	if(myArray == null){
		document.getElementById('email').innerHTML = "Input is Invalid";
		document.getElementById('email').style.background = "red";
		emlFldCheck = false;
		
	} else {
		document.getElementById('email').innerHTML = "Input is Valid";
		document.getElementById('email').style.background = "green";
		emlFldCheck = true;
			
	}
}
	
function dateCheck() {
	var str = document.getElementById('dateField').value;
	console.log(str);
	var myArray = str.match(/^\s*([0][1-9]|[1][0-2])[-.\s]?([0][1-9]|([1][0-9]|[2][0-9]|[3][0-1]))[-.\s]?([1][9][2-9][0-9]|[2][0][0-1][0-6])\s*$/g)
	console.log(myArray);
	if(myArray == null){
		document.getElementById('date').innerHTML = "Input is Invalid";
		document.getElementById('date').style.background = "red";
		dteFldCheck = false;
			
	} else {
		document.getElementById('date').innerHTML = "Input is Valid";
		document.getElementById('date').style.background = "green";
		dteFldCheck = true;
			
	}
}
	
function surveyForm() {
	
	if(!(nmeFldCheck && emlFldCheck )){
		console.log(nmeFldCheck, emlFldCheck);
		document.getElementById('formFill').innerHTML = "<h2>Please Fill Out All Required Fields</h2>";
		document.getElementById('formFill').style.background = "red";
	} else {
		document.getElementById('formFill').style.background = "white";
			var str =' <div class="survey">';
			str +='<h3>When you are home, what activity do you do in your spare time?</h3>';
		
			str +='<input type="radio" name="Answer1" value="TV" >Watch TV';
			str +='<input type="radio" name="Answer1" value="READ">Read A Book';
			str +='<input type="radio" name="Answer1" value="VG">Play VideoGames';
			str +='<input type="radio" name="Answer1" value="stuff" checked>I refuse to answer.';
			str +='<br>';
			str +='<h3>Do You Go To School?</h3>';
			str +='<input type="radio" name="Answer2" id="an2Yes" value="Yes" onclick ="optionQuestionOne()" >Yes';
			str +='<input type="radio" name="Answer2" id="an2No" value="No" >No';
			str +='<input type="radio" name="Answer2" value="undefined"  checked>I do not know/refuse to answer.';
			str +='<br>';
			str +='<div id="OpQuest1"></div>';
			str +='<h3>Do You Work At A Job(s)?</h3>';
			str +='<input type="radio" name="Answer3" value="yes" onclick ="optionQuestionTwo()">Yes';
			str +='<input type="radio" name="Answer3" value="no" checked >No';
			str +='</br>';
			str +='<div id="OpQuest2"></div>';
			str +='<h3>How many hours do you sleep a day on Average?</h3>';
			str +='<input type="radio" name="Answer4" value="1to4" >1-4 hours/day';
			str +='<input type="radio" name="Answer4" value="5to10" >5-10 hours/day';
			str +='<input type="radio" name="Answer4" value="gt11" checked>11+ hours/day';
			str +='</br>';
			str +='<div id="submit">';
			str +='<input type="submit" value="Submit Answers"></div>';
	
			str +='</div>';
		document.getElementById('formFill').innerHTML = str;

	}
}

function optionQuestionOne() {
		var str ='<h4>how many hours a week do you go to school?</h4>';
			str +='<input type="radio" name="Answer2Op1" value="lt5" >Less Than 5 hours/week';
			str +='<input type="radio" name="Answer2Op1" value="5t10" >5-10 hours/week';
			str +='<input type="radio" name="Answer2Op1" value="gt10" >10+ hours/week';
			str +='<input type="radio" name="Answer2Op1" value="undefined"  checked>I do not know/refuse to answer.';
			str +='<br>';
		str+='<h4>How many hours a week do you study?</h4>';
			str +='<input type="radio" name="Answer2Op2" value="lt5" >Less Than 5 hours/week';
			str +='<input type="radio" name="Answer2Op2" value="5t10" >5-10 hours/week';
			str +='<input type="radio" name="Answer2Op2" value="gt10" >10+ hours/week';
			str +='<input type="radio" name="Answer2Op2" value="undefined"  checked>I do not know/refuse to answer.';
			str +='<br>';
	document.getElementById("OpQuest1").innerHTML = str;
}

function optionQuestionTwo(){
		var	str ='<h3>How many hours do you work a week?</h3>';
			str +='<input type="radio" name="Answer3Op1" value="lt10" >less than 10 hours/week';
			str +='<input type="radio" name="Answer3Op1" value="10to35" >10 - 35 hours/week';
			str +='<input type="radio" name="Answer3Op1" value="35to50"checked >35 - 50 hours/week';
			str +='<input type="radio" name="Answer3Op1" value="gt50" >51+ hours/week';
	document.getElementById("OpQuest2").innerHTML = str;
}