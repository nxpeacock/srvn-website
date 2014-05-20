Template.footer.rendered = function(){
    $(document).ready(function(){
        /* Footer Toggle
         ========================================================================== */
        $('.footer-toogle i').click(function () {
            var state = $(this).data('toggleState');
            if (!state) {
                $('.footer .top-footer').slideDown('slow');
                $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                $('.footer-toogle i').removeClass('fa-plus');
                $('.footer-toogle i').addClass('fa-minus');
                $('.footer-toogle').css({backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, 0) 50%, #232323 50%, #232323 100%)'});
                $('.footer').css({borderTop: '8px solid #232323'});
                $('.topcontrol a').css({backgroundColor: '#232323'});
            } else {
                $('.footer .top-footer').slideUp('slow');
                $('.footer-toogle i').addClass('fa-plus');
                $('.footer-toogle i').removeClass('fa-minus');
                $('.footer-toogle').css({backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, 0) 50%, #333333 50%, #333333 100%)'});
                $('.footer').css({borderTop: '8px solid #333333'});
                $('.topcontrol a').css({backgroundColor: '#333333'});
            }
            $(this).data('toggleState', !state);
        });

        $('.footer .top-footer').slideUp('slow');
    })
}