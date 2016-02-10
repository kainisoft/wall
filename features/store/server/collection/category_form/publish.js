Meteor.publish('store.categoryForm.formByCategory', function( categoryId ) {
    new SimpleSchema({
        categoryId: {type: String}
    }).validate({categoryId});

    var categoryForm = StoreCategoryForm.collection.findOne({categoryId});

    if (!categoryForm) {
        return this.ready();
    }

    return Forms.collection.find(categoryForm.formId);
});
