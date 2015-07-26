Meteor.publish('messages', function() {
    return Messages.find();
});
Meteor.publish('userData', function(userId) {
    if(this.userId){
        return Meteor.users.find({_id : userId}, {fields: {emails: 1}});
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