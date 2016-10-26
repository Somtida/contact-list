var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _contacts = [];
var _contact_to_edit = '';

var AppStore = assign({}, EventEmitter.prototype, {
  saveContact(contact) {
    _contacts.push(contact);
  },
  getContacts(contact) {
    return _contacts;
  },
  setContacts(contacts) {
    _contacts = contacts;
  },
  removeContact(contactId) {
    var index = _contacts.findIndex(x => x.id === contactId);
    _contacts.splice(index,1);
  },
  setContactToEdit(contact) {
    _contact_to_edit = contact;
  },
  getContactToEdit() {
    return _contact_to_edit;
  },
  updateContactToEdit(contact) {
    for(let i=0;i<_contacts.length;i++) {
      if(_contacts[i].id == contact.id) {
        _contacts.splice(i,1);
        _contacts.push(contact);
      }
    }
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.SAVE_CONTACT:
      console.log('Saving Contact...');

      // Store Save
      AppStore.saveContact(action.contact);

      // Save to AppAPI
      AppAPI.saveContact(action.contact);

      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.RECEIVE_CONTACTS:
      console.log('Receiving Contact...');

      // Store Save
      AppStore.setContacts(action.contacts);

      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.REMOVE_CONTACT:
      console.log('Removing Contact...');

      // Store Save
      AppStore.removeContact(action.contactId);

      // API removeContact
      AppAPI.removeContact(action.contactId);

      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.EDIT_CONTACT:

      // Store Save
      AppStore.setContactToEdit(action.contact);

      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.UPDATE_CONTACT:

      // Store Save
      AppStore.updateContactToEdit(action.contact);

      // API removeContact
      AppAPI.updateContact(action.contact);

      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;

  }

  return true;
});

module.exports = AppStore;
