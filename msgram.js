function searchMessagesReq(){


	/*
		'"to": "' +inputs['to']+ '"' + ',' +
		'"from": "' +inputs['from']+ '"' + ',' +
		'"cc": "' +inputs['cc']+ '"' + ',' +
		'"bcc": "' +inputs['bcc']+ '"' + ',' +
		'"subject": "' +inputs['subject']+ '"' + ',' +
		'"attachmenttype": "' +inputs['attachmenttype']+ '"' + ',' +
		'"attachmentname": "' +inputs['attachmentname']+ '"' + ',' +
		'"attachment": "' +inputs['attachment']+ '"' + ',' +
		'"attachmentlanguages": "' +inputs['attachmentlanguages']+ '"' + ',' +
		'"attachmentcount": "' +inputs['attachmentcount']+ '"' + ',' +
		'"flags": "' +inputs['flags']+ '"' + ',' +
	*/
	var ymwsMethod = "SearchMessages";

	var searchParams = new String();	

	if (inputs['to'] != null){
		searchParams += 'to:"' +inputs['to']+ '" '; 
	}
	//Using fr instead of from because YQL query gets confused.
	if (inputs['fr'] != null){
		searchParams += 'from:"' +inputs['fr']+ '" ';
	}
	if (inputs['cc'] != null){
		searchParams += 'cc:"' +inputs['cc'] + '" ';
	}
	if (inputs['bcc'] != null){
		searchParams += 'bcc:"' +inputs['bcc'] + '"' + ' ' ;
	}
	if (inputs['subject'] != null){
		searchParams += 'subject:"' +inputs['subject']+ '" '  ;
	}
	if (inputs['attachmenttype'] != null){
		searchParams += 'attachmenttype:"' +inputs['attachmenttype'] + '"' + ' ' ;
	}
	if (inputs['attachmentname'] != null){
		searchParams += 'attachmentname:"' +inputs['attachmentname'] + '"' + " ";
	}
	if (inputs['attachment'] != null){
		searchParams += 'attachment:"' +escape(inputs['attachment']) +'"' + " ";
	}
	if (inputs['attachmentlanguages'] != null){
		searchParams += 'attachmentlanguages:"' +escape(inputs['attachmentlanguages'])+ '"' + " " ;
	}
	if (inputs['attachmentcount'] != null){
		searchParams += 'attachmentcount:"' +escape(inputs['attachmentcount']) + '"' +' ' ;
	}
	if (inputs['flags'] != null){
		searchParams += 'flags:"' +escape(inputs['flags']) +'"' + " ";
	}
	if (inputs["fid"] != null){
		searchParams += 'folder:' +escape(inputs['fid'])+ ' ';	
	}
	if (inputs['query'] != null){
		searchParams += inputs['query'];
	}

	var jsonStr = JSON.stringify(searchParams);
	//y.log(jsonStr);

	// get parameters for the given cascade method
	var params = '[{' +
			'     "search": {' +
								'"query":' +jsonStr+ 
							'}' +',' +
				 '"numInfo": "' +inputs['numInfo'] +'",' + 
				 '"numMid": "' +inputs['numMid']+ '",' +
				 '"sortKey": "'+inputs['sortKey']+ '",' +
				 '"sortOrder": "' +inputs['sortOrder']+ '",' +
				 '"refineBy": "' +inputs['refineBy']+ '"' +
			 '}]';


	var content = '{' +
	            '"method" : "' + ymwsMethod + '",' +
	            '"params" : ' + params +
        	  '}';

	return content;

}
