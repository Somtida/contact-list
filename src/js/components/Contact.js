var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Contact = React.createClass({
  render(){
    return(
      <tr>
        <td>{this.props.contact.name}</td>
      </tr>
    )
  }
})

module.exports = Contact;
