'use strict';

var React = require('react/addons');
var TagList =  require('./TagList');
var AttendingWithList = require('./AttendingWithList');
require('styles/NewAttendeeView.sass');

var NewAttendeeView = React.createClass({
  getInitialState: function() { return({
          tagList : [],
      attendingWith:[]
  }); },
  submitForm: function(){
    var name =  this.refs.name.getDOMNode().value;

  },

  render: function () {
    return (
        <form>
            <div className="panel panel-primary">
              <div className="panel panel-heading">
                Attendee Info
              </div>
              <div className="panel panel-body">
                <span>  Name:  </span> <input ref="name" type="text" className="form-control"/>
                <span>  Email:  </span><input ref="name" type="text" className="form-control"/>
                <p/>
                  <TagList data={this.state.tagList} displayName="Attending With" key="AttendingWithControl" />
                <p/>
                    <TagList data={this.state.tagList} displayName="Tags" key="TagControl"/>
                <p/>
                  <div>
                      <span>  Meals:  </span> <input ref="meal" type="text" className="form-control"/>
                  </div>
                  <p />
                  <div>
                    <span>
                            <button className="btn btn-block btn-success" type="button" onClick={this.submitForm} > Submit</button>
                    </span>
                  </div>
              </div>

            </div>
        </form>
    );
  }
});

module.exports = NewAttendeeView; 

