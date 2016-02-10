Template.formModal.onCreated(function() {
    this.doc = new ReactiveVar(null);

    this.showModal = ( categoryId ) => {
        if (categoryId) {
            this.autorun(() => {
                this.subscribe('store.categoryForm.formByCategory', categoryId);
            });

            this.autorun(() => {
                var categoryForm = Forms.collection.findOne({categoryId});
            });
        }

        return new Promise(function( resolve, reject ) {
            this.$('#form_builder').modal({
                detachable: false,
                onApprove() {
                    if (AutoForm.validateForm('form')) {
                        var formValues = AutoForm.getFormValues('form');

                        Meteor.call('forms.add', formValues.insertDoc, ( err, res ) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(res);
                            }
                        });
                    }

                    return false;
                },
                onDeny: reject
            }).modal('show');
            AutoForm.hooks({
                form: {
                    onSubmit: function (doc) {
                        var f = 90;
                        //PeopleSchema.clean(doc);
                        //console.log("People doc with auto values", doc);
                        //this.done();
                        //return false;
                    }
                }
            });
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
