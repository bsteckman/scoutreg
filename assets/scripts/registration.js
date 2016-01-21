//Shirt size prices
var shirtPrice = 10.00;
var shitPriceXl = 12.00;
//Shirt sizes for Adults
var xxlShirts = 0;
var xlShirts = 0;
var lgShirts = 0;
var mdShirts = 0;
var smShirts = 0;
//Shirt sizes for youth
var ylgShirts = 0;
var ymdShirts = 0;

var registrantList = [];

function Registrant(firstName, lastName, position, email, phoneNumber, isAdult, contact) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.isAdult = isAdult;
    this.contact = contact;

    
    // Add these later
    // this.healthForm = healthForm;
    // this.dateRegistered = dateRegistered;
    // this.shirtSize = shirtSize;
}

// function Auth(packNumber, email) {
//     this.packNumber = packNumber;
//     this.email = email;
// }


function addRegistrant(e, form) {
    // Prevent page reload
    e.preventDefault();
    // define values
    var firstName = form['firstName'].value;
    var lastName = form['lastName'].value;
    var position = form['position'].value;
    var email = form['email'].value;
    var phoneNumber = form['phoneNumber'].value;
    var isAdult = true;
    var contact = form['contact-id'].value;
    //pass to constructor 
    var registrant1 = new Registrant(firstName, lastName, position, email, phoneNumber, isAdult);
    registrantList.push(registrant1);
    // clear form
    form.reset();
    //form.setAttribute("style","display: none");
    document.getElementById("close-btn").click();
    // if (document.getElementById("my-modal-btn").innerText == "Set Secondary Contact") {
    //     document.getElementById("my-modal-btn").remove();
    //     return;
    // } else {
    //     document.getElementById("my-modal-btn").innerText = "Set Secondary Contact";
    // }
}


function update() {
    //get html elements
    var myTable = document.getElementById("my-table");
    //iterate over the list
    for (var i = 0; i < registrantList.length; i++) {
        //read object 
        var currentUser = registrantList[i];
        //write to page
        console.log(currentUser.firstName);
        
        //junk
        if (currentUser.shirtSize) {
            switch(currentUser.shirtSize) {
                case "Adult-2xl":
                xxlShirts++;
                break;
                case "Adult-xl":
                xlShirts++;
                break;
                case "Adult-lg":
                lgShirts++;
                break;
                case "Adult-md":
                mdShirts++;
                break;
                case "Adult-sm":
                smShirts++;
                break;
                case "youth-lg":
                ylgShirts++;
                break;
                case "youth-md":
                ymdShirts++;
                break;        
            }
        }
        // document.write("shirt tally xl") = xlShirts
        // document.write("shirt price xl") = shirtPriceXL * xlShirts
    }


}

function displayModal(){
    document.getElementById("primary-modal-btn").click();
}