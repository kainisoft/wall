Meteor.methods({
    'forms.add'( form ) {
        Forms.schema.validate(form);

        return Forms.collection.insert(form);
    }
});