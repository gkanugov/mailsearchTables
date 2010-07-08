/*
 * Function to build Search Message request
 */


function searchMessagesReq(){


	/*
		'"to": "' +inputs['to']+ '"' + ',' +
		'"from": "' +inputs['from']+ '"' + ',' +
		'"cc": "' +inputs['cc']+ '"' + ',' +
		'"subject": "' +inputs['subject']+ '"' + ',' +
		'"attachmenttype": "' +inputs['attachmenttype']+ '"' + ',' +
		'"attachmentname": "' +inputs['attachmentname']+ '"' + ',' +
		'"attachmentcount": "' +inputs['attachmentcount']+ '"' + ',' +
		'"flags": "' +inputs['flags']+ '"' + ',' +
	*/

	var searchParams = { "simple" : inputs['query']  };

	

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
	var params = '[{' + ' "query" : ' + jsonStr + '}]';
	
	y.log(params);


	return params;

}


