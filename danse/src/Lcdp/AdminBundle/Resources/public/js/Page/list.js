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
    for (var i = 0, count = values.length; i < count; i++) {
        var $prev = $tr.prev().find('td.' + values[i]).html();
        $tr.prev().find('td.' + values[i]).html($tr.find('td.' + values[i]).html());
        $tr.find('td.' + values[i]).html($prev);
    }
}

/**
 * Gestion du déplacement vers le bas
 *
 * @param $tr Element courant
 */
function moveDown($tr) {
    for (var i = 0, count = values.length; i < count; i++) {
        var $next = $tr.next().find('td.' + values[i]).html();
        $tr.next().find('td.' + values[i]).html($tr.find('td.' + values[i]).html());
        $tr.find('td.' + values[i]).html($next);
    }
}
