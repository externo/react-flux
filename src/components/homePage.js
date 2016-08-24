"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Home page</h1>
                <p>react, flux, jsx</p>
                <Link to="about" className="btn btn-primary btn-lg">more...</Link>
            </div>
        );
    }
});

module.exports = Home;
