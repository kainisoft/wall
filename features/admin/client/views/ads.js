Template.adminAds.onCreated(function() {
    this.categoryId = new ReactiveVar(null);

    this.autorun(() => {
        this.subscribe('store.categories.all');
    });

    this.showCreateCategoryModal = ( categoryId ) => {
        this.categoryId.set(categoryId);
        this.$('.foom').modal({detachable: false}).modal('show');
    };

    this.registerShowModalFunc = ( func ) => {
        this.showFormBuilderModal = ( categoryId ) => {
            func(categoryId).then(function( formId ) {
                Meteor.call('store.categoryForm.insert', {categoryId, formId}, function( err, res ) {
                    var f = 90;
                });
            }).catch(function() {

            });
        };
    };
});

Template.adminAds.onRendered(function() {
    var template = this;

    this.$('.dd').nestable({
        maxDepth: 999,
        itemNodeName: '.dd-item'
    });
    this.$('#new-group').on('click', function() {
        template.$('.foom').modal({detachable: false}).modal('show');
    });
});

Template.adminAds.helpers({
    categories(){
        return StoreCategories.collection.find({categoryId: {$exists: false}}).fetch() || [];
    },
    categoryId() {
        return Template.instance().categoryId.get();
    },
    createChildCategory() {
        var temaplte = Template.instance();

        return ( categoryId ) => {
            temaplte.showCreateCategoryModal(categoryId);
        };
    },
    formBuilder() {
        var template = Template.instance();

        return ( categoryId ) => {
            template.showFormBuilderModal(categoryId);
        };
    },
    showModal() {
        return Template.instance().registerShowModalFunc;
    }
});

Template.adminAds.events({
    'click #new-group'( event, template ){
        template.showCreateCategoryModal(null);
    }
});
