Meteor.methods({
    'store.categoryForm.insert'( categoryForm ) {
        StoreCategoryForm.schema.validate(categoryForm);

        var exists = StoreCategoryForm.collection.find(categoryForm).count();

        if (!exists) {
            return StoreCategoryForm.collection.insert(categoryForm);
        }
    }
});
