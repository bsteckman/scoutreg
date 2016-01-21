//Shirt size prices
var shirtPrice = 10.00;
var shirtPriceXXL = 12.00;


var registrantList = [];

function Registrant(firstName, lastName, position, email, phoneNumber, isAdult, tShirt, contact) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.isAdult = isAdult;
    this.tShirt = tShirt;
    this.contact = contact;

    
    // Add these later
    // this.healthForm = healthForm;
}

function addRegistrant(e, form) {
    // Prevent page reload
    e.preventDefault();
    // define values
    var firstName = form['firstName'].value;
    var lastName = form['lastName'].value;
    var isAdult = form['isAdult'].value;    
    if(isAdult !== 'scout'){
        var position = form['position'].value;
        var email = form['email'].value;
        var phoneNumber = form['phoneNumber'].value;
        var contact = form['contact-id'].value;
    } else{
        var contact = 'scout';   
        var tShirt = form['tShirt'].value;  
    }
    //pass to constructor 
    var registrant1 = new Registrant(firstName, lastName, position, email, phoneNumber, isAdult, tShirt, contact);
    registrantList.push(registrant1);
    // clear form
    form.reset();
    //form.setAttribute("style","display: none");
    if(contact === "primary"){
        document.getElementById("primary-close-btn").click();
        } else if(contact === "secondary"){
        document.getElementById("secondary-close-btn").click();            
        } else if (contact === "scout"){
        document.getElementById("scout-close-btn").click();
        }
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
    //Shirt sizes for Adults
    var xxlShirts = 0;
    var xlShirts = 0;
    var lgShirts = 0;
    var mdShirts = 0;
    var smShirts = 0;
    //Shirt sizes for youth
    var ylgShirts = 0;
    var ymdShirts = 0;
    //iterate over the list
    for (var i = 0; i < registrantList.length; i++) {
        //read object 
        var currentUser = registrantList[i];
        //write to page
        console.log(currentUser.firstName);
        
        //junk
        if (currentUser.tShirt) {
            switch (currentUser.tShirt) {
                case "Adult-xxl":
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
        // document.getElementById("shirt-sizes").innerHTML = String(xxlShirts);
        // document.getElementById("shirt-prices").innerHTML = String(xxlShirts * shirtPriceXXL)
        
        document.getElementById("xxl-shirt-sizes").innerHTML = String("Total XXL Shirts: " + xxlShirts);
        document.getElementById("xxl-shirt-prices").innerHTML = String("Total XXL Shirt Price: " + xxlShirts * shirtPriceXXL);
        document.getElementById("xl-shirt-sizes").innerHTML = String("Total XL Shirts: " + xlShirts);
        document.getElementById("xl-shirt-prices").innerHTML = String("Total XL Shirt Price: " + xlShirts * shirtPrice);
        document.getElementById("md-shirt-sizes").innerHTML = String("Total MD Shirts: " + mdShirts);
        document.getElementById("md-shirt-prices").innerHTML = String("Total MD Shirt Price: " + mdShirts * shirtPrice);
        document.getElementById("sm-shirt-sizes").innerHTML = String("Total SM Shirts: " + smShirts);
        document.getElementById("sm-shirt-prices").innerHTML = String("Total SM Shirt Price: " + smShirts * shirtPrice);
        document.getElementById("ylg-shirt-sizes").innerHTML = String("Total YLG Shirts: " + ylgShirts);
        document.getElementById("ylg-shirt-prices").innerHTML = String("Total YLG Shirt Price: " + ylgShirts * shirtPrice);
        document.getElementById("ymd-shirt-sizes").innerHTML = String("Total YMD Shirts: " + ymdShirts);
        document.getElementById("ymd-shirt-prices").innerHTML = String("Total YMD Shirt Price: " + ymdShirts * shirtPrice);
        document.getElementById("total-shirt-prices").innerHTML = String("Total price is " + (xxlShirts * shirtPriceXXL + xlShirts * shirtPrice + mdShirts * shirtPrice + smShirts * shirtPrice + ylgShirts * shirtPrice + ymdShirts * shirtPrice));
        // document.write("shirt tally xl") = xlShirts
        // document.write("shirt price xl") = shirtPriceXL * xlShirts
    }
}

function displayModal(){
    document.getElementById("primary-modal-btn").click();
}

// function thankYouPage(){
//     var myRequest = new Request("")
// }
