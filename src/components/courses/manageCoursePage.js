"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function () {
        return {
            authors: [],
            course: {id: '', watchHref: '', title: '', author: '', length: '', category: ''},
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function () {
        var courseId = this.props.params.id; // this is from the path /course/:id

        if (courseId) {
            this.setState({course: CourseStore.getCourseById(courseId), authors: AuthorStore.getAllAuthors()});
        } else {
            this.setState({authors: AuthorStore.getAllAuthors()});
        }
    },

    setCourseState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({course: this.state.course});
    },

    courseFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.course.watchHref.length < 3) {
            this.state.errors.watchHref = 'First name must be at least 3 chars';
            formIsValid = false;
        }

        if (this.state.course.title.length < 3) {
            this.state.errors.title = 'Last name must be at least 3 chars';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});

        return formIsValid;
    },

    saveCourse: function (event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        if (this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
            toastr.success('course updated');
        } else {
            CourseActions.createCourse(this.state.course);
            toastr.success('course created');
        }

        this.setState({dirty: false});
        this.transitionTo('courses');
    },

    render: function () {
        return (
            <CourseForm
            authors={this.state.authors}
            course={this.state.course}
            onChange={this.setCourseState}
            onSave={this.saveCourse}
            errors={this.state.errors}/>
        );
    }
});

module.exports = ManageCoursePage;
