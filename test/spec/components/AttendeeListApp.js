'use strict';

describe('AttendeeListApp', function () {
  var React = require('react/addons');
  var AttendeeListApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    AttendeeListApp = require('components/AttendeeListApp.js');
    component = React.createElement(AttendeeListApp);
  });

  it('should create a new instance of AttendeeListApp', function () {
    expect(component).toBeDefined();
  });
});
