UITextInput = class extends UIInput {
    constructor() {
        super();

        this.setType('text');
    }

    getTemplateName() {
        return 'uiText';
    }
};
