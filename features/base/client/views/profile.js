Template.profile.onRendered(function() {
    this.$('#send-message').on('click', function() {
        $('.ui.modal')
            .modal('setting', 'transition', 'scale')
            .modal('show');
    })
});
