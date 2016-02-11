Template.formModal.onCreated(function() {
    this.doc = new ReactiveVar(null);
    this.formCollection = new Meteor.Collection('categoryRelatedForm');

    this.showModal = ( categoryId ) => {
        this.doc.set(null);
        if (categoryId) {
            this.autorun(() => {
                this.subscribe('store.categoryForm.formByCategory', categoryId);
            });

            this.autorun(() => {
                var categoryForm = StoreCategoryForm.collection.findOne({categoryId});

                if (categoryForm) {
                    this.doc.set(
                        this.formCollection.findOne(categoryForm.formId)
                    );
                }
            });
        }

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
                            doc = this.doc.get();

                        if (doc) {
                            Meteor.call('forms.update', doc._id, formValues.updateDoc, handler);
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
    };

    this.data.onShowModal(this.showModal);
});

Template.formModal.onRendered(function() {
    //this.$('#form_builder textarea').formBuilder();
});

Template.formModal.helpers({
    doc() {
        return Template.instance().doc.get();
    }
});
