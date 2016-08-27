"use strict";

var React = require('react');

var About = React.createClass({
    //statics: {
    //    willTransitionTo: function (transition, params, query, callback) {
    //        if (!confirm('Are u sure?')) {
    //            transition.about();
    //        } else {
    //            callback();
    //        }
    //    },
    //    willTransitionFrom: function (transition, component) {
    //        if (!confirm('leave ?')) {
    //            transition.about();
    //        }
    //    }
    //},
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                techs list
                    <ul>
                    ul name
                        <li>react</li>
                        <li>router</li>
                        <li>flux</li>
                        <li>node</li>
                        <li>gulp</li>
                        <li>browserify</li>
                        <li>bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
