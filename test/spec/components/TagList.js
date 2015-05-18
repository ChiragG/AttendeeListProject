'use strict';

describe('TagList', function () {
  var React = require('react/addons');
  var TagList, component;

  beforeEach(function () {
    TagList = require('components/TagList.js');
    component = React.createElement(TagList);
  });

  it('should create a new instance of TagList', function () {
    expect(component).toBeDefined();
  });
});
