Meteor.publish('forms.ById', function( id ) {
    new SimpleSchema({
        id: {type: String}
    }).validate({id});

    return Forms.collection.find(id);
});

Meteor.publish('Forms.ByName', function( name ) {
    new SimpleSchema({
        name: {type: String}
    }).validate({name});

    return Forms.find({name});
});

Meteor.publish('Forms.Named', function() {
    return Forms.find({name : {$exists: true, $ne : ''}});
});
