'use strict';

describe('AttendeeView', function () {
  var React = require('react/addons');
  var AttendeeView, component;

  beforeEach(function () {
    AttendeeView = require('components/AttendeeView.js');
    component = React.createElement(AttendeeView);
  });

  it('should create a new instance of AttendeeView', function () {
    expect(component).toBeDefined();
  });
});
