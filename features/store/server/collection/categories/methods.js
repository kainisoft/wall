Meteor.methods({
    'store.categories.add'( category ) {
        StoreCategories.collection.insert(category);
    }
});
