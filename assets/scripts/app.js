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


function addContact(e, form){
    e.preventDefault();
    
    //pass to constructor 
    var firstName = form['firstName'].value;
    var lastName = form['lastName'].value;
    var position = form['position'].value;
    var email = form['email'].value;
    var phoneNumber = form['phoneNumber'].value;
    var isAdult = true;
    var registrant1 = new Registrant(firstName, lastName, position, email, phoneNumber, isAdult);
    registrantList.push(registrant1);
}

function update() {
    if (registrantList.length <= 1) {
        addSecondAdult();
    } else if (registrantList.length <= 2) {
        addTableLogic();
    }
}

function addSecondAdult() {
}

function addTableLogic() {

}





    for(var i = 0; i < Registrant.length; i++){
        var registrantElem = document.createElement('td');
        registrantElem.textContent = Registrant[i].name;
        document.getElementById('table-Display').appendChild(registrantElem);