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
StoreItems.ItemDataArray = new SimpleSchema({
    fieldName: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    fieldDataArray: {
        type: [String],
        optional: true
    }
});
StoreItems.schema = new SimpleSchema({
    categoryId: {
        type: [String],
        regEx: SimpleSchema.RegEx.Id,
        minCount: 1
    },
    data: {
        type: [StoreItems.ItemData],
        minCount: 1
    },
    dataArray: {
        type: [StoreItems.ItemDataArray],
        optional: true
    }
});
StoreItems.attachSchema(StoreItems.schema);

StoreItemPhotos = new Collection('StoreItemPhotos');
StoreItemPhotos.schema = new SimpleSchema({
    itemId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    photoId: {
        type: [String],
        regEx: SimpleSchema.RegEx.Id
    }
});
StoreItemPhotos.attachSchema(StoreItemPhotos.schema);
