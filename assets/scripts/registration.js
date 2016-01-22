// Shirt size prices
var shirtPrice = 10.00;
var shirtPriceXXL = 12.00;

//Shirt sizes for Adults
var xxlShirts = 0;
var xlShirts = 0;
var lgShirts = 0;
var mdShirts = 0;
var smShirts = 0;
//Shirt sizes for youth
var ylgShirts = 0;
var ymdShirts = 0;
var registeredCamp = JSON.parse(localStorage.getItem("daycamps"));
var registrantList = [];

function Registrant(firstName, lastName, position, email, phoneNumber, isAdult, tShirt, contact, healthForm) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.isAdult = isAdult;
    this.tShirt = tShirt;
    this.contact = contact;
    this.healthForm = healthForm;
    // Add these later
}

function Participant(first, last, shirt, healthform, isAdult){
    this.first = first;
    this.last = last;
    this.shirt = shirt;
    this.healthForm = healthform;
    this.isAdult = isAdult;
}


function addRegistrant(e, form) {
    // Prevent page reload
    e.preventDefault();
    // define values
    var contact = form['contact-id'].value;
    var firstName = form['firstName'].value;
    var lastName = form['lastName'].value;
    var isAdult = form['isAdult'].value;
    var tShirt = form['tShirt'].value;
    
    //pass to constructor 
    var registrant;
    if(contact !== 'scout'){
        var position = form['position'].value;
        var email = form['email'].value;
        var phoneNumber = form['phoneNumber'].value;
        registrant = new Registrant(firstName, lastName, position, email, phoneNumber, isAdult, tShirt, contact, healthForm);
    } else {
        var healthForm = form['healthForm'].value;
        registrant = new Participant(firstName, lastName, tShirt, healthForm, isAdult)
    }
     
    registrantList.push(registrant);
    // clear form
    form.reset();
    //form.setAttribute("style","display: none");
    if (contact === "primary") {
        document.getElementById("primary-close-btn").click();
    } else if (contact === "secondary") {
        document.getElementById("secondary-close-btn").click();
    } else if (contact === "scout") {
        document.getElementById("scout-close-btn").click();
    }
    // if (document.getElementById("my-modal-btn").innerText == "Set Secondary Contact") {
    //     document.getElementById("my-modal-btn").remove();
    //     return;
    // } else {
    //     document.getElementById("my-modal-btn").innerText = "Set Secondary Contact";
    // }
    update();
}


function update() {
    //get html elements
    // var myTable = document.getElementById("my-table");
    //Shirt sizes for Adults
    xxlShirts = 0;
    xlShirts = 0;
    lgShirts = 0;
    mdShirts = 0;
    smShirts = 0;
    //Shirt sizes for youth
    ylgShirts = 0;
    ymdShirts = 0;
    //iterate over the list
    $('#registrant-list').empty();
    for (var i = 0; i < registrantList.length; i++) {
        //read object 
        var currentUser = registrantList[i];
        //write to page
        if (currentUser.isAdult) { var adult = "adult"; } else { adult = "" }
        var myTemplate = '<li class="list-group-item' + adult + '"><div class="list-group-item"><div class="row-action-primary checkbox"><label><input type="checkbox" value="'+ currentUser.healthForm +'"></label></div><div class="row-content"><h4 class="list-group-item-heading">' + currentUser.firstName + ' ' + currentUser.lastName + '</h4><p class="list-group-item-text">Shirt Size: ' + currentUser.tShirt + '</p></div></div></li><li class="list-group-separator"></li>';
        $('#registrant-list').append(myTemplate);
        console.log(currentUser.firstName);



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
        // document.getElementById("total-shirt-prices").innerHTML = String("Total price is " + (xlShirts + lgShirts + mdShirts + smShirts + ylgShirts + ymdShirts));
        document.getElementById("total-shirt-prices").innerHTML = String("Total price is " + asd());
        // document.write("shirt tally xl") = xlShirts
        // document.write("shirt price xl") = shirtPriceXL * xlShirts
    }
}

function displayModal() {
    document.getElementById("primary-modal-btn").click();
}

// function thankYouPage(){
//     var myRequest = new Request("")
// }
