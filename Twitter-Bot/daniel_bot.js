console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var exec = require('child_process').exec;
var fs = require('fs');

var tweetCount = 1;

setInterval(tweetIt, 1000*20);
// Tweets an evolving series of images generated from Processing JS every 20 seconds
// Currently runs Processing repeatdly..like to fix that
// While images have evolving values they are random / not tied to previous images ..so limits Processing experiments
// Current setup runs for 15 images as does Processing js ...then Node just breaks
function tweetIt(){
	// Hang on ... This isn't working...not triggering new runs...just re read prio last batch..sigh
	var cmd = 'processing-java.exe --sketch=node1/test_image --run';
	exec(cmd, processing);
	
	function processing(){
		var filename = 'test_image/output' + tweetCount + '.png';
		var params = {
			encoding: 'base64'
		}
		var b64 = fs.readFileSync(filename, params);
		T.post('media/upload', {media_data: b64}, uploaded);
		
		function uploaded(err, data, response){
			var id = data.media_id_string;
			var tweet = {
				status: 'Randomly evolving images generated in Processing JS from node.js #coding #programming #DanielBot #experiments',
				media_ids: [id]
			}
		T.post('statuses/update', tweet, tweeted);	
		}
	}
	
	function tweeted(err, data, response){
		if(err){
			console.log('Oops...Something went wrong tweeting the image');
		} else {
			console.log('The image was tweeted!');
		}
	}
	tweetCount += 1;
}


// Tweet a thanks when a user follows DanielBot
var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg){
	console.log('Follow Event');
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	followTweet('@' + screenName + ' thanks for the follow!');
}

function followTweet(txt){
	var tweet = {
		status: txt
	}
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if(err){
			console.log('Oops...Something went wrong with the follow msg.');
		} else {
			console.log('Follow msg worked!');
		}
	}	
}

stream.on('tweet', tweetEvent);

// Tweet a thanks when a user @mentions? DanielBot
function tweetEvent(eventMsg){
	var replyto = eventMsg.in_reply_to_screen_name;
	var msgtext = eventMsg.text;
	var msgfrom = eventMsg.user.screen_name;
	
	console.log(replyto + ' ' + msgfrom);
	
	if (replyto === 'oimemine'){
		var newTweet = '@' + msgfrom + ' Thanks! #DanielBot';
		replyTweet(newTweet);
	}
}

function replyTweet(txt){
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if(err){
			console.log('Oops...Something went wrong with the response');
		} else {
			console.log('The response worked!');
		}
	}	
}




