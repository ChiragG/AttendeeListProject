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

//Guests.getSelectedValue = function (email) {
//    var selectedGuest =  null;
//
//    if(email){
//        selectedGuest =  _.find(function(item) {
//            if (item.email === email) {
//                return item;
//            }
//        });
//    }
//
//    return {
//        selectedGuest : selectedGuest
//    } ;
//};
// CSS
require('normalize.css');
require('../styles/main.css');

var AttendeePanel =  React.createClass({

    render: function(){
       return (
           <div className="row">
               <div className="col-md-4">
                   <AttendeeList data={this.props.guests} select={this.props.selectAttendeeHandler}  />
               </div >
               <div className="col-md-8" hidden={this.props.show}>
                   <AttendeeView content={this.props.selectedGuest}/>
               </div>
               <div className="col-md-8" hidden={!this.props.show}>
                   <NewAttendeeView/>
               </div>
           </div>
       );
   }
});


var AttendeeListApp = React.createClass({
    getInitialState: function () {
        console.log("setting initial state");
        return{
            guests: this.props.guests,
            showNewForm : false,
            selectedGuest: null
        };
    },

    selectAttendee : function(child){
      if(child){
          var newVal =  child;
          console.log(this);
          this.setState({showNewForm : false, selectedGuest:newVal});
      }
    },
    displayNewAttendeeForm: function (e) {
        console.log("need to show a new form");
        this.setState({showNewForm : true, selectedGuest:null});
    },

    componentDidMount: function() {
        console.log("Mounted App");
    },
    componentWillUnmount: function() {
        console.log("Will UnMount");
    },
    componentDidUpdate: function() {
        console.log("Did Update");
    },
    componentWillMount: function() {
        console.log("Comp will mount");
    },

  render: function() {
      return (

          <div className="container-fluid" >
              <ReactTransitionGroup transitionName="fade">
                  <div className="jumbotron">
                      <h2> Attendee List Application </h2>
                  </div>
                  <AddAttendeeControl showNewAttendeeForm={this.displayNewAttendeeForm}/>
                  <AttendeePanel show={this.state.showNewForm}
                                 selectAttendeeHandler={this.selectAttendee}
                                 guests={this.state.guests}
                                 selectedGuest={this.state.selectedGuest} />
              </ReactTransitionGroup>
          </div>
    );
  }
});
React.render(<AttendeeListApp guests={Guests} />, document.getElementById('content')); // jshint ignore:line

module.exports = AttendeeListApp;
