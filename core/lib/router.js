const CONTENT = 'content';

contentActionRender = function( main, header = 'header', footer = 'footer' ) {
    BlazeLayout.render(CONTENT, {
        main,
        header,
        footer
    });
};

adminContentActionRender = function( main, header = 'adminHeader', footer = 'adminFooter' ) {
    contentActionRender(main, header, footer)
};

blankActionRender = function( main ) {
    contentActionRender(main, '', '');
};

FlowRouter.route('/auth', {
    name: 'auth',
    action() {
        blankActionRender('authorization');
    }
});
