var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

module.exports = {
  saveContact: function(contact) {
    this.firebaseRef = new Firebase('https://ss-contactlist.firebaseio.com/contacts');
    this.firebaseRef.push({contact:contact});
  }
}
