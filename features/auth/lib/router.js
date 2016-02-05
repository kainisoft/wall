AuthRouterGroup = FlowRouter.group({
    triggersEnter: [AccountsTemplates.ensureSignedIn]
});

AuthRouterGroup.route('/user', {
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

AccountsTemplates.configureRoute('forgotPwd');