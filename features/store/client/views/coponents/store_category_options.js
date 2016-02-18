Template.storeCategoryOptions.onCreated(function() {
    this.id = Random.id();
    this.categoryId = new ReactiveVar(null);

    this.autorun(() => {
        this.subscribe('store.categories.all');
    });
});

Template.storeCategoryOptions.onRendered(function() {

});

Template.storeCategoryOptions.helpers({
    id() {
        return Template.instance().id;
    },
    visibility() {
        var template = Template.instance();
        var options = template.data.categoryId
            ? StoreCategories.findChild(template.data.categoryId)
            : [];

        if (options.length) {
            $('.ui.dropdown', `#${template.id}`)
                .dropdown({
                    on: 'hover',
                    delay: {hide: 50, show: 50},
                    metadata: {
                        value: 'groupId',
                        placeholderText: 'placeholder'
                    },
                    onChange: ( value ) => {
                        template.categoryId.set(value || null);
                    }
                })
                .dropdown('refresh')
                .dropdown('restore defaults');
        } else {
            return 'transition hidden';
        }
    },
    options() {
        var categoryId = Template.instance().data.categoryId;

        return categoryId ? StoreCategories.findChild(categoryId) : [];
    },
    child() {
        return Template.instance().categoryId.get();
    }
});
