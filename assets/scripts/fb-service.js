/* global Firebase */
function firebaseService() {
	
	var _user = {}
	var firebaseUrl = 'https://ore-ida.firebaseio.com/'
	var firebaseLogin = new Firebase(firebaseUrl);
	
	return {
		camps: getCamps,
		login: login,
		user: _user 
	}



	function login(user, cb) {
		firebaseLogin.authAnonymously(function (err, authData) {
			if (authData) {
				user.timestamp = Date.now();
				user.id = user.email.slice(0, user.email.indexOf('@'));
				user.id = user.id.replace(/\./g,'-');
				setUserData(user);
				//set user info
				//set user for pack
				firebaseLogin.child('packs').child(user.pack).child('users').child(user.id).update(user)
				firebaseLogin.child('users').child(user.id).child('packs').child(user.pack).update(user);
				//create camp form
				firebaseLogin.child('camp-forms').child('2016').child(user.camp).child(user.id).update({author: user.email});
				cb(user);
			} else {
				console.log('something went wrong');
				cb(authData);
			}
		});
	}
	
	function setUserData(user){
		_user.campForm = firebaseLogin.child('camp-forms').child('2016').child(user.camp).child(user.id);
	}
	
	function getCamps(cb){
		firebaseLogin.child('camps').child('2016').on('value', function(data){
			return cb(data.val());
		})
	}

}