AuthRoutes = FlowRouter.group({
    triggersEnter: [AccountsTemplates.ensureSignedIn]
});

AuthRoutes.route('/user', {
    name: 'user',
    action() {
        blankActionRender('authorization');
    }
});

AccountsTemplates.configureRoute('signIn', {
    name: 'auth',
    path: '/auth',
    layoutTemplate: 'authContent',
    template: 'auth'
});
AccountsTemplates.configureRoute('signUp', {
    name: 'join',
    path: '/join',
    layoutTemplate: 'authContent',
    template: 'auth'
});

AccountsTemplates.configureRoute('forgotPwd');