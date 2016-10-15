var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var AddForm = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('click');
  },
  render(){
    return(
      <div className="well">
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" type="text" ref="name" placeholder="Amy Sinka"/>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" ref="phone" placeholder="xxx xxx xxxx"/>
          </div>
          <div className="form-group">
            <input className="form-control" type="email" ref="email" placeholder="amy-sinka9@gmail.com"/>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
})

module.exports = AddForm;
