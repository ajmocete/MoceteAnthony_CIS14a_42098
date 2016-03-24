// JavaScript Document
// Dr. Mark E. Lehr
// March 23rd, 2016
// Purpose:  Explore writing functions
	//Split the URL and the Important is in the 2nd Half
function getUrlValues(url){
		var info=url.split("?");
		//Place name value pairs into an array
		var nameValuePairs = info[1].split("&");
		document.write("<h2>"+url+"</h2>");
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
		   
function save1(pv,int,n){
	for(var year=1;year<=n;year++){
		pv*=(1+int);
	}
	return pv;
}

function save2(pv,int,n){
	return pv*Math.pow((1+int),n);
}

function save3(pv,int,n){
	return pv*Math.exp(n*Math.log(1+int));
}

function save4(pv,int,n){
	if(n<=0)return pv;
	return save4(pv,int,n-1)*(1+int);
}

function save5(pv,int,n){
	//Declare an array
	fv=[];
	//Calculate all the values in the array
	fv[0]=pv;
	for(var year=1;year<=n;year++){
		fv[year]=fv[year-1]*(1+int);
	}
	return fv;
}

function display(fv){
	//Output the heading for our table
	document.write('<table width="200" border="1">');
    document.write("<tr><th>Years</th><th>Savings</th></tr>");
	for(var year=0;year<fv.length;year++){
		document.write("<tr>");
        document.write("<td>"+year+"</td>");
        document.write("<td>$"+parseFloat(fv[year]).toFixed(2)+"</td>");
        document.write("</tr>");
	}
	document.write("</table>");	
}
