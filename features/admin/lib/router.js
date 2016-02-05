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

adminRoutes.route('/menus', {
    name: 'admin.menus',
    action() {
        adminContentActionRender('adminMenus');
    }
});
