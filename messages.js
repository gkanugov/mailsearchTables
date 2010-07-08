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

	var params = '[{' + ' "query" : ' + jsonStr + '}]';
	
	y.log(params);

	var content = '{' + '"method" : "search" ,  "params" : ' + params + '}';


	return content;

}


