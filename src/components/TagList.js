'use strict';

var React = require('react/addons');
var Tag =  require('./Tag');

require('styles/TagList.sass');

var TagList = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    getInitialState: function () {
        return {
            tags: this.props.data,
            newValue: ''
        };
    },
    addNewTag : function (event) {
        //this.props.data.push("New Value")
        var newVal =  this.linkState('newValue').value;
        if(newVal) {
            this.props.data.push(newVal);
            this.setState({tags: this.props.data ,newValue: ''});
        }
    },

    deleteTag : function (i) {
        var newItems = this.state.tags;
        newItems.splice(i, 1);
        this.setState({tags: newItems});
    },
    render: function () {
        var valueLink = this.linkState('newValue');
        var newValue = null;
        var items = this.state.tags.map(function(item,i) {
            return (
                <Tag content={item} key={item} deleteTag={this.deleteTag.bind(this, i)} ref={"tag" +i}/>
            );
        }.bind(this));
        var handleChange = function(e) {

            valueLink.requestChange(e.target.value);
        };

        return (
            <div className="panel panel-info">
                <div className="panel panel-heading">
                    {this.props.displayName}:
                </div>
                <div className="panel panel-body">
                    <input value={valueLink.value} onChange={handleChange} type="text" className="form-control" ref="addTagInput" />
                    <p />
                    <p  className="btn btn-primary btn-sm"  onClick={this.addNewTag}>
                        Add {this.props.displayName}
                    </p>

                    <ul className="nav nav-pills">
                        {items}
                    </ul>
                </div>
            </div>
        );
    }

});

module.exports = TagList; 

