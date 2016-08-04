$(function () {
    // Gestion de la suppression des vidéos
    $('div#photo-content').on('click', '.delete-picture', function (e) {
        e.preventDefault();
        removePicture($(this));
    });

    $("#sortable").sortable({
        stop: function (event, ui) {
            var postData = {};
            $('#sortable').find('.admin_picture_list').each(function(i){
                postData[$(this).data('pictureid')] = i;
            });

            // Appel AJAX pour sauvegarder la modification que l'on vient d'apporter
            $.ajax({
                type: 'POST',
                data: {'data': postData},
                url: Routing.generate(
                    'lcdp_admin_change_picture_priority',
                    {
                        'albumId': $('div#photo-content').data('albumid'),
                        'groupId': $('div#photo-content').data('groupid')
                    }
                )
            });
        }
    });
});


/**
 * Gestion de la suppression des videos
 */
function removePicture(elem) {
    $div = elem.closest('div');

    // Appel AJAX pour sauvegarder la modification que l'on vient d'apporter
    $.ajax({
        type: 'POST',
        url: elem.attr('href'),
        success: function (data) {
            if (data.success === true) {
                $div.remove();
            } else {
                alert("Une erreur est survenue lors de la suppression de l'image.");
            }
        }
    });
}