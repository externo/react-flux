"use strict";

var React = require('react');
var Input = require('../common/textInput');
var Select = require('../common/select');
//var Select = require('react-select');

var CourseForm = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired,
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        return (
            <form>
                <h1>Manage Course</h1>
                <Input
                    name="title"
                    label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title}/>

                <Input
                    name="watchHref"
                    label="watchHref"
                    value={this.props.course.watchHref}
                    onChange={this.props.onChange}
                    error={this.props.errors.watchHref}/>

                <Select
                    name="author"
                    value={this.props.course.author}
                    options={this.props.authors}
                    onChange={this.props.onChange}/>

                <Input
                    name="length"
                    label="length"
                    value={this.props.course.length}
                    onChange={this.props.onChange}
                    error={this.props.errors.length}/>

                <Input
                    name="category"
                    label="category"
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                    error={this.props.errors.category}/>

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = CourseForm;

