Meteor.publish('Uploads.ByNames', function( names ) {
    new SimpleSchema({
        names: {type: [String]}
    }).validate({names});

    return Uploads.findIn('name', names);
});