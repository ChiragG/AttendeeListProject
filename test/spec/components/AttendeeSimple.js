'use strict';

describe('AttendeeSimple', function () {
  var React = require('react/addons');
  var AttendeeSimple, component;

  beforeEach(function () {
    AttendeeSimple = require('components/AttendeeSimple.js');
    component = React.createElement(AttendeeSimple);
  });

  it('should create a new instance of AttendeeSimple', function () {
    expect(component).toBeDefined();
  });
});
