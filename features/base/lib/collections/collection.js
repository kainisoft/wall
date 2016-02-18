Collection = class {
    constructor( name ) {
        this.collection = new Mongo.Collection(name);
    }

    attachSchema( schema ) {
        this.collection.attachSchema(schema);
    }

    find( query ) {
        return this.collection.find(query);
    }

    findById( _id ) {
        return this.collection.findOne({_id});
    }

    findByKey( key, value ) {
        return this.collection.findOne({[key]: value});
    }

    onBeforeInsert( func ) {
        this.collection.before.insert(func);
    }
};