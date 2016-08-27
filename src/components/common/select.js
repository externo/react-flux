"use strict";

var React = require('react');

var Select = React.createClass({
    propTypes: {
        options: React.PropTypes.array.isRequired,
        onChange: React.PropTypes.func.isRequired,
        name: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        error: React.PropTypes.string
    },

    render: function(){
        var createOptionRow = function(author){
            return (
                <option key={author.id} value={author.id}>{author.firstName} {author.lastName}</option>
            );
        };

        return (
            <select name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
                {this.props.options.map(createOptionRow, this)}
            </select>
        );
    }
});

module.exports = Select;
