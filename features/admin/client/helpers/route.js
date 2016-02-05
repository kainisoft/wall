const ADMIN_CONTENT = 'adminContent';

adminContentActionRender = function( main, header = 'adminHeader', footer = 'adminFooter' ) {
    BlazeLayout.render(ADMIN_CONTENT, {
        main,
        header,
        footer
    });
};
