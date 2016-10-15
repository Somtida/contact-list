var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _contacts = [];


var AppStore = assign({}, EventEmitter.prototype, {
  saveContact(contact) {
    _contacts.push(contact);
  },
  getContacts(contact) {
    return _contacts;
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

      //Emit Change
      AppStore.Emit(CHANGE_EVENT);
      break;

  }

  return true;
});

module.exports = AppStore;
