Forms = new Collection('Forms');
Forms.fieldSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    label: {
        type: String
    },
    presentation: {
        type: String,
        allowedValues: ['text', 'select', 'SelectFromDataRange', 'rich-text', 'checkbox', 'checkbox-group', 'date'],
        label: 'Presentation',
        autoform: {
            type: "select",
            options: function() {
                return _.reduce(Forms.fieldSchema.getAllowedValuesForKey('presentation'), ( carry, value ) => {
                    carry[value] = value;

                    return carry;
                }, {});
            }
        }
    },
    values: {
    type: [String],
        optional: true
    },
    required: {
        type: Boolean,
        optional: true
    },
    description: {
        type: String,
        optional: true
    }
});
Forms.schema = new SimpleSchema({
    fields: {
        type: [Forms.fieldSchema],
        minCount: 1
    }
});
Forms.attachSchema(Forms.schema);