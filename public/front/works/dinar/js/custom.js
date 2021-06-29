(function ($) {
    "use strict";

    /* ==============================================
    MENU -->
    =============================================== */

    $('ul.dropdown-menu [data-toggle=dropdown]').bind('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().addClass('open');
        $(this).parent().find("ul").parent().find("li.dropdown").addClass('open');
    });

    /* ==============================================
    FUN -->
    =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1;
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        }
        else {
            setTimeout(function () { count($this) }, 1);
        }
    }
    $(".stat-count").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    /* ==============================================
    LOADER -->
    =============================================== */

    $(window).load(function () {
        $('#loader').delay(300).fadeOut('slow');
        $('#loader-container').delay(200).fadeOut('slow');
        $('body').delay(300).css({ 'overflow': 'visible' });
    })

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

})(jQuery);