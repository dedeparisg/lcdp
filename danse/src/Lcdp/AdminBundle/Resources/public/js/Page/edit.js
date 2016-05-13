$(function(){
    // On bind le click d'ajout d'un nouveau bloc
    $('div#collectionHolder').on('click', '.add_tag_link', function(e) {
        e.preventDefault();
        addBlocForm();
    });

    // On bind le click de suppression d'un bloc
    $('div#collectionHolder').on('click', '.supp_tag_link', function (e) {
        e.preventDefault();
        removeBlocForm($(this));
    });

    // Initialisation
    if (isNew && $('#collectionHolder').find('.row').length == 0) {
        addBlocForm();
    }
});

/**
 * Permet d'ajouter un nouveau bloc de texte
 */
function addBlocForm()
{
    var collectionHolder = $('#collectionHolder');

    // Récupère l'élément ayant l'attribut data-prototype comme expliqué plus tôt
    var prototype = collectionHolder.attr('data-prototype');

    // Remplace '__name__' dans le HTML du prototype par un nombre basé sur la longueur de la collection courante
    var totalPageCount = $('#collectionHolder .row').length;
    var newForm = prototype.replace(/__name__/g, totalPageCount++);

    // Affiche le formulaire dans la page dans un li, avant le lien "ajouter un tag"
    var $newEntry = $('<div></div>').append(newForm);

    collectionHolder.append($newEntry);
    collectionHolder.append('<div class="clear"></div>');


    // On initialise le WYSIWYG
    initTinyMCE();
}


/**
 * Permet de suppirmer un bloc de texte
 */
function removeBlocForm(currentElem)
{
    var collectionholder = currentElem.closest('#collectionHolder');

    // On ne fait  que de vider les champs rien s'il ne reste qu'un seul élément
    if (collectionholder.find('.row').length == 1) {
        collectionholder.find('input, textarea').val('');
        return false;
    }

    currentElem.closest('.row').remove();
}