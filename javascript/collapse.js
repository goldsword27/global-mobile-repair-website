$(document).ready(function(){
    $('.bil-link').click(function(){
        var icon = $(this).find('i');
        if (icon.hasClass('bi-arrow-down-short')) {
            icon.removeClass('bi-arrow-down-short').addClass('bi-arrow-up-short');
        } else {
            icon.removeClass('bi-arrow-up-short').addClass('bi-arrow-down-short');
        }
    });
});