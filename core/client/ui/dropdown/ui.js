UIDropDown = class extends UICustom {
    constructor() {
        super();

        this.setData('menus', []);
    }

    getTemplateName() {
        return 'uiDropDown';
    }

    addMenuIten( menuItem ) {
        if (!(menuItem instanceof  UIDropDownItem)) {
            throw new Error(''); // TODO write error message
        }

        this.data['menus'].push(menuItem);
    }

    setOnChange( handler ) {
        this.setData({onChange: ( value, text, $choice ) => {
            if (_.isFunction(handler)) {
                handler.call(this, value, text, $choice);
            }
        }});
    }
};

UIDropDownItem = class extends UICustom {
    constructor() {
        super();

        this.setData({
            href: 'javascript://'
        });
    }

    getTemplateName() {
        return 'uiDropDownItem';
    }

    setHref( href ) {
        this.setData({href});
    }
};
