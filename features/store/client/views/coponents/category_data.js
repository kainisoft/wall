Template.storeCategoryData.onCreated(function() {
    this.autorun(() => {
        this.subscribe('store.categoryForm.formByCategory', 'NRMXbPE3ypkbMDPZL');
    });
});

Template.storeCategoryData.onRendered(function() {
    this.autorun(() => {
        var f = 90;
    });
});

Template.storeCategoryData.helpers({
    formD() {
        Template.instance().subscribe('store.categoryForm.formByCategory', this.categoryId);

        var categoryForm = StoreCategoryForm.findByKey('categoryId', this.categoryId);

        return  categoryForm ? Forms.findById(categoryForm.formId) : null;
    }
});
