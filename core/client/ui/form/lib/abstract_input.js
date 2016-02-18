Template.abstract_input.helpers({
    name() {
        this.atts.name;
    },

    hasLabel() {
        return !!this.label;
    },

    label() {
        return this.label;
    },

    isRequired() {
        return !!this.atts.required;
    }
});