var registrantList = []

function Registrant(firstName, lastName, position, email, phoneNumber, isAdult) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.isAdult = isAdult;
    
    // Add these later
    // this.healthForm = healthForm;
    // this.dateRegistered = dateRegistered;
    // this.shirtSize = shirtSize;
}

// function Auth(packNumber, email) {
//     this.packNumber = packNumber;
//     this.email = email;
// }


function addContact(e, form){
    // Prevent page reload
    e.preventDefault();
    // define values
    var firstName = form['firstName'].value;
    var lastName = form['lastName'].value;
    var position = form['position'].value;
    var email = form['email'].value;
    var phoneNumber = form['phoneNumber'].value;
    var isAdult = true;
    //pass to constructor 
    var registrant1 = new Registrant(firstName, lastName, position, email, phoneNumber, isAdult);
    registrantList.push(registrant1);
    // clear form
    form.reset();
    //form.setAttribute("style","display: none");
    document.getElementById("close-btn").click();
    if (document.getElementById("modal-btn").innerText == "Set Secondary Contact") {
        document.getElementById("modal-btn").remove();
        return;
    } else {
        document.getElementById("modal-btn").innerText = "Set Secondary Contact";       
    }
      
   
}

function update() {
    // write registrantList to table
}

$("#second-btn").click(function () {
    document.getElementById("close-btn").click();
    document.getElementById("modal-btn").click();
});