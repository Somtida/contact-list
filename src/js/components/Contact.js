var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Contact = React.createClass({
  handleEdit(id, j) {
    AppActions.editContact(id);
  },
  handleRemove(id,j) {
    AppActions.removeContact(id);
  },
  render(){
    return(
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.phone}</td>
        <td>{this.props.contact.email}</td>
        <td><a href="#" className="btn btn-warning" onClick={this.handleEdit.bind(this, this.props.contact)}>Edit</a></td>
        <td><a href="#" className="btn btn-danger" onClick={this.handleRemove.bind(this, this.props.contact.id)}>Remove</a></td>
      </tr>
    )
  }
})

module.exports = Contact;
