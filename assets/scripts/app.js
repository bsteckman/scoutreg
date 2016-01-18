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

    var registrant = document.querySelectorAll("input.registrant");
    var firstName;
    var lastName;
    var position;
    var email;
    var cellPhone;
    var isAdult = true;
    
    for (var i = 0; i < registrant.length; i++) {
       
        if (registrant[i].id === 'firstContactName') {
            firstName = registrant[i].value;
        } else if (registrant[i].id === 'lastContactName') {
            lastName = registrant[i].value;
        } else if (registrant[i].id === 'position') {
            position = registrant[i].value;
        } else if (registrant[i].id === 'email') {
            email = registrant[i].value;
        } else if (registrant[i].id === 'cellPhone') {
            cellPhone = registrant[i].value;
        } else if (registrant[i].id === 'isAdult'){
            isAdult = registrant[i].value;
        }        
    }
    var registrant1 = new Registrant(firstName, lastName, position, email, cellPhone, isAdult)
    registrantList.push(registrant1)
    
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