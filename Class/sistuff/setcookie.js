function setCookie(name, value, daysToLive) 
{
		var cookie = name+"=" + encodeURIComponent(value);
		
		if(typeof daysToLive === "number") {
			cookie+="; max-age="+(daysToLive*60*60*24);
		} 
		document.cookie = cookie;
}