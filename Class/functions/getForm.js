function getUrlValues(url){
		var info=url.split("?");
		//Place name value pairs into an array
		var nameValuePairs = info[1].split("&");
		object = new Object();
		for(i=0;i<nameValuePairs.length;i++)
		{
		var map=nameValuePairs[i].split("=");
		var name= map[0];
		var value=map[1];
		object[name]=value;	
		
	}
	return object;
 }