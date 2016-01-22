var shirtPrice = 10.00;
var shirtPriceXXL = 12.00;
var poi = document.getElementById("blankCheckbox")
var shirts = {
    totalPrice: 0,
    total: 0,
    sizes:{
        xxl: 0,
        xl: 0,
        lg: 0,
        md: 0,
        sm: 0,
        ylg: 0,
        ymd: 0
    }
}
function resetPrices(){
    shirts = {
        totalPrice: 0, 
        total: 0,
        sizes:{
            xxl: 0,
            xl: 0,
            lg: 0,
            md: 0,
            sm: 0,
            ylg: 0,
            ymd: 0
        }
    }
}

function addShirt(currentUser) {

    if (currentUser.tShirt) {
        switch (currentUser.tShirt) {
            case "Adult-xxl":
                shirts.sizes.xxl++;
                break;
            case "Adult-xl":
                shirts.sizes.xl++;
                break;
            case "Adult-lg":
                shirts.sizes.lg++;
                break;
            case "Adult-md":
                shirts.sizes.md++;
                break;
            case "Adult-sm":
                shirts.sizes.sm++;
                break;
            case "youth-lg":
                shirts.sizes.ylg++;
                break;
            case "youth-md":
                shirts.sizes.ymd++;
                break;
        }
    shirts.total++;
    }
}
function updatePrices(){
        
    for(var size in shirts.sizes){
        if(size === "xxl"){
            shirts.totalPrice += shirtPriceXXL;
        } else {
            shirts.totalPrice += shirtPrice;
        }
    }        
    
    if(poi){
        shirts.totalPrice *= .95; 
    }    
    
    draw();
    
}

function draw(){
    document.getElementById("xxl-shirt-sizes").innerHTML = String("Total XXL Shirts: " + shirts.sizes.xxl);

    document.getElementById("xl-shirt-sizes").innerHTML = String("Total XL Shirts: " + shirts.sizes.lg);

    document.getElementById("md-shirt-sizes").innerHTML = String("Total MD Shirts: " + shirts.sizes.md);

    document.getElementById("sm-shirt-sizes").innerHTML = String("Total SM Shirts: " + shirts.sizes.sm);

    document.getElementById("ylg-shirt-sizes").innerHTML = String("Total YLG Shirts: " + shirts.sizes.ylg);


    document.getElementById("ymd-shirt-prices").innerHTML = String("Total YMD Shirts: " + shirts.sizes.ymd);
    document.getElementById("total-shirt-prices").innerHTML = String("Total price is " + shirts.totalPrice);
}


