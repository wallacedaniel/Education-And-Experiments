// RESERVATION FORM
$("#reservation-submit").click(function() {

  var newReservation = {};
  var newsLetterSignUp = {};

  $("#reservation input").each(function() {
		var elementID = $(this);
		if($(this).hasClass('form-control')){
			newReservation = addKeyValue(elementID, newReservation);

			if($('#news-include-radio').prop('checked') && (($(this).attr('id')== 'fname-input') || ($(this).attr('id')== 'lname-input') || ($(this).attr('id')== 'email-input'))){
				newsLetterSignUp = addKeyValue(elementID, newsLetterSignUp);
			}

		}
		if($(this).hasClass('form-check-input') && $(this).hasClass('selected') && ($(this).attr('id') != 'news-include-radio')) {
			newReservation = addKeyValue(elementID, newReservation);
		}
	});

	$("#reservation textarea").each(function() {
		var elementID = $(this);
		newReservation = addKeyValue(elementID, newReservation);
	});

	var dbRef = 'reservations';
	console.log(newsLetterSignUp);
	//var dbRef2 = 'signUp'
	dataInput(dbRef, newReservation); //, dbRef2, newsLetterSignUp
});


// NEWSLETTER SIGN UP FORM
$("#signUp-submit").click(function() {

	 var newsLetterSignUp = {};

	$("#newsletter input").each(function() {
		var elementID = $(this);
		newsLetterSignUp = addKeyValue(elementID, newsLetterSignUp);
	});

	var dbRef = 'signUp'
	dataInput(dbRef, newsLetterSignUp);
});

// FUNCTIONS
// Assigns key value pairs to form objects
function addKeyValue(elementID, formObjName){
	var value = elementID.val();
	var key = elementID.attr('name');
	obj = { [key]: value };
	$.extend(formObjName, obj);
	return formObjName;
}

// Toggles 'selected' class on inputs
$('.form-check-input').click(function() {
	$(this).toggleClass('selected');
});

function dataInput(dbRef, data){  //, dbRef2, data2

	var config = {
		apiKey: "",
		authDomain: "testproject-bbacc.firebaseapp.com",
		databaseURL: "https://testproject-bbacc.firebaseio.com",
		projectId: "testproject-bbacc",
		storageBucket: "",
		messagingSenderId: "530575455352"
    };

    firebase.initializeApp(config);
	var database = firebase.database();
	var ref = database.ref(dbRef);
	ref.push(data);
	ref.on('value', gotData, errData);
/*
	if(dbRef2){
		var ref2 = database.ref(dbRef2);
		ref2.push(data2);
		ref2.on('value', gotData, errData);
	}
*/
}

function gotData(data){
	var input = data.val();
	var keys = Object.keys(input);

	for(var i = 0; i < keys.length; i++){
		var k = keys[i];
	}
}

function errData(err){
	console.log('Error!');
	console.log(err);
}
