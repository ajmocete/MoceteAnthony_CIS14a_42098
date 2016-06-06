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
	
		if(!(nmeFldCheck && emlFldCheck && dteFldCheck)){
			console.log(nmeFldCheck, emlFldCheck, dteFldCheck);
			document.getElementById('formFill').innerHTML = "<h2>Please Fill Out All Required Fields</h2>";
			document.getElementById('formFill').style.background = "red";
		} else {
			document.getElementById('formFill').style.background = "white";
			var str =' <div class="survey">';
			str +='<h3>How large is the Military budget?</h3>';
		
			str +='<input type="radio" name="Answer1" value="lt20" >Less than 20%';
			str +='<input type="radio" name="Answer1" value="gt20">Greater than 20%';
			str +='<input type="radio" name="Answer1" value="undefined" checked>I do not know/refuse to answer.';
			str +='<br>';
			str +='<h3>How large is NASA\'s Budget?</h3>';
			str +='<input type="radio" name="Answer2" value="lt5" >Less than 5%';
			str +='<input type="radio" name="Answer2" value="gt5" >Greater than 5%';
			str +='<input type="radio" name="Answer2" value="undefined"  checked>I do not know/refuse to answer.';
			str +='<br>';
			str +='<h3>How large is the Welfare Budget?</h3>';
			str +='<input type="radio" name="Answer3" value="lt60" >Less than 60%';
			str +='<input type="radio" name="Answer3" value="gt60" >Greater than 60%';
			str +='<input type="radio" name="Answer3" value="undefined" checked>I do not know/refuse to answer.';
			str +='</br>';
			str +='<div id="submit">';
			str +='<input type="submit" value="Submit Answers"></div>';
	
			str +='</div>';
			document.getElementById('formFill').innerHTML = str;
		}
	}

