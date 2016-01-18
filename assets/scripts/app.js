var registrantList = []

function Registrant(firstName, lastName, position, email, phoneNumber, isAdult) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.isAdult = isAdult;
    // this.healthForm = healthForm;
    // this.dateRegistered = dateRegistered;
    // this.shirtSize = shirtSize;
}

function Auth(packNumber, email) {
    this.packNumber = packNumber;
    this.email = email;
}

function addRegistrant() {

    var adult = document.querySelectorAll("input.registrant");
    var firstName;
    var lastName;
    var position;
    var email;
    var cellPhone;
    var isAdult = true;
    
    for (var i = 0; i < adult.length; i++) {
       
        if (adult[i].id === 'firstContactName') {
            firstName = adult[i].value;
        } else if (adult[i].id === 'lastContactName') {
            lastName = adult[i].value;
        } else if (adult[i].id === 'position') {
            position = adult[i].value;
        } else if (adult[i].id === 'email') {
            email = adult[i].value;
        } else if (adult[i].id === 'cellPhone') {
            cellPhone = adult[i].value;
        } else if (adult[i].id === 'isAdult'){
            isAdult = adult[i].value;
        }        
    }
    var adult1 = new Registrant(firstName, lastName, position, email, cellPhone, isAdult)
    registrantList.push(adult1)
    
    update();
}

function update() {
    if (registrantList.length  <=1) {
        addSecondAdult();
    } else if (registrantList.length <=2) {
        addTableLogic();
    }
}

function addSecondAdult() {
    
}

function addTableLogic() {
    
}