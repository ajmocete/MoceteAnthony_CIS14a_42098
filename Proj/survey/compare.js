function compare()
{
		var str=localStorage.getItem("surveyResults");
		var surveyObject = JSON.parse(str);
		console.log(surveyObject);
		str = "";
		for(var survey=0;survey<surveyObject.length;survey++){
			
			var obj=surveyObject[survey];
			str +="</br><hr>";
			str += "<h4>Survey #"+(survey + 1)+" by " +obj['Name']+"("+obj["Email"]+")</h4></br>";
			str += "<h5>Completed on "+obj["Date"]+"</h5>";
			
			
			
			str += '<div class="survey '+survey+'">';
			str +="<p>Question 1: When you are home, what activity do you do in your spare time?</p>";
			switch(obj["Answer1"]){
				case("TV"):
					str +="Watching TV";
				break;
				case("READ"):
					str +="Reading Books";
					break;
				case("VG"):
					str +="Playing Video Games";
					break;
				default:
					str +='"Stuff"';
			}
		
			str +="<p>Question 2:Do You Go To School?</p>";
			switch(obj["Answer2"]){
				case("Yes"):
					str +="Yes";	
					break;
				case("No"):
					str +="No";
					break;
				default:
					str +="You didnt answer this question";	
			}
			
			str +="<p>How many Hours a Week Do you Attend Class</p>";
			str +="<p>Question 3: How large is the Welfare Budget?</p>";
			switch(obj["Answer2Op1"]){
				case("lt5"):
					str +="Less Than 5 hours/week";
					break;
				case("5t10"):
					str +="5 - 10 hours/week";
					break;
				case("gt10"):
					str +="10+ hours/week";
					break;
				default:
					str +="You didnt answer this question";
			}
			
			str +="<p>How many Hours a Week Do You Study?</p>";
			switch(obj["Answer2Op2"]){
				case("lt5"):
					str +="Less Than 5 hours/week";
					break;
				case("5t10"):
					str +="5 - 10 hours/week";
					break;
				case("gt10"):
					str +="10+ hours/week";
					break;
				default:
					str +="You didnt answer this question";
			}
			
			str +="<p>Question 3: Do You Work At A Job(s)?</p>";
			switch(obj["Answer3"]){
				case("yes"):
					str +="Yes";
					break;
				case("no"):
					str +="No";	
					break;
				case("gt10"):
					str +="10+ hours/week";
					break;
				default:
					str +="You didnt answer this question";
			}
			
			str +="<p>How many hours do you work a week?</p>";
			switch(obj["Answer3Op1"]){
				case("lt10"):
					str +="Less Than 10 hours/Week";
					break;
				case("10to35"):
					str +="10 to 35 hours/week";
					break;
				case("35to50"):
					str +="35 to 50 hours/week";
					break;
				case("gt50"):
					str +="51+ hours/week";
					break;
				default:
					str +="You didnt answer this question";
			}
			
			str +="<p>Question 4: How Many Hours of Sleep A Day Do you Get?</p>";
			switch(answers["Answer4"]){
				case("1to4"):
					str +="1 to 4 hours/day";
					break;
				case("5to10"):
					str +="5 to 10 hours/day";
					break;
				case("gt11"):
					str +="11+ hours/day";
					break;
				case("gt50"):
					str +="51+ hours/week";
					break;
				default:
					str +="You didnt answer this question";
			}
			
			str +="</div>";
			
		}
		str += '<hr></h1>';
		return str;
}