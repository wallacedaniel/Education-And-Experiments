

// RESERVATION FORM
$("#reservation-submit").click(function() {

  var newReservation = {};

  $("#reservation input").each(function() {
		var elementID = $(this);
		if($(this).hasClass('form-control')){
			newReservation = addKeyValue(elementID, newReservation);
		}
		if($(this).hasClass('form-check-input') && $(this).hasClass('selected')){
			newReservation = addKeyValue(elementID, newReservation);
		}
	});

	$("#reservation textarea").each(function() {
		var elementID = $(this);
		newReservation = addKeyValue(elementID, newReservation);
	});

	var dbRef = 'reservations'
	dataInput(dbRef, newReservation);

	console.log(newReservation);
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

	console.log(newsLetterSignUp);
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



function dataInput(dbRef, data){

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

}

function gotData(data){
	console.log(data.val());
}

function errData(err){
	console.log('Error!');
	console.log(err);
}
