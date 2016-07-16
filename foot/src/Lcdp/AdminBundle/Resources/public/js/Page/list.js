var values = ['title', 'publish', 'date', 'actions'];

$(function(){
    // Gestion de la position des pages (déplacement vers le haut)
    $('#pageListForm').on('click', '.move-up-page', function () {
        var $tr = $(this).closest('tr');
        moveUp($tr);
    });

// Gestion de la position des pages (déplacement vers lebas)
    $('#pageListForm').on('click', '.move-down-page', function () {
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
    var trId = $tr.data('pageid');
    var prevTrId = $tr.prev().data('pageid');

    // Mise à jour des identifiants des élements que l'on modifie
    $tr.data('pageid', prevTrId);
    $tr.prev().data('pageid', trId);

    // Appel AJAX pour sauvegarder la modification que l'on vient d'apporter
    $.ajax({
        type: 'POST',
        url: Routing.generate('lcdp_admin_page_update'),
        data: {
            'position_1': $tr.find('.event input').val(),
            'page_1': $tr.data('pageid'),
            'position_2': $tr.prev().find('.event input').val(),
            'page_2': $tr.prev().data('pageid')
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
                $tr.data('pageid', trId);
                $tr.prev().data('pageid', prevTrId);
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
    var trId = $tr.data('pageid');
    var nextTrId = $tr.next().data('pageid');

    // Mise à jour des identifiants des élements que l'on modifie
    $tr.data('pageid', nextTrId);
    $tr.next().data('pageid', trId);

    // Appel AJAX pour sauvegarder la modification que l'on vient d'apporter
    $.ajax({
        type: 'POST',
        url: Routing.generate('lcdp_admin_page_update'),
        data: {
            'position_1': $tr.find('.event input').val(),
            'page_1': $tr.data('pageid'),
            'position_2': $tr.next().find('.event input').val(),
            'page_2': $tr.next().data('pageid')
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
                $tr.data('pageid', trId);
                $tr.next().data('pageid', nextTrId);
            }
        }
    });
}
