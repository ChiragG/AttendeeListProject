'use strict';

var React = require('react/addons');
var AttendeeSimple =  require('./AttendeeSimple');
var AttendeeView =  require('./AttendeeView');

require('styles/AttendeeList.sass');

var AttendeeList = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    getInitialState: function () {
        console.log(this.props.data.constructor);
        return {
            attendees: this.props.data,
            selectedValue: null
        };
    },
    selectedHandler: function (i) {
        var items = this.state.attendees;
        this.props.select(items[i]);
        this.setState({selectedValue: items[i]});
    },
    componentDidMount: function() {
        console.log("Mounted AttendeeList");
    },
    render: function (){
        //var selectedHandler = this.props.select;
        var items = this.state.attendees.map(function(item,i) {
            var highlight =false;
            if(this.state.selectedValue) {
                if(this.state.selectedValue.name === item.name) {
                    highlight = true;
                }
            }
            return (
                <AttendeeSimple content={item} key={item.name}
                                selected={this.selectedHandler.bind(this, i) }
                                highlighted={highlight}/>
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

