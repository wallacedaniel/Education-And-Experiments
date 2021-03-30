

$( document ).ready(function() {
	// Initialize Firebase
	  var config = {
		apiKey: "      ",
		authDomain: "testproject-bbacc.firebaseapp.com",
		databaseURL: "https://testproject-bbacc.firebaseio.com",
		projectId: "testproject-bbacc",
		storageBucket: "",
		messagingSenderId: "530575455352"
	  };
	  firebase.initializeApp(config);
      //console.log(firebase);

	  var database = firebase.database();
	  var ref = database.ref('scores');

	  var data = {
		  name: "DJW",
		  score: 17700
	  }

	  ref.push(data);

	  ref.on('value', gotData, errData);
});

function gotData(data){
	console.log(data.val());
}

function errData(err){
	console.log('Error!');
	console.log(err);
}
