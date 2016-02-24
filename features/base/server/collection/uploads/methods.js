Meteor.methods({
    'Uploads.delete': function(_id) {
        new SimpleSchema({
            _id: String
        }).validate({_id});

        var upload = Uploads.findById(_id);

        if (upload) {
            UploadServer.delete(upload.path);
            Uploads.remove(_id);
        }
    }
});
