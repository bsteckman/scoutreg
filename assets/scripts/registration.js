var contactForm = true;
//Get camp data
var registeredCamp = JSON.parse(localStorage.getItem("daycamps"));

//Master List
var registrantList = [];

function Participant(firstName, lastName, tShirt, healthForm, isAdult, position, email, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.isAdult = isAdult;
    this.tShirt = tShirt;
    this.healthForm = healthForm;
}


function addRegistrant(e, form) {
    // Prevent page reload
    e.preventDefault();
    // define values
    var firstName = form['firstName'].value;
    var lastName = form['lastName'].value;
    var isAdult = form['isAdult'].value;
    var tShirt = form['tShirt'].value;
    var healthForm = form['healthForm'].value;
    var position = form['position'].value;
    var email = form['email'].value;
    var phoneNumber = form['phoneNumber'].value;
    
    var registrant = new Participant(firstName, lastName,tShirt, healthForm, isAdult, position, email, phoneNumber);

     
    registrantList.push(registrant);
    // clear form
    form.reset();
    
    document.querySelectorAll('button.close-btn')[0].click();
    
    update();
}

function update() {
    //get html elements
    // var myTable = document.getElementById("my-table");
    //iterate over the list
    $('#registrant-list').empty();
    resetPrices();

    for (var i = 0; i < registrantList.length; i++) {
        //read object
        var adult; 
        var currentUser = registrantList[i];
        //write to page
        if (currentUser.isAdult) {
           adult = "adult"; 
        }
        var myTemplate = '<li class="list-group-item' + adult + '"><div class="list-group-item"><div class="row-action-primary checkbox"><label><input type="checkbox" value="' + currentUser.healthForm + '"></label></div><div class="row-content"><h4 class="list-group-item-heading">' + currentUser.firstName + ' ' + currentUser.lastName + '</h4><p class="list-group-item-text">Shirt Size: ' + currentUser.tShirt + '</p></div></div></li><li class="list-group-separator"></li>';
        
        //Appends currentuser to the table
        $('#registrant-list').append(myTemplate);
        
        addShirt(currentUser);
    }
    
    updatePrices();
}

function displayModal(type) {
    //TODO: If registrantList < 0 
    $("#registration-modal").modal({
        show: true
    });
}