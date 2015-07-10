'use strict';
React = require('react');
_ = require('lodash');
template = require('./MeetingList.rt');
Meeting = require('./Meeting')

module.exports = React.createClass({
    propTypes: {
      meetings: React.PropTypes.instanceOf(Meeting)
    },
    displayName: 'welcome'
    getInitialState: -> {meetings: @props.initialMeetings}
    render: template
});

