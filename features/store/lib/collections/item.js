StoreItems = new Collection('StoreItems');
StoreItems.ItemData = new SimpleSchema({
    fieldName: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    fieldData: {
        type: String,
        optional: true
    }
});
StoreItems.schema = new SimpleSchema({
    data: {
        type: [StoreItems.ItemData],
        minCount: 1
    }
});
StoreItems.attachSchema(StoreItems.schema);
