function DayCamp(camp, program, dates, days,location ,checkInTime ,endTime ,district, stake ) {
    this.camo = camp;
    this.program = program;
    this.dates = dates;
    this.days = days;
    this.location = location;
    this.checkInTime = checkInTime;
    this.endTime = endTime;
    this.district = district
    this.stake = stake
    
}


var camp1 = new DayCamp("#1", "Cub & Web", "June 1", "Wed","Optimist Park, Elmcrest & 5th North, Mountain Home","8:30","3:30","Oregon Trail","mountain Home");
var camp2 = new DayCamp("#2", "Cub & Web", "June 2", "Thurs","Nampa South LDS Stake Center 7829 Deer Flat Rd. Nampa","8:30","3:30","Centennial","Cent-1");
var camp3 = new DayCamp("#3", "Cub & Web", "June 3", "Fri",  "Nampa South LDS Stake Center 7829 Deer Flat Rd. Nampa","8:30","3:30","Centennial","Cent-2");
var camp4 = new DayCamp("#4", "Cub & Web", "June 4", "Sat", "LDS Stake Center Grounds 980 W. Central Rd. Emmett","8:30","3:30","Gem State","Gem-1");
var camp5 = new DayCamp("#5", "Cub & Web", "June 8", "Wed", "LDS Stake Center Grounds 3700 S. Maple Grove Rd. Boise","8:30","3:30","Oregon Trail","OT-1");
var camp6 = new DayCamp("#6", "Cub & Web", "June 9", "Thurs","LDS Stake Center Grounds 3700 S. Maple Grove Rd. Boise","8:30","3:30","Oregon Trail","OT-1");
var camp7 = new DayCamp("#7", "Cub & Web", "June 10", "Fri", "Montgomery Farm 668 Sugar Ave. Ontario", "8:30","3:30","Seven Rivers","7R-1");
var camp8 = new DayCamp("#8", "Cub & Web", "June 11", "Sat", "Montgomery Farm 668 Sugar Ave. Ontario", "8:30","3:30","Seven Rivers","7R-2");
var camp9 = new DayCamp("#9", "Web Only" , "June 15-16", "Wed-Thurs", "Curtis Park Entrance at 14230 Channel Rd. Caldwell", "1:30", "8:30", "CENT-3&4");
var camp10 = new DayCamp("#10", "Cub & Web", "June 17", "Fri", "LDS Stake Center Grounds 3700 S. Maple Grove Rd. Boise","8:30","3:30","Gem State","Gem-2");
var camp11 = new DayCamp("#11", "Cub & Web", "June 18", "Sat", "LDS Stake Center Grounds 3700 S. Maple Grove Rd. Boise","8:30","3:30","Oregon Trail","OT-3");
var camp12 = new DayCamp("#12", "Cub & Web", "June 22", "Wed", "LDS Stake Center Grounds 3700 S. Maple Grove Rd. Boise","8:30","3:30","Oregon Trail","OT-4");
var camp13 = new DayCamp("#13", "Cub & Web", "June 23", "Thurs","Nampa South LDS Stake Center 7829 Deer Flat Rd. Nampa","8:30","3:30","Centennial","Cent-5");
var camp14 = new DayCamp("#14", "Cub & Web", "June 24", "Fri","Nampa South LDS Stake Center 7829 Deer Flat Rd. Nampa","8:30","3:30","Centennial","Cent-6"););
var camp15 = new DayCamp("#15", "Cub & Web", "June 25", "Sat","Nampa South LDS Stake Center 7829 Deer Flat Rd. Nampa","8:30","3:30","Centennial","Cent-7"););
var camp16 = new DayCamp("#16", "Cub & Web", "June 25", "Sat");
var camp17 = new DayCamp("#17", "Web Only", "June 29-30", "Wed-Thurs");
var camp18 = new DayCamp("#18", "Cub & Web", "July 6", "Wed");
var camp19 = new DayCamp("#19", "Cub & Web", "July 7", "Thurs");
var camp20 = new DayCamp("#20", "Cub & Web", "July 8", "Fri");
var camp21 = new DayCamp("#21", "Cub & Web", "July 9", "Sat");
var camp22 = new DayCamp("#22", "Cub & Web", "July 13", "Wed");
var camp23 = new DayCamp("#23", "Cub & Web", "July 14", "Thrus");
var camp24 = new DayCamp("#24", "Web Only", "July 15-16", "Fri-Sat");

var DayCamps = [];
DayCamps.push(camp1);
DayCamps.push(camp2);
DayCamps.push(camp3);
DayCamps.push(camp4);
DayCamps.push(camp5);
DayCamps.push(camp6);
DayCamps.push(camp7);
DayCamps.push(camp8);
DayCamps.push(camp9);
DayCamps.push(camp10);
DayCamps.push(camp11);
DayCamps.push(camp12);
DayCamps.push(camp13);
DayCamps.push(camp14);
DayCamps.push(camp15);
DayCamps.push(camp16);
DayCamps.push(camp17);
DayCamps.push(camp18);
DayCamps.push(camp19);
DayCamps.push(camp20);
DayCamps.push(camp21);
DayCamps.push(camp22);
DayCamps.push(camp23);
DayCamps.push(camp24);

var registrantList = [];

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
    //pass to constructor 
    var registrant1 = new Registrant(firstName, lastName, position, email, phoneNumber, isAdult);
    registrantList.push(registrant1);
    // clear form
    form.reset();
    //form.setAttribute("style","display: none");
    // document.getElementById("close-btn").click();
    if (document.getElementById("my-modal-btn").innerText == "Set Secondary Contact") {
        document.getElementById("my-modal-btn").remove();
        return;
    } else {
        document.getElementById("my-modal-btn").innerText = "Set Secondary Contact";
    }
}

function update() {
    // write registrantList to table
    for (var i = 0; i < Registrant.length; i++) {
        var registrantElem = document.createElement('td');
        registrantElem.textContent = Registrant[i].name;
        document.getElementById('table-Display').appendChild(registrantElem);
    }
}

function addTableLogic() {

}