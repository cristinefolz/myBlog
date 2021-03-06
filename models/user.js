var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
    local            : {       // object called 'local'; this is known as a 'Local' Authentication Strategy
        email        : String,
        password     : String,
        username     : {type: String, unique: true},
        role         : String,
        loggedIn     : Boolean,
        posts        : [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
        comments     : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);  // bcrypt.hashSync = encryption
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);