Meteor.publish('store.categories.all', function() {
    return StoreCategories.collection.find({});
});

Meteor.publish('store.categories.child', function( categoryId ) {
    new SimpleSchema({
        categoryId: {type: String}
    }).validate({categoryId});

    return StoreCategories.collection.find({categoryId});
});
