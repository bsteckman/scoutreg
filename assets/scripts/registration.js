
var registeredCamp = JSON.parse(localStorage.getItem("daycamps"));
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
    // Add these later
}

// function Participant(first, last, shirt, healthform, isAdult){
//     this.first = first;
//     this.last = last;
//     this.shirt = shirt;
//     this.healthForm = healthform;
//     this.isAdult = isAdult;
// }



function addRegistrant(e, form) {
      
    // Prevent page reload
    e.preventDefault();
    // define values
    var firstName = form['firstName'].value;
    var lastName = form['lastName'].value;
    var isAdult = form['isAdult'].value;
    var tShirt = form['tShirt'].value;
    
    //pass to constructor 

    var registrant;
    if (contact !== 'scout') {
        var position = form['position'].value;
        var email = form['email'].value;
        var phoneNumber = form['phoneNumber'].value;
        registrant = new Registrant(firstName, lastName, position, email, phoneNumber, isAdult, tShirt, contact, healthForm);
    } else {
        var healthForm = form['healthForm'].value;
        registrant = new Participant(firstName, lastName, tShirt, healthForm, isAdult)
    }


    registrantList.push(registrant);
    // clear form
    form.reset();
    
    //form.setAttribute("style","display: none");
    // if (contact === "primary") {
        // document.getElementById("primary-close-btn").click();
    // } else if (contact === "secondary") {
        // document.getElementById("secondary-close-btn").click();
    // } else if (contact === "scout") {
        // document.getElementById("scout-close-btn").click();
    // }
    // if (document.getElementById("my-modal-btn").innerText == "Set Secondary Contact") {
    //     document.getElementById("my-modal-btn").remove();
    //     return;
    // } else {
    //     document.getElementById("my-modal-btn").innerText = "Set Secondary Contact";
    // }
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
        var currentUser = registrantList[i];
        //write to page
        if (currentUser.isAdult) { var adult = "adult"; } else { adult = "" }
        var myTemplate = '<li class="list-group-item' + adult + '"><div class="list-group-item"><div class="row-action-primary checkbox"><label><input type="checkbox" value="' + currentUser.healthForm + '"></label></div><div class="row-content"><h4 class="list-group-item-heading">' + currentUser.firstName + ' ' + currentUser.lastName + '</h4><p class="list-group-item-text">Shirt Size: ' + currentUser.tShirt + '</p></div></div></li><li class="list-group-separator"></li>';
        $('#registrant-list').append(myTemplate);
        addShirt(currentUser);
    }
    
    updatePrices();
}

function displayModal() {
    document.getElementById("primary-modal-btn").click();
}

// function thankYouPage(){
//     var myRequest = new Request("")
// }
