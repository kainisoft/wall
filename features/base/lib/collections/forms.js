Forms = {};
Forms.collection = new Mongo.Collection('Forms');
Forms.fieldSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    presentation: {
        type: String,
        allowedValues: ['text', 'select', 'rich-text', 'checkbox', 'checkbox-group', 'date'],
        label: 'Presentation'
    },
    required: {
        type: Boolean,
        label: ''
    },
    label: {
        type: String
    },
    description: {
        type: String,
        optional: true
    },
    values: {
        type: [String],
        optional: true
    }
});
Forms.schema = new SimpleSchema({
    fields: {
        type: [Forms.fieldSchema],
        minCount: 1
    }
});
Forms.collection.attachSchema(Forms.schema);