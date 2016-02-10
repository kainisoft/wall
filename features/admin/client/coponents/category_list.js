Template.categoryList.onCreated(function() {
    this.autorun(() => {
        this.subscribe('store.categories.all');
    });

    this.getCategoryId = ( element ) => {
        return $(element).data('categoryId');
    };

    this.getData = ( dataName ) => {
        var i = 0, data = Template.parentData(i++);

        while (data !== null && !_.has(data, dataName)) {
            data = Template.parentData(i);
            i++;
        }

        return data && data[dataName] || null;
    };

    this.runFunction = ( funcName, categoryId ) => {
        var func = this.getData(funcName);

        if (_.isFunction(func)) {
            func(categoryId);
        }
    };
});

Template.categoryList.onRendered(function() {
    var template = this;

    //template.$('.accordion button').on('click', function() {
    //    template.categoryId.set($(this).data('categoryId'));
    //    template.$('.foo2').modal({detachable: false}).modal('show');
    //});
});

Template.categoryList.helpers({
    hasChild( id ){
        return StoreCategories.collection.find({categoryId: id}).count();
    },
    childCategories( id ){
        return StoreCategories.collection.find({categoryId: id}).fetch() || [];
    }
});

Template.categoryList.events({
    'click .js-create-child'( event, template ) {
        var categoryId = template.getCategoryId(event.target);

        template.runFunction('createCategoryHandler', categoryId);
        event.stopPropagation();
    },
    'click .js-form-builder'( event, template ) {
        var categoryId = template.getCategoryId(event.target);

        template.runFunction('formbuilder', categoryId);
        event.stopPropagation();
    }
});
