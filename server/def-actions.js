Messages = new Mongo.Collection('messages');

Meteor.publish('messages', function() {
    return Messages.find();
});

Meteor.startup(function () {
    // code to run on server at startup
});