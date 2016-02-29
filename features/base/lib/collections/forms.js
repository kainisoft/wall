Forms = new Collection('Forms');
Forms.fieldSchema = new SimpleSchema({
    name: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden"
            },
            afFormGroup: {
                label: false
            }
        }
    },
    type: {
        type: String,
        allowedValues: ['text', 'textarea', 'price', 'radio', 'checkbox', 'select', 'Photo Uploader'],
        label: 'Type'
    },
    label: {
        type: String
    },
    placeholder: {
        type: String,
        optional: true
    },
    custom: {
        type: Object,
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

    if (_.isEmpty(doc.name)) {
        doc.name = Random.id();
    }
});
Forms.onBeforeUpdate(function( userId, doc ) {
    _.each(doc.fields, function( field ) {
        if (_.isEmpty(field.name)) {
            field.name = Random.id();
        }
    });

    if (_.isEmpty(doc.name)) {
        doc.name = Random.id();
    }
});