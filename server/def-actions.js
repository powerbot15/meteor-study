Meteor.publish('messages', function() {
    return Messages.find();
});
Meteor.publish('userData', function() {
    if(this.userId){
        return Meteor.users.find({}, {fields: {emails: 1}});
    }
    else{
        this.ready();
    }
});

Meteor.startup(function () {
    Meteor.users.find().forEach(function(user){
        console.dir(user.emails);
    })
});