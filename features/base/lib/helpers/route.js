const CONTENT = 'content';

contentActionRender = function( main, header = 'header', footer = 'footer' ) {
    BlazeLayout.render(CONTENT, {
        main,
        header,
        footer
    });
};

blankActionRender = function( main ) {
    contentActionRender(main, '', '');
};
