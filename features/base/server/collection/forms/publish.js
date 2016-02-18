Meteor.publish('forms.ById', function( id ) {
    new SimpleSchema({
        id: {type: String}
    }).validate({id});

    return Forms.collection.find(id);
});

Meteor.publish('forms.Named', function() {
    return Forms.find({name : {$exists: true, $ne : ''}});
});
