Template.form.onCreated(function() {
    if (this.data.name) {
        this.autorun(() => {
            this.subscribe('Forms.ByName', this.data.name);
        });
    }
});

Template.form.helpers({
    fields() {
        var form = Forms.findByKey('name', this.name);

        if (form) {
            return form.fields || [];
        }

        return [];
    }
});


