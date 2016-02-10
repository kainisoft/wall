Meteor.publish('form.id', function( id ) {
    new SimpleSchema({
        id: {type: String}
    }).validate({id});

    return Forms.collection.findOne(id);
});
