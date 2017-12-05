var forms = Document.forms;

forms.login.email.addEventListener('keydown', function(e) {
console.log(e.target["vaule"]);
});

const loginform = forms.login;

function enableSubmit() {

}

if(loginForm.passwword.vaule.length > 0 && loginForm.username.vaule.length > 0 && loginForm.email.vaule.length > 0) {
    //HERE IS WHERE THE LOGIN GOES...
    loginform.submit.removeAttribute('disable')
}
console.log(loginForm)

for(let i = 0; i < loginForm.length; i++) {
    loginForm[i].addEventListener('keydown', function(e) {
        enableSubmit();
    });
}

var practice = function () {
    debugger;
    var name = 'Andres';
    console.log(this);
;}
var me = 'name';
practice();
// console.log(this.me);


var clickDiv;
Document.querySelector('#click');
clickDiv.addEventListener('click', function (e) {
    console.log(this);
});



var checkScope = function () {
    console.log(this);
};

var obj = {
    test : checkScope,
    user : checkScope
};

checkScope.call(obj);

obj.test();



// obj.test();

var name = "reyes";

function callName() {
    var name = "Andres";
    console.log(name); //ASSUMPITION: hoisted declaration
}

callName()


console.log(name); //assumpition: hoisted declaration









