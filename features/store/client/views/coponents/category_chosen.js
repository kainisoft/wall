CHOSEN_SESSION_NAME = 'chosenCategoryId';

Template.storeCategoryChosen.onCreated(function() {
    this.categoryId = new ReactiveVar(null);

    Session.setDefault(CHOSEN_SESSION_NAME, null);

    this.autorun(() => {
        this.subscribe('store.categories.all');
    });
});

Template.storeCategoryChosen.onRendered(function() {
    $('#store-category-input-dd', this.firstNode).dropdown({
        on: 'hover',
        delay: {hide: 50, show: 50},
        metadata: {value: 'groupId'},
        onChange: ( value ) => {
            this.categoryId.set(value);
            Session.set(CHOSEN_SESSION_NAME, value);
        }
    });
});

Template.storeCategoryChosen.onDestroyed(function() {
    Session.set(CHOSEN_SESSION_NAME, null);
});

Template.storeCategoryChosen.helpers({
    groups() {
        let collection = StoreCategories.findRoot();
        let groups = _.reduce(collection, ( carry, group ) => {
            let options = StoreCategories.findChild(group._id);

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