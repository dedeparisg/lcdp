totalPageCount = 10;

$(function(){
    // On bind le click d'ajout de nouveau filtre
    $('div.panel-heading').on('click', '.add_tag_link', function(e) {
        e.preventDefault();
        addFilterForm();
    });
});

/**
 * Permet d'ajouter un nouveau critère de recherche
 */
function addFilterForm()
{
    var collectionHolder = $('#collectionHolder');

    // Récupère l'élément ayant l'attribut data-prototype comme expliqué plus tôt
    var prototype = collectionHolder.attr('data-prototype');

    // Remplace '__name__' dans le HTML du prototype par un nombre basé sur la longueur de la collection courante
    var newForm = prototype.replace(/__name__/g, totalPageCount++);

    // Affiche le formulaire dans la page dans un li, avant le lien "ajouter un tag"
    var $newEntry = $('<div></div>').append(newForm);

    collectionHolder.append($newEntry);
    collectionHolder.append('<div class="clear"></div>');
    //collectionHolder.find('.add_tag_link:not(:first)').remove();
    //collectionHolder.find('.supp_tag_link').on('click', function() {
    //    $(this).parent().parent().remove().next().remove();
    //});
}
