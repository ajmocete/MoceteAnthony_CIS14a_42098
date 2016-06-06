function getUrlValues(url){
		var info=url.split("?");
		//Place name value pairs into an array
		var nameValuePairs = info[1].split("&");
		object = new Object();
		for(i=0;i<nameValuePairs.length;i++)
		{
		var map=nameValuePairs[i].split("=");
		map[1] = replaceUtf(map[1]);
		var name= map[0];
		var value=map[1];
		object[name]=value;	
		
	}
	return object;
 }
 
 
 //function to replace utf-8 characters in the form URL
 function replaceUtf(str){
	str = findAndReplace(str, "+", " ");
	//Add the rest of the UTF-8 replacements below...
	str = findAndReplace(str, "%40", "@");
	str = findAndReplace(str, "%20", " ");
	return str;
}

function findAndReplace(str, findVal, changeTo){
	do{
		try {
		var findC = str.indexOf(findVal);
		str = str.replace(findVal, changeTo);
		} catch(err) {
			findC = -1;
		}
	}while(findC != -1);
	return str;	
}