/*
The Dr. Mark Lehr Sort function
A sort function created to provide a variety of sort options in Javascript
*/
function srtIndx(obj,pToSrt){
    //create an indx array for the sort
    var idx=[];
    for(var pos=0;pos<obj.length;pos++){
        idx[pos]=pos;
    }
    //Sort the indexed array
    if(pToSrt){
        for(var pos=0;pos<obj.length-1;pos++){
			var posObj=obj[idx[pos]];
			for(var lst=pos+1;lst<obj.length;lst++){
				var lstObj=obj[idx[lst]];
				if(posObj[pToSrt]>lstObj[pToSrt]){
					var temp=idx[pos];
                    idx[pos]=idx[lst];
                    idx[lst]=temp;
                }
            }
        }
    }
    return idx;
}



function sortStore() {
	
	//Grab the $_GET Objects
	var storeDatabase=localStorage.getItem("StoreDatabase"); 
	var url=document.location.href;
	$_GET=getForm(url);
            
	//Initialize the data

	var $store=JSON.parse(storeDatabase);
	var indx=srtIndx($store,$_GET['sort']);
            
	var $display = 5;
	var $pages;
	var $start;
		

	// Determine how many pages there are...
	if ($_GET['p'] && ($_GET['p'] === parseInt($_GET['p'], 10))) {
		$pages = $_GET['p'];
	} else {
		var $records = $store.length;
		// Calculate the number of pages...
		if ($records > $display) { // More than 1 page.
			$pages = Math.ceil ($records/$display);
		} else {
			$pages = 1;
		}
	}

	// Determine where in the database to start returning results...
	if (parseInt($_GET['s'], 10)){
		$start = $_GET['s'];
	} else {
		$start = 0;
	}
            
	// Determine the sort...
	var $sort = ($_GET['sort'] ? $_GET['sort'] : 'name');
	
	
	var $end=$store.length;
    if($end-$start>$display){
		$end=$start+$display;
	}
	
	var $bg = '#eeeeee'; 
	for (var i=$start;i<$end;i++){
        var $itm=$store[indx[i]];
        $bg = ($bg=='#eeeeee' ? '#ffffff' : '#eeeeee');
        var strItem = '<div id="itemFront">'
		strItem += '<h3>'+$itm['prodName']+'</h3>';
		strItem += '<p id="PriceRow">Price: $'+$itm['prodPrice'];
		var itemLink = '?item='+$itm['prodName'];
		strItem += '<a href ="view.html'+itemLink+'">View Item</a></p>';
		strItem += '<img src="'+$itm['prodImg']+'" alt="'+$itm['prodName']+'">';
		
		strItem += '</div>';
		document.write(strItem);
    }
	 
	 
	if ($pages > 1) {

        document.write('<br /><p>');
        $current_page = Math.floor($start/$display) + 1;

        // If it's not the first page, make a Previous button:
        if ($current_page != 1) {
            document.write('<a href="shop.html?s=',($start - $display),'&p=',$pages,'&sort=',$sort,'">Previous</a> ');
        }
        
		// Make all the numbered pages:
        for (var $i = 1; $i <= $pages; $i++) {
			if ($i != $current_page) {
                document.write('<a href="shop.html?s=',(($display * ($i - 1))),'&p=',$pages,'&sort=',$sort,'">',$i,'</a> ');
            } else {
                document.write($i,' ');
            }
        } // End of FOR loop.
     
        // If it's not the last page, make a Next button:
        if ($current_page != $pages) {
            document.write('<a href="shop.html?s=',($start + $display),'&p=',$pages,'&sort=',$sort,'">Next</a>');
        }

        document.write('</p>'); // Close the paragraph.

    } // End of links section.
}

/* 
 * Dr. Mark E. Lehr
 * November 6th, 2015
 * Mimicks the $_GET PHP array
 	var url=document.location.href;
	$_GET=getForm(url);
 */
//Function which retrieves the information
//in a form
function getForm(url){
        var $_GET = new Object;
	var info=url.split("?");
        if(info.length>1){
            var nameValuePairs=info[1].split("&");
            for(var i=0;i<nameValuePairs.length;i++){
                    var map=nameValuePairs[i].split("=");
                    var name=map[0];
                    var value=map[1];
                    $_GET[name]=value;
            }
        }
	return $_GET;
}