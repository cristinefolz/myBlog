var mongoose = require('mongoose');
var User = require('../models/user');

// app/routes.js
module.exports = function(app, passport) {

    app.post('/signup', passport.authenticate('local-signup', {  // creates a new user in database; also hands off to passport to do authentication with
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    app.post('/login', passport.authenticate('local-login', {
       successRedirect: '/', // redirect to the secure profile section
       failureRedirect: '/login', // redirect back to the signup page if there is an error
       failureFlash: true // allow flash messages
    }));

    app.get('/login', function(req, res) {
       // render the page and pass in any flash data if it exists
       res.render('login.ejs', {
           message: req.flash('loginMessage')
       });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


};