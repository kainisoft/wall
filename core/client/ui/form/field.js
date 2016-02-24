Template.field.onCreated(function() {
    var f = 90;
});

Template.field.helpers({
    getUI( field ) {
        switch ( field.type ) {
            case 'select':
                var dd = new UISelect(field);

                _.each(field.options, function( option ) {
                    var item = new UISelectItem();
                    item.setLabel(option);
                    item.setValue(option);
                    dd.addMenuIten(item);
                });

                return dd;
            case 'text':
                return new UIText(field);
            case 'Photo Uploader':
                return null;
        }

        return 'text';
    }
});
