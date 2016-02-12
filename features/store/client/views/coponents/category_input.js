Template.storeCategoryInput.onCreated(function() {
    this.categoryId = new ReactiveVar(null);

    this.autorun(() => {
        this.subscribe('store.categories.all');
    });
});

Template.storeCategoryInput.onRendered(function() {
    $('#store-category-input-dd', this.firstNode).dropdown({
        on: 'hover',
        delay: {hide: 50, show: 50},
        metadata: {value: 'group-id'},
        onChange: ( value ) => {
            this.categoryId.set(value);
        }
    });
});

Template.storeCategoryInput.helpers({
    groups() {
        let collection = StoreCategories.collection.find({categoryId: {$exists: false}}).fetch();
        let groups = _.reduce(collection, ( carry, group ) => {
            let options = StoreCategories.collection.find({categoryId: group._id}).fetch();

            carry.push({
                id: group._id,
                label: group.name,
                options
            });

            return carry;
        }, []);

        return groups;
    },
    categoryId() {
        return Template.instance().categoryId.get();
    }
});