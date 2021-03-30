
console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

// Setting up user stream
var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg){
	//var fs = require('fs');
	//var json = JSON.stringify(eventMsg,null,2);
	//fs.writeFile("tweet.json", json);
	
	var replyto = eventMsg.in_reply_to_screen_name;
	var msgtext = eventMsg.text;
	var msgfrom = eventMsg.user.screen_name;
	
	console.log(replyto + ' ' + msgfrom);
	
	if (replyto === 'oimemine'){
		var newTweet = '@' + msgfrom + ' Thanks! #DanielBot';
		tweetIt(newTweet);
	}
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



