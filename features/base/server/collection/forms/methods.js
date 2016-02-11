Meteor.methods({
    'forms.insert'( form ) {
        Forms.schema.validate(form);

        return Forms.collection.insert(form);
    },
    'forms.update'( id, form ) {
        Forms.schema.validate(form, {modifier: true});

        Forms.collection.update(id, form);
    }
});