Package.describe({
    summary: 'Nestable jQuery Plugin',
    version: '1.0.0',
    git: 'https://github.com/dbushell/Nestable.git'
});

Package.onUse(function( api ) {
    api.versionsFrom('1.2.1');
    api.use('jquery');
    api.addFiles('jquery.nestable.js', 'client');
});
