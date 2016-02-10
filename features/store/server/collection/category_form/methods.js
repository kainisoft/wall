Meteor.methods({
    'store.categoryForm.add'( categoryForm ) {
        StoreCategoryForm.schema.validate(categoryForm);

        return StoreCategoryForm.collection.insert(categoryForm);
    }
});
