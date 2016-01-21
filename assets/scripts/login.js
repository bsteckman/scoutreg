//DayCamp constructor builds camp objects and pushes them to the dayCamps array
var dayCamps = []; 

function DayCamp(camp, program, dates, days,location ,checkInTime ,endTime ,district, stake ) {
    this.id = camp;
    this.program = program;
    this.dates = dates;
    this.days = days;
    this.location = location;
    this.checkInTime = checkInTime;
    this.endTime = endTime;
    this.district = district
    this.stake = stake
    dayCamps.push(this)
}


var camp1 = new DayCamp(1, "Cub & Web", "June 1", "Wed","Optimist Park, Elmcrest & 5th North, Mountain Home","8:30","3:30","Oregon Trail","Mountain Home");
var camp2 = new DayCamp(2, "Cub & Web", "June 2", "Thurs","Nampa South LDS Stake Center 7829 Deer Flat Rd. Nampa","8:30","3:30","Centennial","Cent-1");
var camp3 = new DayCamp(3, "Cub & Web", "June 3", "Fri",  "Nampa South LDS Stake Center 7829 Deer Flat Rd. Nampa","8:30","3:30","Centennial","Cent-2");
var camp4 = new DayCamp(4, "Cub & Web", "June 4", "Sat", "LDS Stake Center Grounds 980 W. Central Rd. Emmett","8:30","3:30","Gem State","Gem-1");
var camp5 = new DayCamp(5, "Cub & Web", "June 8", "Wed", "LDS Stake Center Grounds 3700 S. Maple Grove Rd. Boise","8:30","3:30","Oregon Trail","OT-1");
var camp6 = new DayCamp(6, "Cub & Web", "June 9", "Thurs","LDS Stake Center Grounds 3700 S. Maple Grove Rd. Boise","8:30","3:30","Oregon Trail","OT-1");
var camp7 = new DayCamp(7, "Cub & Web", "June 10", "Fri", "Montgomery Farm 668 Sugar Ave. Ontario", "8:30","3:30","Seven Rivers","7R-1");
var camp8 = new DayCamp(8, "Cub & Web", "June 11", "Sat", "Montgomery Farm 668 Sugar Ave. Ontario", "8:30","3:30","Seven Rivers","7R-2");
var camp9 = new DayCamp(9, "Web Only" , "June 15-16", "Wed-Thurs", "Curtis Park Entrance at 14230 Channel Rd. Caldwell", "1:30", "8:30","Centennial", "CENT-3&4");
var camp10 = new DayCamp(10, "Cub & Web", "June 17", "Fri", "LDS Stake Center Grounds 3700 S. Maple Grove Rd. Boise","8:30","3:30","Gem State","Gem-2");
var camp11 = new DayCamp(11, "Cub & Web", "June 18", "Sat", "LDS Stake Center Grounds 3700 S. Maple Grove Rd. Boise","8:30","3:30","Oregon Trail","OT-3");
var camp12 = new DayCamp(12, "Cub & Web", "June 22", "Wed", "LDS Stake Center Grounds 3700 S. Maple Grove Rd. Boise","8:30","3:30","Oregon Trail","OT-4");
var camp13 = new DayCamp(13, "Cub & Web", "June 23", "Thurs","Nampa South LDS Stake Center 7829 Deer Flat Rd. Nampa","8:30","3:30","Centennial","Cent-5");
var camp14 = new DayCamp(14, "Cub & Web", "June 24", "Fri","Nampa South LDS Stake Center 7829 Deer Flat Rd. Nampa","8:30","3:30","Centennial","Cent-6");
var camp15 = new DayCamp(15, "Cub & Web", "June 25", "Sat","Nampa South LDS Stake Center 7829 Deer Flat Rd. Nampa","8:30","3:30","Centennial","Cent-7");
var camp16 = new DayCamp(16, "Cub & Web", "June 25", "Sat", "Zim's Hot Spings 2995 Zims Road, New Meadows", "8:30", "3:30", "Seven Rivers", "7R-3");
var camp17 = new DayCamp(17, "Web Only", "June 29-30", "Wed-Thurs", "Curtis Park, Entrance at 14230 Channel Rd, Caldwell", "1:30", "8:30", "Centennial", "Cent-8&9");
var camp18 = new DayCamp(18, "Cub & Web", "July 6", "Wed", "LDS Stake Center Grounds 3700 S. Maple Grove Rd, Boise", "8:30", "3:30", "Oregon Trail", "OT-5");
var camp19 = new DayCamp(19, "Cub & Web", "July 7", "Thurs", "LDS Stake Center Grounds 3700 S. Maple Grove Rd, Boise", "8:30", "3:30", "Oregon Trail", "OT-6");
var camp20 = new DayCamp(20, "Cub & Web", "July 8", "Fri", "LDS Stake Center Grounds 3700 S. Maple Grove Rd, Boise", "8:30", "3:30", "Gem State", "Gem-3");
var camp21 = new DayCamp(21, "Cub & Web", "July 9", "Sat", "LDS Stake Center Grounds 3700 S. Maple Grove Rd, Boise", "8:30", "3:30", "Gem State", "Gem-4");
var camp22 = new DayCamp(22, "Cub & Web", "July 13", "Wed", "LDS Stake Center Grounds 3700 S. Maple Grove Rd, Boise", "8:30", "3:30", "Gem State", "Gem-5");
var camp23 = new DayCamp(23, "Cub & Web", "July 14", "Thurs", "LDS Stake Center Grounds 3700 S. Maple Grove Rd, Boise", "8:30", "3:30", "Gem State", "Gem-6");
var camp24 = new DayCamp(24, "Web Only", "July 15-16", "Fri-Sat", "Curtis Park, 14230 Entrance at Channel Rd, Caldwell", "1:30", "3:30", "Gem State", "Gem-7&8");

function dropDown() {
    var select = document.getElementById("selectCamp");
     
    for(var i = 0; i < dayCamps.length; i++) {
        var camp = dayCamps[i];
        var el = document.createElement('option');
        el.textContent = camp.stake + ':  ' + camp.dates ;
        el.value = camp.id;
        select.appendChild(el);
    }
}

dropDown();

function submitRegistration(){
    localStorage.SetItem("dayCamps",JSON.stringify(email, troopNumber));
}