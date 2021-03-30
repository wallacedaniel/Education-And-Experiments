// get() search ..by hash/ loc/ user etc etc
// post() tweeting

// stream ... assign events   user / public / site

console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

//T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  //console.log(data)
//})

var tweet = {
	status: 'tweeting from node.js 2'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
	if(err){
		console.log('Oops...Something went wrong');
	} else {
		console.log('It worked!');
	}
}









