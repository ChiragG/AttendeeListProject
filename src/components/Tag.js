'use strict';

var React = require('react/addons');


require('styles/Tag.sass');

var Tag = React.createClass({
  //mixins: [],
  //getInitialState: function() { return({}) },
  //getDefaultProps: function() {},
  //componentWillMount: function() {},
  //componentDidMount: function() {},
  //shouldComponentUpdate: function() {},
  //componentDidUpdate: function() {},
  //componentWillUnmount: function() {},

  render: function () {
    return (
        <li role="presentation">
            <a>
                    {this.props.content}
            </a>
             <span className="input-group-btn">
                 <button className="btn btn-default" type="button" onClick={this.props.deleteTag} >Delete</button>
              </span>
        </li>
      );
  }
});

module.exports = Tag;
