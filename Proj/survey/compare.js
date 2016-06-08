function compare()
{
		var str=localStorage.getItem("surveyResults");
		var surveyObject = JSON.parse(str);
		console.log(surveyObject);
		str = "";
		for(var survey=0;survey<surveyObject.length;survey++){
			var correct = 0;
			var obj=surveyObject[survey];
			str +="</br><hr>";
			str += "<h4>Survey #"+(survey + 1)+" by " +obj['Name']+"("+obj["Email"]+")</h4></br>";
			str += "<h5>Completed on "+obj["Date"]+"</h5>";
			
			
			
			str += '<div class="survey '+survey+'">';
			str +="<p>Question 1: How large is the Military budget?</p>";
			switch(obj["Answer1"]){
				case("lt20"):
					correct++;
					str +="Less Than 20%";
					break;
				case("gt20"):
					str +="Greater Than 20%";
					break;
				default:
					str +="They didnt answer this question";
			}
		
			str +="<p>Question 2: How large is NASA's Budget?</p>";
			switch(obj["Answer2"]){
				case("lt5"):
					str +="Less Than 5%";
					correct++;
					break;
				case("gt5"):
					str +="Greater Than 5%";
					break;
				default:
					str +="They didnt answer this question";
					
			}
		
			str +="<p>Question 3: How large is the Welfare Budget?</p>";
			switch(obj["Answer3"]){
				case("lt60"):
					str +="Less Than 60%";
					break;
				case("gt60"):
					correct++;
					str +="Greater Than 60%";
					break;
				default:
					str +="They didnt answer this question";
			}
			
			str +="<h3>They got "+ correct + " out of 3 questions correct!</h3>";
			if(obj["refusedQuestions"] > 0){
				str +="<h3>They refused to answer "+ obj["refusedQuestions"] + " question(s)</h3>";
			}
			str +="</div>";
			
		}
		str += '<hr></h1>';
		return str;
}