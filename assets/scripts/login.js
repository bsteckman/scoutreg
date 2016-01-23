//DayCamp constructor builds camp objects and pushes them to the dayCamps array
var db = firebaseService();
var dayCamps = db.camps(loginDropDown); 

function loginDropDown(camps) {
		var select = document.getElementById("selectCamp");
    for(var k in camps){
			var camp = camps[k];
			var el = document.createElement('option');
			el.textContent = camp.id + ':  ' + camp.dates + ', ' + camp.location ;
			el.value = camp.id;
			select.appendChild(el);
		}
}

function login(e, form){
    e.preventDefault();
    var user = {
			email: form['email'].value,
			pack: form['pack'].value,
			camp: form['camp'].value
		}
		debugger;
		db.login(user, function(formData){
    	localStorage.SetItem("formData", JSON.stringify(formData));
		})
}