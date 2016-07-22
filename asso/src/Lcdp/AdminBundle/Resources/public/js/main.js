$(function () {

    //SideMenu animated accordion toggle
    $('#sidebar-menu .sidebar-nav a.accordion-toggle').click(function (e) {
        e.preventDefault();

        var SubMenus = $('#sidebar-menu ul.sub-nav'),
            MenuUrl = $(this).attr('href');

        if ($(this).hasClass('collapsed')) {

            // To create accordion effect we collapse all open menus
            $('#sidebar-menu .sidebar-nav > li > a.accordion-toggle').addClass('collapsed');
            $(SubMenus).slideUp('fast');

            // When effect is complete we remove ".menu-open" class
            $(SubMenus).promise().done(function () {
                $(SubMenus).removeClass('menu-open');
            });

            // We now open the targeted menu item.
            $(this).removeClass('collapsed');
            $(MenuUrl).slideDown('fast', function () {
                // after the animation we apply the "menu-open" class.
                // The animation leaves an inline "display:block" style.
                // We remove this as it interferes with media queries
                $(MenuUrl).addClass('menu-open').attr('style', '');
            });
        } else {
            $(this).addClass('collapsed');
            $(MenuUrl).slideUp('fast', function () {
                $(MenuUrl).removeClass('menu-open');
            });
        }
    });

    // Gestion des fancybox
    $( ".fancybox" ).each(function() {
        $(this).fancybox({
            maxWidth: $(this).data('maxWidth') || 1024,
            maxHeight: $(this).data('maxHeight') || 768,
            //fitToView: true,
            width: $(this).data('width') || 1024,
            height: $(this).data('height') || 768,
            left: '50',
            top: '10',
            type: 'iframe',
            btnClose: true,
            topRatio: $(this).data('topRatio') || 0.1
        });
    });
});

/**
 * Permet de valider une adresse email
 *
 * @param email
 * @returns {boolean}
 */
function validateEmail(email)
{
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}