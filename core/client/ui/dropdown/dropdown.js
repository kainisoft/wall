Template.uiDropDown.onRendered(function() {
    this.$('.simple.dropdown').dropdown({
        onChange: this.data.onChange
    });
});

Template.uiDropDownItem.onCreated(function() {
    var f = 90;
});
