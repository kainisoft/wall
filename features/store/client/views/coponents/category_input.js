Template.storeCategoryInput.onCreated(function() {
    this.groups = new ReactiveVar([]);
    this.autorun(() => {
        this.subscribe('store.categories.all');
    });

    this.autorun(() => {
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
        this.groups.set(groups);
    });
});

Template.storeCategoryInput.onRendered(function() {
    this.$('#store-category-input-dd').dropdown({
        on: 'hover',
        delay: {
            hide: 50,
            show: 50
        }
    });
});

Template.storeCategoryInput.helpers({
    groups() {
        return Template.instance().groups.get();
    }
});