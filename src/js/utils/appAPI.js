var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

module.exports = {
  saveContact(contact) {
    this.firebaseRef = new Firebase('https://ss-contactlist.firebaseio.com/contacts');
    this.firebaseRef.push({
      contact:contact
    });
  },

  getContacts() {
    this.firebaseRef = new Firebase('https://ss-contactlist.firebaseio.com/contacts');
    this.firebaseRef.once("value", snapshot => {
      let contacts = [];
      snapshot.forEach((childSnapshot) => {
        let contact = {
          id: childSnapshot.key(),
          name: childSnapshot.val().contact.name,
          phone: childSnapshot.val().contact.phone,
          email: childSnapshot.val().contact.email,
        }
        contacts.push(contact);
        AppActions.receiveContacts(contacts);
      })
    })
  },

  removeContact(contactId) {
    this.firebaseRef = new Firebase(`https://ss-contactlist.firebaseio.com/contacts/${contactId}`);
    this.firebaseRef.remove();
  },


}
