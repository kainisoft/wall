var storeRoutes = FlowRouter.group({
    prefix: '/store',
    name: 'store'
});

var storeAuthRoutes = FlowRouter.group({
    prefix: '/store',
    triggersEnter: [AccountsTemplates.ensureSignedIn]
});

storeAuthRoutes.route('/add-ads', {
    name: 'store-add-ads',
    action() {
        contentActionRender('storeAddAds');
    }
});

//storeAuthRoutes.route('')

FlowRouter.route('/', {
    name: 'home',
    action() {
        contentActionRender('store');
        //contentActionRender('storeItem');
        //contentActionRender('storeCategory');
        //contentActionRender('storeOrder');
    }
});
