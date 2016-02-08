Meteor.publish('categories.all', function() {
    return Categories.collection.find({});
});

Meteor.publish('categories.child', function( categoryId ) {
    new SimpleSchema({
        categoryId: {type: String}
    }).validate({categoryId});

    return Categories.collection.find({categoryId});
});
