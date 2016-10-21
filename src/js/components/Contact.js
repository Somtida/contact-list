var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Contact = React.createClass({
  handleEdit() {
    console.log('Edit');
  },
  handleRemove(i,j) {
    console.log('Remove');
  },
  render(){
    return(
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.phone}</td>
        <td>{this.props.contact.email}</td>
        <td><a href="#" className="btn btn-warning" onClick={this.handleEdit.bind(this))}>Edit</a></td>
        <td><a href="#" className="btn btn-danger" onClick={this.handleRemove.bind(this, this.props.contact.id)}>Remove</a></td>
      </tr>
    )
  }
})

module.exports = Contact;
