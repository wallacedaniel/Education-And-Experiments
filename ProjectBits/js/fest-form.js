

// VENDOR FORM
$("#vendor-submit").click(function() {

  var newVendor = {};

  $("#vendor input").each(function() {
		var elementID = $(this);
		if($(this).hasClass('form-control')){
			newVendor = addKeyValue(elementID, newVendor);
		}
		if($(this).hasClass('form-check-input') && $(this).hasClass('selected')){
			newVendor = addKeyValue(elementID, newVendor);
		}
	});

	$("#vendor textarea").each(function() {
		var elementID = $(this);
		newVendor = addKeyValue(elementID, newVendor);
	});

	var dbRef = 'vendorsList'
	dataInput(dbRef, newVendor);

	console.log(newVendor);
});


// MAILING LIST SIGN UP FORM
$("#mailing-submit").click(function() {

	 var mailingSignUp = {};

	$("#mailing-list input").each(function() {
		var elementID = $(this);
		mailingSignUp = addKeyValue(elementID, mailingSignUp);
	});

	elementID = $("#state-select");
	mailingSignUp = addKeyValue(elementID, mailingSignUp);

	var dbRef = 'mailingList'
	dataInput(dbRef, mailingSignUp);

	console.log(mailingSignUp);
});


// FUNCTIONS

// Assigns key value pairs to form objects
function addKeyValue(elementID, formObjName){
	var value = elementID.val();
	var key = elementID.attr('name');
	// filters promo checkbox from result
	if(key != 'promo'){
		obj = { [key]: value };
		$.extend(formObjName, obj);
	}
	return formObjName;
}

// Toggles 'selected' class on inputs
$('.form-check-input').click(function() {
	$(this).toggleClass('selected');
});

// Enables / disables and toggles 'required' on mailing address info on check change
$('#mailing-check').click(function() {
	$('.additional-info input').each(function(){
		$(this).prop('disabled', function(i, v) { return !v; });
		$(this).prop('required', function(i, v) { return !v; });
		if($(this).hasClass('address2')){
			$(this).removeAttr('required');
		}
	});
	$('.additional-info select').each(function(){
		$(this).prop('disabled', function(i, v) { return !v; });
		$(this).prop('required', function(i, v) { return !v; });
	});
});

// Removes 'Select' option from selectable options
$(document).ready(function(){
	$('option[value="select"]').attr("disabled", "disabled");
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
