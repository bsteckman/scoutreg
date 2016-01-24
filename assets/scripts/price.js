var shirtPrice = 10.00;
var shirtPriceXXL = 12.00;
var goldCardElem = document.getElementById("gold-card-member");
var now = Date.now();
var earlyBird = new Date(2016, 4, 24).getTime();
var pp = now < earlyBird ? 30 : 40;

var priceElems = {
	totalPrice: document.getElementById('total-price'),
	campFee: document.getElementById('camp-fee'),
	totalParticipants: document.getElementById('total-participants'),
	totalShirts: document.getElementById('shirt-count'),
	shirtsPrice: document.getElementById('shirts-price')
}

var shirtElems = {
	xxl: document.getElementById("xxl-shirt-sizes"),
	xl: document.getElementById("xl-shirt-sizes"),
	lg: document.getElementById("lg-shirt-sizes"),
	md: document.getElementById("md-shirt-sizes"),
	sm: document.getElementById("sm-shirt-sizes"),
	ylg: document.getElementById("ylg-shirt-sizes"),
	ymd: document.getElementById("ymd-shirt-sizes")
}


var shirts = {
	totalPrice: 0,
	total: 0,
	sizes: {
		xxl: 0,
		xl: 0,
		lg: 0,
		md: 0,
		sm: 0,
		ylg: 0,
		ymd: 0
	}
}
function resetPrices() {
	shirts = {
		totalPrice: 0,
		total: 0,
		sizes: {
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
	if (!currentUser.tShirt) {
		return;
	}
	shirts.total++;
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
}
function updatePrices() {
	var poi = goldCardElem.value;
	for (var size in shirts.sizes) {
		if (size === "xxl") {
			shirts.totalPrice += shirts.sizes[size] * shirtPriceXXL;
		} else {
			shirts.totalPrice += shirts.sizes[size] * shirtPrice;
		}
	}
		
		//FIX Error 'on
	if (poi) {
		formData.discount = 5;
	} else {
		formData.discount = 0;
	}
	
	formData.participants = formData.participants || {};
	var totalParticipants = Object.keys(formData.participants).length;
	var campFee = pp - formData.discount;
	
	registration.update({
		totalParticipants: totalParticipants,
		totalPrice: totalParticipants * (pp - formData.discount),
		campFee: campFee,
		totalShirts: shirts.total,
		shirtPrice: shirts.totalPrice
	}, function (err) {
		if (err) { console.log(err); }
		draw();
	})

}

function draw() {
	for (var key in shirts.sizes) {
		var quantity = shirts.sizes[key];
		var elem = shirtElems[key];
		elem.textContent = quantity;
	}

	for (var key in priceElems) {
		var value = formData[key];
		priceElems[key].textContent = value;
	}

}


