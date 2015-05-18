'use strict';

describe('NewAttendeeView', function () {
  var React = require('react/addons');
  var NewAttendeeView, component;

  beforeEach(function () {
    NewAttendeeView = require('components/NewAttendeeView.js');
    component = React.createElement(NewAttendeeView);
  });

  it('should create a new instance of NewAttendeeView', function () {
    expect(component).toBeDefined();
  });
});
