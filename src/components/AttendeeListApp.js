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
Guests.findAttendingWith=  function(attendee){
    var allEmails= this.map(function (item){
        if(item.email !== attendee.email){
            return item.email;
        }
    });
    var result = _.intersection(allEmails,attendee.attendingWith);

    return{ result: result };

};
// CSS
require('normalize.css');
require('../styles/main.css');

var AttendeePanel =  React.createClass({
    getInitialState : function(){
        return {
            mealSelected :""
        };
    },
    mealsClicked: function(meal){
        this.setState({mealSelected:meal});
    },
    render: function(){
       return (
           <div className="row">
               <div className="col-md-4">
                   <AttendeeList data={this.props.guests} select={this.props.selectAttendeeHandler} mealSelected={this.state.mealSelected} />
               </div >
               <div className="col-md-8" hidden={this.props.show}>
                   <AttendeeView content={this.props.selectedGuest} mealClickedHandler={this.mealsClicked}/>
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
