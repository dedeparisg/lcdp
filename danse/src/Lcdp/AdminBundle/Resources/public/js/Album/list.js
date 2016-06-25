var values = ['title', 'publish', 'date', 'actions'];

$(function(){
    // Gestion de la position des albums (déplacement vers le haut)
    $('#albumListForm').on('click', '.move-up-album', function () {
        var $tr = $(this).closest('tr');
        moveUp($tr);
    });

// Gestion de la position des albums (déplacement vers lebas)
    $('#albumListForm').on('click', '.move-down-album', function () {
        var $tr = $(this).closest('tr');
        moveDown($tr);
    });
});

/**
 * Gestion du déplacement vers le haut
 *
 * @param $tr Element courant
 */
function moveUp($tr) {

    // Mémorisation des identifiants des élements que l'on modifie
    var trId = $tr.data('albumid');
    var prevTrId = $tr.prev().data('albumid');

    // Mise à jour des identifiants des élements que l'on modifie
    $tr.data('albumid', prevTrId);
    $tr.prev().data('albumid', trId);

    // Appel AJAX pour sauvegarder la modification que l'on vient d'apporter
    $.ajax({
        type: 'POST',
        url: Routing.generate('lcdp_admin_album_update'),
        data: {
            'position_1': $tr.find('.event input').val(),
            'album_1': $tr.data('albumid'),
            'position_2': $tr.prev().find('.event input').val(),
            'album_2': $tr.prev().data('albumid')
        },
        success: function(data){
            if (data.type == "success") {
                // On met à jour visuellement
                for (var i = 0, count = values.length; i < count; i++) {
                    var $prev = $tr.prev().find('td.' + values[i]).html();
                    $tr.prev().find('td.' + values[i]).html($tr.find('td.' + values[i]).html());
                    $tr.find('td.' + values[i]).html($prev);
                }
            } else {
                $tr.data('albumid', trId);
                $tr.prev().data('albumid', prevTrId);
            }
        }
    });
}

/**
 * Gestion du déplacement vers le bas
 *
 * @param $tr Element courant
 */
function moveDown($tr) {

    // Mémorisation des identifiants des élements que l'on modifie
    var trId = $tr.data('albumid');
    var nextTrId = $tr.next().data('albumid');

    // Mise à jour des identifiants des élements que l'on modifie
    $tr.data('albumid', nextTrId);
    $tr.next().data('albumid', trId);

    // Appel AJAX pour sauvegarder la modification que l'on vient d'apporter
    $.ajax({
        type: 'POST',
        url: Routing.generate('lcdp_admin_album_update'),
        data: {
            'position_1': $tr.find('.event input').val(),
            'album_1': $tr.data('albumid'),
            'position_2': $tr.next().find('.event input').val(),
            'album_2': $tr.next().data('albumid')
        },
        success: function(data){
            if (data.type == "success") {
                // On met à jour visuellement
                for (var i = 0, count = values.length; i < count; i++) {
                    var $next = $tr.next().find('td.' + values[i]).html();
                    $tr.next().find('td.' + values[i]).html($tr.find('td.' + values[i]).html());
                    $tr.find('td.' + values[i]).html($next);
                }
            } else {
                $tr.data('albumid', trId);
                $tr.next().data('albumid', nextTrId);
            }
        }
    });
}
