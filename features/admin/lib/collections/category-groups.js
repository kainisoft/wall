Categories = {};
Categories.collection = new Mongo.Collection('Categories');
Categories.shcema = new SimpleSchema({
    categoryId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'hidden'
            }
        }
    },
    name: {
        type: String
    },
    order: {
        type: Number,
        optional: true
    }
});
Categories.collection.attachSchema(Categories.shcema);
