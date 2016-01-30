Template.itemDetails.onRendered(function() {
    this.$('#send-message').on('click', function() {
        $('.ui.modal').modal('show');
    })
});
