Template.form.helpers({
    fields() {
        return this.fields || [];
    },

    toAutoFormInput( field ) {
        switch ( field.type ) {
            case 'select':
                field.options = _.object(field.options, field.options);
                return field;
        }
        if (_.contains(['SelectFromDataRange'], field.type)) {
            return {

            };
        } else {
            return field;
        }
    }
});


