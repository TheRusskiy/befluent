'use strict';
React = require('react');
_ = require('lodash');
template = require('./Meeting.rt');

module.exports = React.createClass({
    propTypes: {
      name: React.PropTypes.string
      date: React.PropTypes.string
    },
    displayName: 'meeting',
    render: template
});
