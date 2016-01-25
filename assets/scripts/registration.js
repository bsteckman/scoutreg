var registration;
var formData;

function lockForm() {
    var participantBtn = document.getElementById('registrant-modal-btn');
    formData.contacts = formData.contacts || {};
    var contacts = Object.keys(formData.contacts).length;
    if (contacts < 2) {
        participantBtn.disabled = true;
    } else {
        participantBtn.disabled = false;
    }
}

function Contact(firstName, lastName, position, email, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber = phoneNumber;
}

function Participant(firstName, lastName, tShirt, healthForm, isAdult) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isAdult = isAdult;
    this.tShirt = tShirt;
    this.healthForm = healthForm;
}

function addRegistrant(e, form, type) {
    // Prevent page reload
    e.preventDefault();
    // define values
    var firstName = form['firstName'].value;
    var lastName = form['lastName'].value;
    if (type === 'contact') {
        var position = form['position'].value;
        var email = form['email'].value;
        var phoneNumber = form['phoneNumber'].value;
        registration.child('contacts').push(new Contact(firstName, lastName, position, email, phoneNumber));
    } else {
        var isAdult = form['isAdult'].value;
        var healthForm = form['healthForm'].value;
        var tShirt = form['tShirt'].value;
        registration.child('participants').push(new Participant(firstName, lastName, tShirt, healthForm, isAdult))
    }
    // clear form
    form.reset();
}

function editContact(btn, list) {
    debugger;
    var key = btn.id;
    var user = formData[list][key] || {};
    var form = document.getElementById(list + '-form');
    
    //set form details
    for (var key in user) {
        form[key].value = user[key];
    }
    displayModal(list + '-modal')
}

function showMessage() {
    var regMessage = $('#reg-message');
    if (!formData.participants) {
        return;
    }
    formData.participants = formData.participants || {};
    var participants = Object.keys(formData.participants).length;
    if (participants < 2) {
        regMessage.text('Two adult participants are required prior to adding scouts');
    } else if (participants % 5 === 0 && participants > 10) {
        regMessage.text('Another adult leader is required to continue adding scouts');
    } else {
        regMessage.text('Add Scouts to your registration');
    }
}

function drawContacts(currentUser) {
    $('#contact-list').empty();
    var template = '';

    for (var key in formData.contacts) {
        var currentUser = formData.contacts[key];
        template += '<li class="list-group-item text-left"><h4 class="list-group-item-heading">' + currentUser.firstName + ' ' + currentUser.lastName + '</h4><p class="list-group-item-text"><b>Email <i class="glyphicon glyphicon-envelope"></i></b> ' + currentUser.email + '</p><p class="list-group-item-text"><b>Phone <i class="glyphicon glyphicon-earphone"></i></b> ' + currentUser.phoneNumber + '</p><p class="list-group-item-text"><b>Position:</b> ' + currentUser.position + '</p><div class="button-group"><button class="btn btn-raised btn-danger" id="' + key + '" onclick="removeContact(this, \'contacts\')"><i class="glyphicon glyphicon-trash"></i> Remove</button></div></div></div></li>';
        //Appends currentuser to the table
    }
    $('#contact-list').append(template);
}

// function findKey(id, list) {
// 	for (var key in list) {
// 		if (list[key].id === id) {
// 			return key;
// 		}
// 	}
// }

function toggleAdult(btn) {
    btn.value = !btn.value;
}

function removeContact(button, list) {
    var key = button.id;
    registration.child(list).child(key).remove();
}

function update() {
    $('#pack-num').text(user.pack);
    $('#camp-num').text(db.getCamp(user.camp).id);
    showMessage();
    //get html elements
    // var myTable = document.getElementById("my-table");
    //iterate over the list
    $('#participant-list').empty();
    resetPrices();

    for (var key in formData.participants) {
        //read object
        var adult;
        var currentUser = formData.participants[key];
        //write to page
        if (currentUser.isAdult) {
            adult = "adult";
        }
        var myTemplate = '<li class="list-group-item participant ' + adult + '"><div class="row-content"><div class="button-group pull-right"><button class="btn btn-raised btn-danger" id="' + key + '" onclick="editContact(this, \'participants\')"><i class="glyphicon glyphicon-edit"></i></button><button class="btn btn-raised btn-danger" id="' + key + '" onclick="removeContact(this, \'participants\')"><i class="glyphicon glyphicon-trash"></i></button></div><h4 class="list-group-item-heading">' + currentUser.firstName + ' ' + currentUser.lastName + '</h4><p class="list-group-item-text">Shirt Size: ' + currentUser.tShirt + '</p><p class="list-group-item-text">Health Form: ' + currentUser.healthForm + '</p></div></div></li>';
        //Appends currentuser to the table
        $('#participant-list').append(myTemplate);
        addShirt(currentUser);
    }
    lockForm();
    drawContacts();
    updatePrices();
}

function displayModal(id) {
    $("#" + id).modal({
        show: true
    });
}