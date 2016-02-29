Meteor.publish('store.categoryForm.formByCategory', function( categoryId ) {
    new SimpleSchema({
        categoryId: {type: String}
    }).validate({categoryId});

    return StoreCategoryForm.find({categoryId});
});
