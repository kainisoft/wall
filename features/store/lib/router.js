FlowRouter.route('/', {
    name: 'home',
    action() {
        contentActionRender('store');
        //contentActionRender('storeItem');
        //contentActionRender('storeCategory');
        //contentActionRender('storeOrder');
    }
});