UISelect = class extends UIInput {
    constructor( name ) {
        super(name);

        this.setData('menus', []);
    }

    getTemplateName() {
        return 'uiSelect';
    }

    addMenuIten( menuItem ) {
        if (!(menuItem instanceof  UISelectItem)) {
            throw new Error(''); // TODO write error message
        }

        this.data['menus'].push(menuItem);
    }
};

UISelectItem = class extends UICustom {
    constructor() {
        super();

    }

    getTemplateName() {
        return 'uiSelectItem';
    }
};
