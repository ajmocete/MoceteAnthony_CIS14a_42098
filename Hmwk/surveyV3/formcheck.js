function surveyForm(preReqStatus) {
	
	if(preReqStatus === 0){
		return "Please Fill Out All Required Fields";
	}
	
	var str =' <div class="survey">';
	str +='<h3>How large is the Military budget?</h3>';
		
	str +='<input type="radio" name="Answer1" value="lt20" >Less than 20%';
	str +='<input type="radio" name="Answer1" value="gt20">Greater than 20%';
	str +='<input type="radio" name="Answer1" value="undefined" onselect="myFunction()" checked>I do not know/refuse to answer.';
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
	str +='<input type="submit" value="Submit Answer">';
	
	str +='</div>';
	return str;
}

function formCheck(formVsn) {
	switch(formVsn){
		case'name':
			document.getElementById(formVsn).innerHTML = "Worked";
			break;
		default:
			document.getElement
	}
}