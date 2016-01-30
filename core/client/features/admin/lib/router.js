var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    triggersEnter: [function ( context, redirect ) {
        // Check is admin
    }]
});

adminRoutes.route('/', {
    name: 'admin',
    action() {
        adminContentActionRender('adminMain');
    }
});

adminRoutes.route('/menus', {
    name: 'menus',
    action() {
        adminContentActionRender('adminMenus');
    }
});
