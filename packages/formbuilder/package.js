Package.describe({
    summary: 'jQuery Form Builder',
    version: '1.0.1',
    git: 'https://github.com/kevinchappell/formBuilder.git'
});

Package.onUse(function( api ) {
    api.versionsFrom('1.2.1');
    api.use('jquery');

    api.addFiles('formbuilder.css', 'client');
    api.addFiles('formbuilder.js', 'client');
    api.addFiles('jquery-ui.min.js', 'client');

    api.addAssets('frmb_sprite.png', 'client');
});
