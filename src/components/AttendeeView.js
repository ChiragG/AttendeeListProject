'use strict';

var React = require('react/addons');
var TagList =  require('./TagList');
var AttendingWithList = require('./AttendingWithList');
require('styles/AttendeeView.sass');

var MealsControl = React.createClass({

    getInitialState: function () {
        return {
            newValue: this.props.meal
        };
    },
    handleChange: function(e){
        this.setState({newValue: e.target.value});
    },
    handleMealsClick : function(e){
        //console.log(this.linkState('newValue').value);
        var val = React.findDOMNode(this.refs.mealsInput).value;
        this.props.mealClick(val);
    },
    componentDidMount: function() {
        this.setState({newValue: this.props.meal});

    },

    render: function(){
        return (
            <div>
                <span>
                    <a href="#" onClick={this.handleMealsClick}>Meals:</a>
                </span>
                <span>
                    <input type="text" value={this.props.meal} onChange={this.handleChange} className="form-control" ref="mealsInput"/>
                </span>
            </div>
        );
    }
});


var AttendeeView = React.createClass({

    getInitialState: function() {

        return(
          {
              name:"",
              email:"",
              tags:[]
          });
    },
    componentWillMount: function() {
    },

    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    componentDidUpdate: function() {
    },

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
                      <MealsControl meal={this.props.content.meal} mealClick={this.props.mealClickedHandler}/>
                  </div>
              </div>
          );
      }
      return(
              <div>
                  <h1><span className="label label-default">Please select an Attendee. </span></h1>
              </div>
          );
  }
});

module.exports = AttendeeView;
