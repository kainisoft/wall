Collection = class {
    constructor( name ) {
        this.collection = new Mongo.Collection(name);
    }

    insert( doc ) {
        this.collection.insert(doc);
    }

    remove( id ) {
        this.collection.remove(id);
    }

    attachSchema( schema ) {
        this.collection.attachSchema(schema);
    }

    findOne( query ) {
        return this.collection.findOne(query);
    }

    findById( _id ) {
        return this.findOne({_id});
    }

    findByKey( field, value ) {
        return this.findOne({[field]: value});
    }

    find( query ) {
        return this.collection.find(query);
    }

    findListByIds( array ) {
        return this.findIn('_id', array);
    }

    findIn( field, arr ) {
        if (!_.isArray(arr)) {
            throw new Meteor.Error('400', `Required Array. "${typeof arr}" given.`);
        }

        return this.find({[field]: {$in: arr}});
    }

    onBeforeInsert( func ) {
        this.collection.before.insert(func);
    }

    onBeforeUpdate( func ) {
        this.collection.before.update(func);
    }
};
