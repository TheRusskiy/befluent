'use strict';
var React = require('react/addons');
var _ = require('lodash');
module.exports = function () {
    return React.createElement('div', {}, this.props.name, ' is going to happen on ', this.props.date);
};