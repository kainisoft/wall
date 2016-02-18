Template.uiSelect.inheritsHelpersFrom('abstract_input');
Template.uiSelect.onRendered(function() {
    this.$('.ui.dropdown').dropdown({
        on: 'hover',
        delay: {hide: 50, show: 50},
        metadata: {value: 'value'}
    });
});