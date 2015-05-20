'use strict';

var React = require('react/addons');
var AttendeeSimple =  require('./AttendeeSimple');
var AttendeeView =  require('./AttendeeView');
var _ = require('underscore');
require('styles/AttendeeList.sass');

var AttendeeList = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    getInitialState: function () {
        console.log(this.props.data.constructor);
        return {
            attendees: this.props.data,
            selectedValue: null,
            attendingWith: [],
            mealSelected: ''
        };
    },
    selectedHandler: function (i) {
        var items = this.state.attendees;
        this.props.select(items[i]);
        var val =  this.state.attendees.findAttendingWith(items[i]);
        this.setState({selectedValue: items[i], attendingWith:val.result});
    },
    componentDidMount: function() {
        console.log("Mounted AttendeeList");
    },
    render: function (){
        console.log("Here Now AttendeeList " +this.state.mealSelected);
        var items = this.state.attendees.map(function(item,i) {
            var highlight =false;
            var attendingWith = false;
            var highlightAttendeeWithSameMeal = false;
            if(this.state.selectedValue) {
                if(this.state.selectedValue.name === item.name) {
                    highlight = true;
                }
            }
            if(this.state.attendingWith.length >0 ){
                if(_.contains(this.state.attendingWith,item.email)){
                    attendingWith = true;
                }
            }
            if(this.state.mealSelected){
                if(this.state.mealSelected === item.meal){
                    highlightAttendeeWithSameMeal = true;
                }
            }
            return (
                <AttendeeSimple content={item} key={item.name}
                                selected={this.selectedHandler.bind(this, i) }
                                highlighted={highlight}
                                attendingWith={attendingWith}
                                highlightMealAttendee={highlightAttendeeWithSameMeal}/>
            );
        }.bind(this));
        return (
            <div className="list-group">
                {items}
            </div>
        );
    }
});

module.exports = AttendeeList;
