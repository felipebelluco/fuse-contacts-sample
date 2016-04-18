var Observable = require('FuseJS/Observable');
var ContactsList = require('ContactsList');

var pages = Observable();

var contactsListPage = {title: 'Contacts', handle: 'contactsList'};
var contactInfoPage = {title: 'Contact Info', handle: 'contactInfo'};

pages.add(contactsListPage);
pages.add(contactInfoPage);

var currentPage = Observable(contactsListPage);

var currentPageTitle = currentPage.map(function(page) {
	return page.Title;
});

var currentPageHandle = currentPage.map(function(page) {
	return page.handle;
});

function pageButtonClicked(sender) {
	currentPage.value = sender.data;
}

function goBack(sender) {
	currentPage.value = contactsListPage;
}
module.exports = {
	pages: pages,
	currentPage: currentPage,
	currentPageTitle: currentPageTitle,
	currentPageHandle: currentPageHandle,
	pageButtonClicked: pageButtonClicked,
	goBack: goBack,
	ContactsList: ContactsList
};