Template.messages.helpers({
    messages : function(){
        return Messages.find().fetch()
    }
});

Template.messages.events({
    'click #add' : addMessage
});

Template.message.events({
    'click [data-remove-item]' : function(e){
        e.preventDefault();
        Messages.remove(this._id);
    }
});

Template.message.helpers({
   'owner' : function(){
       return this.userId == Meteor.userId();
   },
    'isSigned' : function(){
        return Meteor.userId();
    },
    'emailC' : function(){
        return this.email || 'Unknown';
    }
});
function addMessage(e){
    e.preventDefault();
    if(!Meteor.userId()){
        noty({ text : 'Please sign in!', type : 'error', timeout : 2000});
        return;
    }
    var template = Template.instance(),
        messageText = template.$('[data-text]').val(),
        alreadyExists;
    if(messageText.trim().length == 0){
        noty({text : 'Input message first', type : 'error', timeout : 2000});
        return;
    }
    template.$('input').val('').focus();
    alreadyExists = Messages.find({text : messageText}).fetch();
    if(alreadyExists.length > 0){
        noty({text : 'Already exists', type : 'warning', timeout : 2000});
        return;
    }
    console.dir( Meteor.users.find().fetch());
    Messages.insert({
        text : messageText,
        userId : Meteor.userId(),
        email : Meteor.users.find().fetch()[0].emails[0].address

    })


}