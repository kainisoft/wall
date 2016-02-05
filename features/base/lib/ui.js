UserInterface = class {
    constructor() {
        this.template = this.getTemplateName();
        this.data = {
            id: Random.id()
        };
    }

    getTemplateName() {
        throw new Error('This method should implemented!');
    }

    setData( key, value ) {
        if (_.isObject(key)) {
            _.extend(this.data, key);
        } else {
            this.data[key] = value;
        }

        return this;
    }

    getData( key ) {
        return this.data[key] || null;
    }
};

UICustom = class extends UserInterface {
    setLabel( label ) {
        this.setData({label});
    }

    setIcon( icon ) {
        this.setData({icon});
    }

    setValue( value ) {
        this.setData({value});
    }

    getLabel() {
        return this.getData('label');
    }

    getIcon() {
        return this.getData('icon');
    }

    getValue() {
        return this.getData('value');
    }
};