var React = require('react');
var ReactDOM = require('react-dom');

var $ = document.querySelector.bind(document);

var GitHub = require('./components/GitHub.js');

ReactDOM.render( < GitHub / > , $('#app'));
