'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var AttendeeList  = require('./AttendeeList');
var AttendeeView =  require('./AttendeeView');
var AddAttendeeControl = require('./AddAttendeeControl');
var NewAttendeeView = require('./NewAttendeeView');
var _ = require('underscore');

var Guests=
    [
      {
        "name": "John Smith",
        "email": "john@smith.com",
        "attendingWith": ["sarah@smith.com"],
        "tags": ["vip"],
        "meal": "beef"
      },
      {
        "name": "David Black",
        "email": "david@black.com",
        "attendingWith": [],
        "tags": [],
        "meal": null
      },
      {
        "name": "Sarah Smith",
        "email": "sarah@smith.com",
        "attendingWith": ["john@smith.com"],
        "tags": ["speaker", "vip"],
        "meal": "fish"
      }
    ];

Guests.getSelectedValue = function (email) {
    var selectedGuest =  null;

    if(email){
        selectedGuest =  _.find(function(item) {
            if (item.email === email) {
                return item;
            }
        });
    }

    return {
        selectedGuest : selectedGuest
    } ;
};
// CSS
require('normalize.css');
require('../styles/main.css');

var AttendeeListComponent =  React.createClass({
   render: function(){
       return (
           <div className="container-fluid">
               <ReactTransitionGroup transitionName="fade">
                   <div className="jumbotron">
                       <h2> Attendee List Application </h2>
                   </div>
                   <AddAttendeeControl/>
                   <div className="row">
                       <div className="col-md-4">
                           <AttendeeList data={this.props.guests} select={this.selectAttendee}  />
                       </div >
                       <div className="col-md-8">
                           <AttendeeView content ={this.props.selectedValue}/>
                       </div>
                   </div>
               </ReactTransitionGroup>
           </div>
       );
   }
});


var AttendeeListApp = React.createClass({
    getInitialState: function () {
        //return {
        //    //guests: this.props.guests,
        //    selectedValue: null,
        //    showNewForm : null
        //};
        return _.extend({
            guests: this.props.guests,
            showNewForm : false,
            selectedGuest: null
        },this.props.guests);
    },

    selectAttendee : function(child){
        var newVal =  this.state.guests.getSelectedValue(child.email);
        this.setState({showNewForm : false, selectedGuest:newVal.selectedGuest });
        //this.setState({showNewForm:false});

    },
    displayNewAttendeeForm: function (e) {
        console.log("need to show a new form");
        this.setState({showNewForm : true, selectedGuest:null});

    },
    componentDidMount: function() {
        this.setState(this.getInitialState());
    },
  render: function() {
      //var guestArray =  Array.prototype.slice.call(this.state.guests);
      //console.log(guestArray.constructor);
      //var component = this.state.guests.forEach(function (item){
      //    if(this.state.selectedValue) {
      //        if(item.email === this.state.selectedValue.email) {
      //            return (
      //                <AttendeeView content ={this.state.selectedValue}/>
      //            );
      //        }
      //    }

          //return (
          //    <div>
          //        <h1><span class="label label-default">Please select an Attendee. </span></h1>
          //    </div>
          //);
      //}.bind(this));

      return (
          <div className="container-fluid" >
              <ReactTransitionGroup transitionName="fade">
                  <div className="jumbotron">
                      <h2> Attendee List Application </h2>
                  </div>
                  <AddAttendeeControl showNewAttendeeForm={this.displayNewAttendeeForm}/>
                  <div className="row">
                      <div className="col-md-4">
                          <AttendeeList data={this.state.guests} select={this.selectAttendee}  />
                      </div >
                      <div className="col-md-8" hidden={this.state.showNewForm}>
                          <AttendeeView content ={Guests[2]}/>
                      </div>
                      <div className="col-md-8" hidden={!this.state.showNewForm}>
                          <NewAttendeeView/>
                      </div>
                  </div>
              </ReactTransitionGroup>
          </div>
    );
  }
});
React.render(<AttendeeListApp guests={Guests} />, document.getElementById('content')); // jshint ignore:line

module.exports = AttendeeListApp;
