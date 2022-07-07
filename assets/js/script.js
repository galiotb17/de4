$(document).ready(function () {
    $('.header-navbar').on('click', function (e) {
        if ($(e.target).closest('.header-navbar ul').length <= 0) {
            $('.header-navbar').removeClass('active');
        }
    });

});
