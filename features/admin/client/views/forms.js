Template.adminForms.onCreated(function() {
    this.autorun(() => {
        this.subscribe('Forms.Named');
    });

    this.showCreateCategoryModal = () => {
        this.$('.foom').modal({detachable: false}).modal('show');
    };

    this.registerShowModalFunc = ( func ) => {
        this.showFormBuilderModal = ( formId ) => {
            func(formId).then(function( formId ) {
                var f = formId;
            }).catch(function() {

            });
        };
    };
});

Template.adminForms.helpers({
    forms() {
        return Forms.find({name : {$exists: true, $ne : ''}}).fetch();
    },
    showModal() {
        return Template.instance().registerShowModalFunc;
    }
});

Template.adminForms.events({
    'click .js-add-form'( event, template ) {
        template.showFormBuilderModal(null);
    },
    'click .js-edit-form'( event, template ) {
        template.showFormBuilderModal($(event.target).data('formId'));
    }
});
