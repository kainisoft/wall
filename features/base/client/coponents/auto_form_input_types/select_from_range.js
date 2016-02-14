AutoForm.addInputType('selectFromRange', {
    template: 'autoFormSelectFromRange',
    valueIn( value ) {
        var f = moment().year();
        return value;
    },
    valueOut() {
        return [
            this.find('input[name=begin]').val(),
            this.find('input[name=end]').val()
        ]
    },
    contextAdjust( context ) {
        return context;
    }
});