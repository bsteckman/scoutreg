var registrantList = []

function Registrant(firstName, lastName, position, email, phoneNumber, healthForm, dateRegistered, shirtSize, isAdult) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.healthForm = healthForm;
    this.dateRegistered = dateRegistered;
    this.shirtSize = shirtSize;
    this.isAdult = isAdult;

}

function Auth(packNumber, email) {
    this.packNumber = packNumber;
    this.email = email;
}

function addAdult() {
<<<<<<< HEAD
   var adult = document.querySelectorAll("input.registrant");
   
   var dummy = "dummy";
    
=======
    var adult = document.querySelectorAll("input.registrant");
    for (var i = 0; i < adult.length; i++) {
        console.log(adult[i].value);
    }
>>>>>>> e8a5547de453ba4489a8637ee47fd5b8ec430a3d
}

function addScout() {

}