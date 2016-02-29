Template.baseForm.onCreated(function() {
    if (this.data.formId) {
        this.autorun(() => {
            this.subscribe('forms.ById', this.data.formId);
        });
    }
});

Template.baseForm.helpers({
    atts() {
        let atts = _.pick(this, 'id', 'schema', 'class', 'type');

        return _.extend({
            id: 'base-form',
            schema: 'Forms.schema',
            'class': 'ui form',
            type: 'normal',
            doc: Forms.findById(this.formId)
        }, atts);
    },
    showSubmit() {
        return !!this.showSubmit;
    }
});
