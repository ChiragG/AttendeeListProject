'use strict';

var React = require('react/addons');

require('styles/AttendeeSimple.sass');

var AttendeeSimple = React.createClass({
  render: function () {
    var cssClass = this.props.highlighted ? "list-group-item active" :
                                            this.props.attendingWith ? "list-group-item list-group-item-success" :
                                                "list-group-item";
      cssClass = this.props.highlightMealAttendee ? "list-group-item list-group-item-warning" :cssClass;
    return (
          <a href="#" className={cssClass} onClick={this.props.selected}>
            {this.props.content.name}
          </a>
    );
  }
});

module.exports = AttendeeSimple;

