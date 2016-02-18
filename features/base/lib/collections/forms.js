Forms = new Collection('Forms');
Forms.fieldSchema = new SimpleSchema({
    name: {
        type: String
    },
    type: {
        type: String,
        allowedValues: ['text', 'select', 'SelectFromDataRange'],
        label: 'Type'
    },
    label: {
        type: String
    },
    placeholder: {
        type: String,
        optional: true
    },
    options: {
        type: [String],
        optional: true
    },
    required: {
        type: Boolean,
        optional: true
    }
});
Forms.schema = new SimpleSchema({
    name: {
        type: String,
        optional: true
    },
    fields: {
        type: [Forms.fieldSchema],
        minCount: 1
    }
});
Forms.attachSchema(Forms.schema);
Forms.onBeforeInsert(function( userId, doc ) {
    _.each(doc.fields, function( field ) {
        field.name = Random.id();
    });
});