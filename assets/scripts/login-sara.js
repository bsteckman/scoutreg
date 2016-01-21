var members = [];

function submitRegistration() {
    // Responsible for getting value out of form
    var memberNameElem = document.getElementById('name');
    var memberName = memberNameElem.value;

    var memberEmailElem = document.getElementById('email');
    var memberEmail = memberEmailElem.value;


}

function dropDown() {
    var select = document.getElementById("selectCamp");
    var options = [1, 2, 3, 4, 5];
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement('option');
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}
   
    
// Validates Form is filled Out
if (!memberName) {
    alert('Hey Member Name cannot be blank')
}

if (!memberEmail) {
    alert('Hey Member email cannot be blank')
}

if (!memberPassword) {
    alert('Hey Member password cannot be blank')
}
    
     
    
// Creates New Member
var member = new Member(memberName, email, password);
    
// Add newly created member to Members
members.push(member) 
    
    
     
    
   
    
    
// CLEAR FORM
memberNameElem.value = "";
memberEmailElem.value = "";
memberPasswordElem.value = "";
    
    
    
// CLEARS MEMBERS LIST
var membersListElem = document.getElementById('members-list');
membersListElem.innerHTML = "";
    
  
    
// SHOW MEMBERS ON PAGE
for (var i = 0; i < members.length; i++) {
    var memberElem = document.createElement('li');
    memberElem.textContent = members[i].name;
    membersListElem.appendChild(memberElem);
} 
    
  
    
function Member(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.hasDiscount = false;
};

