var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  saveContact(contact) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE_CONTACT,
      contact
    });
  },
  receiveContacts(contacts) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_CONTACTS,
      contacts
    });
  }

}

module.exports = AppActions;
