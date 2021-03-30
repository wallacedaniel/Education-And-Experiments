
console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);



function tweetIt(){
	
	var r = Math.floor(Math.random()*100);
	
	var tweet = {
		status: 'Here is a random number ' + r + ' #randomnumber from node.js'
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


setInterval(tweetIt, 1000*20)












