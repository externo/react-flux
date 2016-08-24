"use strict";

var authors = require('./authorData').authors;
var _ = require('lodash');

var _generatedId = function(author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item){
    return JSON.parse(JSON.stringify(item));
};

var AuthorApi = {
    getAllAuthors: function(){
        return _clone(authors);
    },

    getAuthorById: function(id){
        var author = _.find(authors, {id: id});
        return _clone(author);
    },

    saveAuthor: function(author){
        console.log('Pretend this this just save to the DB via AJAX call...');

        if (author.id){
            var existAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
            authors.splice(existAuthorIndex, 1, author);
        }else{
            author.id = _generatedId(author);
            authors.push(author);
        }

        return _clone(author);
    },

    deleteAuthor: function(id){
        console.log('Pretend this just deleted the author from the DB via AJAX call...');
        _.remove(authors, {id: id});
    }
};

module.exports = AuthorApi;
