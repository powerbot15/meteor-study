Template.messages.helpers({
    messages : function(){
        //return [{text : 'sdfsdf'} ,{ text : 'sdfsdf'}];
        return Messages.find()
    }
});

Template.messages.events({
    'click a' : function(e){
        e.preventDefault();
        Messages.insert({
            text : Template.instance().$('[data-text]').val()
        })
    }
});