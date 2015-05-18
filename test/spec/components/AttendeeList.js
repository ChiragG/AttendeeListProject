'use strict';

describe('AttendeeList', function () {
  var React = require('react/addons');
  var AttendeeList, component;

  beforeEach(function () {
    AttendeeList = require('components/AttendeeList.js');
    component = React.createElement(AttendeeList);
  });

  it('should create a new instance of AttendeeList', function () {
    expect(component).toBeDefined();
  });
});
