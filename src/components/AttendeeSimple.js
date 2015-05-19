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
      console.log(this.props.highlighted + " High " + this.props.attendingWith + "aatt");
    var cssClass = this.props.highlighted ? "list-group-item active" :
                                            this.props.attendingWith ? "list-group-item list-group-item-success" :
                                                "list-group-item";
    return (
          <a href="#" className={cssClass} onClick={this.props.selected}>
            {this.props.content.name}
          </a>
    );
  }
});

module.exports = AttendeeSimple; 

