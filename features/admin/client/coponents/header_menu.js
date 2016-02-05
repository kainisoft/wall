Template.adminHeaderMenu.onRendered(function() {
    this.$('#foo').dropdown({
        action: 'hide',
        onChange: function(value, text, $selectedItem) {
            // custom action
        }
    });
});

Template.adminHeaderMenu.helpers({
    uiProfileDropDown() {
        var uiDropDown = new UIDropDown();

        uiDropDown.setLabel('Профайл');
        uiDropDown.setIcon('user');
        uiDropDown.setOnChange(function( value, text, $choice ) {
            var f = 90;
        });

        _.each([{label: 'Edit Profile', value: 'ed', icon: 'edit'}], function( menu ) {
            uiDropDown.addMenuIten(new UIDropDownItem().setData(menu));
        });

        return uiDropDown;
    }
});
