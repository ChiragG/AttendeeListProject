'use strict';

describe('AttendingWithList', function () {
  var React = require('react/addons');
  var AttendingWithList, component;

  beforeEach(function () {
    AttendingWithList = require('components/AttendingWithList.js');
    component = React.createElement(AttendingWithList);
  });

  it('should create a new instance of AttendingWithList', function () {
    expect(component).toBeDefined();
  });
});
