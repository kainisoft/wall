Template.storeCategoryOptions.onCreated(function() {
    this.autorun(() => {
        this.subscribe('store.categories.all');
    });
    this.foo = new ReactiveDict();

    if (this.data.categoryId) {
        this.foo.set(categoryId, null);
    }

    this.getOptions = ( categoryId ) => {
        return categoryId && StoreCategories.collection.find({categoryId}).fetch() || [];
    };
});

Template.storeCategoryOptions.onRendered(function() {
    $('#store-category-input-dd', this.firstNode).dropdown({
        on: 'hover',
        delay: {hide: 50, show: 50},
        metadata: {value: 'group-id'}
    });
});

Template.storeCategoryOptions.helpers({
    options() {
        return Template.instance().getOptions(this.categoryId);
    },
    visibility() {
        return Template.instance().getOptions(this.categoryId) && 'transition hidden';
    },
    option() {
        return Template.instance().foo.get();
    }
});