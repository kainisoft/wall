StoreCategoryForm = new Collection('StoreCategoryForm');
StoreCategoryForm.schema = new SimpleSchema({
    categoryId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    formId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    }
});
StoreCategoryForm.attachSchema(StoreCategoryForm.schema);
