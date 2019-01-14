// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === "images/neu.png") {
      myImage.setAttribute("src", "images/ds.jpg");
    } else {
      myImage.setAttribute("src", "images/neu.png");
    }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.getElementById('name');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}