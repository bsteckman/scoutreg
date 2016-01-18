function Registrant(firstName, lastName, position, email, phoneNumber, healthForm, dateRegistered, shirtSize, isAdult) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber=phoneNumber;
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
   var adult = document.querySelectorAll("input.registrant");
   for (var i = adult) {
       var dummy = "dummy";
   } 
}

function addScout() {
    
}