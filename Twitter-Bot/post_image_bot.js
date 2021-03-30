
console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var exec = require('child_process').exec;
var fs = require('fs');

tweetIt();

function tweetIt(){
	var cmd = 'processing-java.exe --sketch=node1/test_image --run';
	exec(cmd, processing);
	
	function processing(){
		var filename = 'test_image/output1.png';
		var params = {
			encoding: 'base64'
		}
		var b64 = fs.readFileSync(filename, params);
		T.post('media/upload', {media_data: b64}, uploaded);
		
		function uploaded(err, data, response){
			var id = data.media_id_string;
			var tweet = {
				status: 'An image generated in Processing JS from node.js #coding #programming',
				media_ids: [id]
			}
		T.post('statuses/update', tweet, tweeted);	
		}
	}
	
	function tweeted(err, data, response){
		if(err){
			console.log('Oops...Something went wrong');
		} else {
			console.log('It worked!');
		}
	}	
}









