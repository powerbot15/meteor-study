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

function addMessage(e){
    e.preventDefault();
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
    Messages.insert({
        text : messageText
    })


}