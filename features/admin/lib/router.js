var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    triggersEnter: [function ( context, redirect ) {
        // Check is admin
    }]
});

adminRoutes.route('/', {
    name: 'admin',
    action() {
        adminContentActionRender('adminIndex');
    }
});

adminRoutes.route('/ads-form', {
    name: 'admin-ads',
    action() {
        adminContentActionRender('adminAds')
    }
});

adminRoutes.route('/menus', {
    name: 'admin.menus',
    action() {
        adminContentActionRender('adminMenus');
    }
});
