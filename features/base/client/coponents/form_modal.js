Template.formModal.onCreated(function() {
    this.formId = new ReactiveVar(null);

    this.data.onShowModal(( formId ) => {
        this.formId.set(formId || null);

        return new Promise(( resolve, reject ) => {
            this.$('#form_builder').modal({
                detachable: false,
                onApprove: () => {
                    if (AutoForm.validateForm('form')) {
                        const formValues = AutoForm.getFormValues('form'),
                            handler = ( err, res ) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(res);
                                }
                            },
                            formId = this.formId.get();

                        if (formId) {
                            Meteor.call('forms.update', formId, formValues.updateDoc, handler);
                        } else {
                            Meteor.call('forms.insert', formValues.insertDoc, handler);
                        }
                    } else {
                        return false;
                    }
                },
                onDeny: reject
            }).modal('show');
        });
    });
});

Template.formModal.onRendered(function() {
    //this.$('#form_builder textarea').formBuilder();
});

Template.formModal.helpers({
    atts() {
        return {
            id: 'form',
            formId: Template.instance().formId.get()
        };
    },
    doc() {
        return Template.instance().doc.get();
    }
});
