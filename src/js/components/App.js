var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm');
var ContactList = require('./ContactList');

function getAppState() {
  return {
    contacts: AppStore.getContacts(),
    contactToEdit: AppStore.getContactToEdit(),
  }
}


var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getAppState());
  },

  render(){
    console.log(this.state.contactToEdit);
    return(
      <div>
        <AddForm />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
})

module.exports = App;
