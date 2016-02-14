UIInput = class extends UICustom {
    constructor() {
        super();

        this.data.atts = {
            id: this.data.id,
            className: []
        };
    }

    setAtts( key, value ) {
        if (_.isObject(key)) {
            _.extend(this.data.atts, key);
        } else {
            this.data.atts[key] = value;
        }

        return this;
    }

    setName( name ) {
        this.setAtts({name});
    }

    setType( type ) {
        this.setAtts({type});
    }

    setClass( className ) {
        this.data.atts.className.push(className);
    }
};
