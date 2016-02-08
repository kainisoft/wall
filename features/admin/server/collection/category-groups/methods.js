Meteor.methods({
    'categories.add'( category ) {
        Categories.collection.insert(category);
    }
});
