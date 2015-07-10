'use strict';
var React = require('react/addons');
var _ = require('lodash');
var Meeting = require('./Meeting');
function repeatMeeting1(meeting, meetingIndex) {
    return React.createElement(Meeting, {
        'date': meeting.date,
        'name': meeting.name
    });
}
module.exports = function () {
    return React.createElement.apply(this, [
        'div',
        {},
        React.createElement('h1', {}, 'Upcoming meetings:'),
        _.map(this.meetings, repeatMeeting1.bind(this))
    ]);
};