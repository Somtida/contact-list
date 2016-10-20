var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var AppAPI = require('./utils/appAPI.js');

AppAPI.getContacts();

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
