// Initialize Firebase
  var config = {
    apiKey: "AIzaSyArSZjUOykj3yZYStJCNdwxxIZtVHZ9BuQ",
    authDomain: "contactus-7f303.firebaseapp.com",
    databaseURL: "https://contactus-7f303.firebaseio.com",
    projectId: "contactus-7f303",
    storageBucket: "contactus-7f303.appspot.com",
    messagingSenderId: "25415586680"
  };
  firebase.initializeApp(config);
// Reference messages collection(tables)
// initialize firebase database and .ref for specific collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit and what action to perform
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form to prevent form data being submitted to that HTML page
function submitForm(e){
  e.preventDefault();

  // Get values for output 
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Saving messages to firebase database after being submitted
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form data after submission for new data entry
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
 
// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}