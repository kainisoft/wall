StoreCategoryForm = {};
StoreCategoryForm.collection = new Mongo.Collection('StoreCategoryForm');
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
StoreCategoryForm.collection.attachSchema(StoreCategoryForm.schema);
StoreCategoryForm.publicFields = {categoryId: 1, formId: 1}; // TODO any it's not working. _id always return
