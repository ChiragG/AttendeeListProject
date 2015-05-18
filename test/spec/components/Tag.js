'use strict';

describe('Tag', function () {
  var React = require('react/addons');
  var Tag, component;

  beforeEach(function () {
    Tag = require('components/Tag.js');
    component = React.createElement(Tag);
  });

  it('should create a new instance of Tag', function () {
    expect(component).toBeDefined();
  });
});
