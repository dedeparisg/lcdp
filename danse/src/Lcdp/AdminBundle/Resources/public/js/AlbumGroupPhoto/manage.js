$(function(){

    // Gestion de la suppression des vidéos
    $('div#photo-content').on('click', '.delete-picture', function(e) {
        e.preventDefault();
        removePicture($(this));
    });

});


/**
 * Gestion de la suppression des videos
 */
function removePicture(elem) {
    $td = elem.closest('td');

    // Appel AJAX pour sauvegarder la modification que l'on vient d'apporter
    $.ajax({
        type: 'POST',
        url: elem.attr('href'),
        success: function(data){
            if (data.success === true) {
                $td.remove();
            } else {
                alert("Une erreur est survenue lors de la suppression de l'image.");
            }
        }
    });
}