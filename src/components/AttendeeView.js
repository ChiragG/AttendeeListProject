'use strict';

var React = require('react/addons');
var TagList =  require('./TagList');
var AttendingWithList = require('./AttendingWithList');
require('styles/AttendeeView.sass');

var MealsControl = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
        return {
            newValue: this.props.meal
        };
    },

    handleMealsClick : function(e){

    },
    render: function(){
        var valueLink = this.linkState('newValue');
        var handleChange = function(e) {
            valueLink.requestChange(e.target.value);
        };

        return (
            <div>
                        <span>
                            <a href="#" onClick={this.handleMealsClick}>Meals:</a>
                        </span>
                        <span>
                            <input type="text" value={valueLink.value} onChange={handleChange} className="form-control" ref="mealsInput"/>
                        </span>
            </div>
        );
    }

});


var AttendeeView = React.createClass({
  //mixins: [],
      getInitialState: function() { return(
      {
          name:"",
          email:"",
          tags:[]
      });
  },
  //getDefaultProps: function() {},
  //componentWillMount: function() {},
  //componentDidMount: function() {},
  //shouldComponentUpdate: function() {},
  //componentDidUpdate: function() {},
  //componentWillUnmount: function() {},

  render: function () {
      if(this.props.content){
          return (

              <div className="panel panel-primary">
                  <div className="panel panel-heading">
                      Attendee Info
                  </div>
                  <div className="panel panel-body">
                      <span>  Name: {this.props.content.name} </span>
                      <span>  Email: {this.props.content.email} </span>
                      <p/>
                      <div className="panel panel-info">
                          <div className="panel panel-heading">
                              Attending With:
                          </div>
                          <div className="panel panel-body">
                              <AttendingWithList data={this.props.content.attendingWith} />
                          </div>
                      </div>
                      <p/>
                        <TagList data={this.props.content.tags} displayName="Tags"/>
                      <p/>
                      <MealsControl meal={this.props.content.meal} />
                  </div>
              </div>
          );              
      }
      return(
          <div>
              <h1><span class="label label-default">Please select an Attendee. </span></h1>
          </div>
              
          );
    
  }
});

module.exports = AttendeeView; 

