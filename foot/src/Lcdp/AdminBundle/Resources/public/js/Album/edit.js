$(function(){
    // Gestion de l'ajout d'un groupe
    $('div#group-content').on('click', '.add_tag_link', function(e) {
        e.preventDefault();
        addGroupBlocForm();
    });
    // Gestion de la suppression d'un groupe
    $('div#collectionGroup').on('click', '.supp_tag_link', function (e) {
        e.preventDefault();
        removeGroupBlocForm($(this));
    });
    // Gestion de l'edition d'un groupe
    $('span.edit-group').on('click', function(){
        var elemId = $(this).closest('tr').data('attr');
        $('body').find("#group-collection-" + elemId).removeClass('hidden');
    });
    // managePictures();
});

/**
 * Permet d'ajouter un nouveau bloc de texte
 */
function addGroupBlocForm()
{
    var collectionGroup = $('#collectionGroup');

    // Récupère l'élément ayant l'attribut data-prototype comme expliqué plus tôt
    var prototype = collectionGroup.attr('data-prototype');

    // Remplace '__name__' dans le HTML du prototype par un nombre basé sur la longueur de la collection courante
    var totalGroupCount = $('#collectionGroup .row').length;
    var newForm = prototype.replace(/__name__/g, totalGroupCount++);

    // Affiche le formulaire dans la page dans un li, avant le lien "ajouter un groupe"
    var $newEntry = $('<div></div>').append(newForm);

    collectionGroup.append($newEntry);
    collectionGroup.append('<div class="clear"></div>');

    $('body').find("#group-collection-" + totalGroupCount).removeClass('hidden');

    initTinyMCE(); // On initialise le WYSIWYG
}

/**
 * Permet de suppirmer un bloc de texte
 */
function removeGroupBlocForm(currentElem)
{
    if(confirm('Êtes-vous sur de vouloir supprimer le groupes ainsi que toutes les photos et vidéos associées ?')) {
        currentElem.closest('.row').remove();
    }
}