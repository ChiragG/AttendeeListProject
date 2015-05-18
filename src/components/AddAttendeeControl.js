'use strict';

var React = require('react/addons');


require('styles/AddAttendeeControl.sass');

var AddAttendeeControl = React.createClass({
  //mixins: [],

  //getDefaultProps: function() {},
  //componentWillMount: function() {},
  //componentDidMount: function() {},
  //shouldComponentUpdate: function() {},
  //componentDidUpdate: function() {},
  //componentWillUnmount: function() {},

  render: function () {

    return (
        <div className="row">
            <div className="col-md-6">
                <p>
                    <span type="text"  className="btn btn-primary btn-default" onClick={this.props.showNewAttendeeForm} >
                        Add New Attendee
                    </span>
                </p>

            </div>
        </div>
      );
  }
});

module.exports = AddAttendeeControl; 

