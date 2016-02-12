Template.storeAddAds.onCreated(function() {
    this.autorun(() => {
//        this.subscribe('store.categories.all');
    });
});

Template.storeAddAds.onRendered(function() {
    //this.$('.fluid.dropdown').dropdown();
});

Template.storeAddAds.helpers({
    categories() {
        //return StoreCategories.collection.find({categoryId: {$exists: false}}).fetch();
    }
});