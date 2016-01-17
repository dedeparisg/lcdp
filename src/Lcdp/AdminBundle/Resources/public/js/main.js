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

//
//$(function(){
//    $('.wysiwyg').redactor();
//});
