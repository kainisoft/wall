Template.storeCategoryData.onCreated(function() {
    this.autorun(() => {
        var categoryId = Session.get(CHOSEN_SESSION_NAME);

        if (categoryId) {
            this.subscribe('store.categoryForm.formByCategory', categoryId);
        }
    });
});

Template.storeCategoryData.onRendered(function() {
    this.autorun(() => {
        var categoryId = Session.get(CHOSEN_SESSION_NAME);
        var categoryForm = StoreCategoryForm.findByKey('categoryId', categoryId);

        if (categoryForm) {
            this.doc.set(
                Forms.findById(categoryForm.formId)
            );
        }
    });
});
