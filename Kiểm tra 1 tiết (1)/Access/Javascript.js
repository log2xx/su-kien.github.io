$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('moving');
            $('#logo').attr('src', 'img/logo-dark.png');
        } else {
            $('.navbar').removeClass('moving');
            $('#logo').attr('src', 'img/logo-light.png');
        }

        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function() {
        return $('body, html').animate({ scrollTop: 0 }, 400), !1;
    });
});

/*Hàm Mở Form*/
function moForm() {
    document.getElementById("myForm").style.display = "block";
}
/*Hàm Đóng Form*/
function dongForm() {
    document.getElementById("myForm").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('.navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('.navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});