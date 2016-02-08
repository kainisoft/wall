Template.adminAds.onCreated(function() {
    this.categoryId = new ReactiveVar(null);

    this.autorun(() => {
        this.subscribe('categories.all');
    });

    this.showCreateCategoryModal = ( categoryId ) => {
        this.categoryId.set(categoryId);
        this.$('.foom').modal({detachable: false}).modal('show');
    };

    this.showFormBuilderModal = ( categoryId ) => {
        this.$('.formbuilder').modal({detachable: false}).modal('show');
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
    this.$('#foo textarea').formBuilder();
});

Template.adminAds.helpers({
    categories(){
        return Categories.collection.find({categoryId: {$exists: false}}).fetch() || [];
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
    }
});

Template.adminAds.events({
    'click #new-group'( event, template ){
        template.showCreateCategoryModal(null);
    }
});
