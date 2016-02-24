Template.uiPhotoUpload.onCreated(function() {
    this.nameList = ReactiveVar([]);

    Uploader.init(this);

    Uploader.finished = (index, fileInfo, templateContext) => {
        this.nameList.set(
            this.nameList.get().concat(fileInfo.name)
        );
    };

    this.autorun(() => {
        this.subscribe('Uploads.ByNames', this.nameList.get());
    });
});

Template.uiPhotoUpload.onRendered(function () {
    Uploader.render.call(this);
});

Template.uiPhotoUpload.events({
    'click .start': function (e) {
        Uploader.startUpload.call(Template.instance(), e);
    }
});

Template.uiPhotoUpload.helpers({
    'infoLabel': function() {
        var instance = Template.instance();

        // we may have not yet selected a file
        var info = instance.info.get()
        if (!info) {
            return;
        }

        var progress = instance.globalInfo.get();

        // we display different result when running or not
        return progress.running ?
        info.name + ' - ' + progress.progress + '% - [' + progress.bitrate + ']' :
        info.name + ' - ' + info.size + 'B';
    },
    'progress': function() {
        return Template.instance().globalInfo.get().progress + '%';
    },
    photos() {
        var names = Template.instance().nameList.get();

        return Uploads.findIn('name', names).fetch();
    }
});

Template.uiPhotoUploadList.helpers({
    className() {
        return this.photos.length <= 3 ? 'small' : 'tiny';
    }
});
