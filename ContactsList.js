// Imports
var Observable = require('FuseJS/Observable');

// Constants
const USERS_URL = 'http://jsonplaceholder.typicode.com/users';
const IMAGES_URL = 'http://jsonplaceholder.typicode.com/photos';

// Variables
var users = Observable();
var selectedUser = Observable();

// Make HTTP requests
fetch(USERS_URL)
.then(function(response) { return response.json(); })
.then(function(data) {
	data.forEach(function(item) {
		users.add(item);
	});
});

function openItem(sender) {
	selectedUser.value = sender.data;
}

// Use to export the variables to be used in the view
module.exports = {
	users: users,
	openItem: openItem,
	selectedUser: selectedUser
};