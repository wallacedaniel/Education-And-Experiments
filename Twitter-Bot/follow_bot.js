
console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

// Setting up user stream
var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg){
	console.log('Follow Event');
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('@' + screenName + ' thanks for the follow!');
}

function tweetIt(txt){
	
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if(err){
			console.log('Oops...Something went wrong');
		} else {
			console.log('It worked!');
		}
	}	
}













