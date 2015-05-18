'use strict';

var React = require('react/addons');


require('styles/AttendingWithList.sass');

var AttendingWithList = React.createClass({

    render: function () {

        var items = this.props.data.map(function(item){
            return(
                <li role="presentation" key={item}> {item} </li>
            );
        });
        return (
            <ul className="nav nav-pills">
                {items}
            </ul>
        );
    }
});


module.exports = AttendingWithList; 

