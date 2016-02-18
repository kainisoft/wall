Template.adminForms.onCreated(function() {
    this.autorun(() => {
        this.subscribe('forms.Named');
    });
});

Template.adminForms.helpers({
    forms() {
        return Forms.find({name : {$exists: true, $ne : ''}}).fetch();
    }
});
