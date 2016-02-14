StoreCategories = {};
StoreCategories.collection = new Mongo.Collection('StoreCategories');
StoreCategories.shcema = new SimpleSchema({
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
StoreCategories.collection.attachSchema(StoreCategories.shcema);

StoreCategories.findRoot = function() {
    return this.collection.find({categoryId: {$exists: false}}).fetch();
};

StoreCategories.findChild = function( categoryId ) {
    return this.collection.find({categoryId}).fetch()
};
