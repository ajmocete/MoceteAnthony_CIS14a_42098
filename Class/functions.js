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
 
 function replaceUtf(str){
	str = findAndReplace(str, "+", " ");
	str = findAndReplace(str, "%20", " ");
	str = findAndReplace(str, "%21", "!");
	str = findAndReplace(str, '%22', '"');
	str = findAndReplace(str, "%23", "#");
	str = findAndReplace(str, "%24", "$");
	str = findAndReplace(str, "%25", "%");
	str = findAndReplace(str, "%26", "&");
	str = findAndReplace(str, "%27", "'");
	str = findAndReplace(str, "%28", "(");
	str = findAndReplace(str, "%29", ")");
	str = findAndReplace(str, "%2A", "*");
	str = findAndReplace(str, "%2B", "+");
	str = findAndReplace(str, "%2C", ",");
	str = findAndReplace(str, "%2D", "-");
	str = findAndReplace(str, "%2E", ".");
	str = findAndReplace(str, "%2F", "/");
	str = findAndReplace(str, "%3A", ":");
	str = findAndReplace(str, "%3B", ";");
	str = findAndReplace(str, "%3C", "<");
	str = findAndReplace(str, "%3D", "=");
	str = findAndReplace(str, "%3E", ">");
	str = findAndReplace(str, "%3F", "?");
	str = findAndReplace(str, "%40", "@");
	str = findAndReplace(str, "%5B", "[");
	str = findAndReplace(str, "%5C", "\\");//Escape backslash
	str = findAndReplace(str, "%5D", "]");
	str = findAndReplace(str, "%5E", "^");
	str = findAndReplace(str, "%5F", "_");
	str = findAndReplace(str, "%60", "`");
	str = findAndReplace(str, "%7B", "{");
	str = findAndReplace(str, "%7C", "|");
	str = findAndReplace(str, "%7D", "}");
	str = findAndReplace(str, "%7E", "~");
	return str;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
} 