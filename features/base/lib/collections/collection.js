Collection = class {
    constructor( name ) {
        this.collection = new Mongo.Collection(name);
    }

    attachSchema( schema ) {
        this.collection.attachSchema(schema);
    }

    findById( _id ) {
        return this.collection.findOne({_id});
    }

    findByKey( key, value ) {
        return this.collection.findOne({[key]: value});
    }
};