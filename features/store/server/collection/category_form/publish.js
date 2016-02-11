Meteor.publishComposite('store.categoryForm.formByCategory', function( categoryId ) {
    new SimpleSchema({
        categoryId: {type: String}
    }).validate({categoryId});

    return {
        find() {
            return StoreCategoryForm.collection.find({categoryId});
        },
        children: [{
            collectionName: "categoryRelatedForm",
            find( categoryForm ) {
                return Forms.collection.find(categoryForm.formId);
            }
        }]
    };
});
