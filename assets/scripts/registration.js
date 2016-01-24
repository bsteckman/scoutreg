var contactForm = true;
//Get camp data
var registeredCamp = JSON.parse(localStorage.getItem("daycamps"));
var participantBtn = document.getElementById('registrant-modal-btn');

var initialAdult = $('initial-adult-message');
var extraAdult = $('extra-adult-needed');

//Master List
var registration = {
    discount: 0,
    participants: [],
    contacts: []
}
var registrantList = [];

function lockForm (){
    if(registration.contacts.length < 2){
        participantBtn.disabled = true;
    } else {
        participantBtn.disabled = false;
    }
}

function Contact(firstName, lastName, position, email, phoneNumber){
    this.id = getId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber = phoneNumber;
}

function Participant(firstName, lastName, tShirt, healthForm, isAdult) {
    this.id = getId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.isAdult = isAdult;
    this.tShirt = tShirt;
    this.healthForm = healthForm;
}

function getId(){
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function addRegistrant(e, form, type) {
    // Prevent page reload
    e.preventDefault();
		
		showMessage();
		
    // define values
    var firstName = form['firstName'].value;
    var lastName = form['lastName'].value;
    if(type === 'contact'){
        var position = form['position'].value;
        var email = form['email'].value;
        var phoneNumber = form['phoneNumber'].value;    
        registration.contacts.push(new Contact(firstName, lastName, position, email, phoneNumber));
    } else {
        var isAdult = form['isAdult'].value;
        var healthForm = form['healthForm'].value;
        var tShirt = form['tShirt'].value;
        registration.participants.push(new Participant(firstName, lastName, tShirt, healthForm, isAdult))
    }
    // clear form
    form.reset();
    update();
}

function showMessage(){
	if(registration.participants < 2){
		$('initial-adult-message').show();
	}
}

function drawContacts(currentUser){
    $('#contact-list').empty();
    var template = '';
    for(var i = 0; i < registration.contacts.length; i++){
        var currentUser = registration.contacts[i];
        template += '<li class="list-group-item col-sm-6" id="'+ currentUser.id +'"><h4 class="list-group-item-heading">' + currentUser.firstName + ' ' + currentUser.lastName +'</h4><p class="list-group-item-text"><b>Email <i class="glyphicon glyphicon-envelope"></i></b> ' + currentUser.email + '</p><p class="list-group-item-text"><b>Phone <i class="glyphicon glyphicon-earphone"></i></b> ' + currentUser.phoneNumber + '</p><p class="list-group-item-text"><b>Position:</b> ' + currentUser.position + '</p><div class="button-group"><button class="btn btn-raised btn-info" onclick="editContact(this, \'contacts\')">Edit</button><button class="btn btn-raised btn-danger" onclick="removeContact(this, \'contacts\')">Remove</button></div></div></div></li><li class="list-group-separator"></li>';
        //Appends currentuser to the table
    }
    $('#contact-list').append(template);
}

function findIndex(id, list){
    for(var i = 0; i < list.length; i++){
        if(list[i].id === id){
            return i;
        }
    }
}

function removeContact(button, list){
   var id = button.parentElement.parentElement.id;
   var index = findIndex(id, registration[list]); 
   registration[list].splice(index, 1);
   update();
}

function update() {
    //get html elements
    // var myTable = document.getElementById("my-table");
    //iterate over the list
    $('#participant-list').empty();
    resetPrices();

    for (var i = 0; i < registration.participants.length; i++) {
        //read object
        var adult; 
        var currentUser = registration.participants[i];
        //write to page
        if (currentUser.isAdult) {
           adult = "adult"; 
        }
        var myTemplate = '<li class="list-group-item' + adult + '" id="'+currentUser.id+'"><div class="list-group-item"><div class="row-action-primary checkbox"><label><input type="checkbox" value="' + currentUser.healthForm + '"></label></div><div class="row-content"><h4 class="list-group-item-heading">' + currentUser.firstName + ' ' + currentUser.lastName + '</h4><p class="list-group-item-text">Shirt Size: ' + currentUser.tShirt + '</p><div class="button-group"><button class="btn btn-raised btn-warning" onclick="edit(this, \'participants\')">Edit</button><button class="btn btn-raised btn-danger" onclick="removeContact(this, \'participants\')">Remove</button></div></div></div></li><li class="list-group-separator"></li>';
        //Appends currentuser to the table
        $('#participant-list').append(myTemplate);
        addShirt(currentUser);
    }
    lockForm();
    drawContacts();
    updatePrices();
}

function displayModal(id) {
    $("#"+id).modal({
        show: true
    });
}