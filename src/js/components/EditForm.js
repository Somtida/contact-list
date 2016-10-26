var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var EditForm = React.createClass({
  componentDidMount: function() {
    let {contactToEdit} = this.props;
    this.setState({selected:contactToEdit});
  },
  handleChange(fieldname, e) {
    console.log('field',fieldname);
    console.log('e',e.target.value);
    var selected = this.state.selected;
    selected[fieldname] = e.target.value;
    this.setState({selected})
  },
  handleSubmit(e) {
    e.preventDefault();

    var contact = {
      id: this.props.contactToEdit.id,
      name: this.refs.name.value.trim(),
      phone: this.refs.phone.value.trim(),
      email: this.refs.email.value.trim(),
    }

    AppActions.updateContact(contact);

  },
  render(){
    return(
      <div className="well">
        <h3>Edit Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" type="text" ref="name" value={this.props.contactToEdit.name} onChange={this.handleChange.bind(this, 'name')} />
          </div>
          <div className="form-group">
            <input className="form-control" type="text" ref="phone" value={this.props.contactToEdit.phone} onChange={this.handleChange.bind(this, 'phone')} />
          </div>
          <div className="form-group">
            <input className="form-control" type="email" ref="email" value={this.props.contactToEdit.email} onChange={this.handleChange.bind(this, 'email')} />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
})

module.exports = EditForm;
