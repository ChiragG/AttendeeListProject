'use strict';

var React = require('react/addons');


require('styles/AttendeeSimple.sass');

var AttendeeSimple = React.createClass({
  //mixins: [],
  //getInitialState: function() { return({}) },
  //getDefaultProps: function() {},
  //componentWillMount: function() {},
  //componentDidMount: function() {},
  //shouldComponentUpdate: function() {},
  //componentDidUpdate: function() {},
  //componentWillUnmount: function() {},

  render: function () {
    var cssClass = this.props.highlighted ? "list-group-item active" : "list-group-item";
    return (
          <a href="#" className={cssClass} onClick={this.props.selected}>
            {this.props.content.name}
          </a>
    );
  }
});

module.exports = AttendeeSimple; 

