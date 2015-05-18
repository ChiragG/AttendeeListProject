'use strict';

describe('AddAttendeeControl', function () {
  var React = require('react/addons');
  var AddAttendeeControl, component;

  beforeEach(function () {
    AddAttendeeControl = require('components/AddAttendeeControl.js');
    component = React.createElement(AddAttendeeControl);
  });

  it('should create a new instance of AddAttendeeControl', function () {
    expect(component).toBeDefined();
  });
});
