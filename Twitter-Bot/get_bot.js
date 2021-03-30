console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

//T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
//  console.log(data)
//})

var params = {
	q: 'cats',
	count: 5
}

T.get('search/tweets', params, gotData);


//function gotData(err, data, response){
//	console.log(data);
//}

function gotData(err, data, response){
	var tweets = data.statuses;
	for(var i = 0; i < tweets.length; i++){   
		console.log(tweets[i].text);
	}
}














