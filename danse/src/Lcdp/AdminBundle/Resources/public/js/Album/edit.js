$(function(){
    // Gestion de l'affichage des videos ou photos
    $('span.video').on('click', function() {
        $('#photo-content').addClass('hidden');
        $('#video-content').removeClass('hidden');
    });
    $('span.photo').on('click', function() {
        $('#video-content').addClass('hidden');
        $('#photo-content').removeClass('hidden');
    });

    // Gestion des actions sur la liste des videos
    $('span.edit-video').on('click', function(){
        cleanVideoContent();

        var elemId = $(this).closest('tr').data('attr');
        $('body').find("#video-collection-" + elemId).removeClass('hidden');
    });
    $('span.preview-video').on('click', function(){
        cleanVideoContent();

        var url = $(this).closest('tr').data('url');
        $("#video-preview").removeClass('hidden').html(url);
    });

    // Gestion des collections des vidéos
    $('div#video-content').on('click', '.add_tag_link', function(e) {
        e.preventDefault();
        addBlocForm();
    });
    $('div#collectionHolder').on('click', '.supp_tag_link', function (e) {
        e.preventDefault();
        removeBlocForm($(this));
    });

    // Initialisation des collection des videos
    if ($('#collectionHolder').find('.row').length == 0) {
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

    initTinyMCE(); // On initialise le WYSIWYG
    cleanVideoContent();
    $('body').find("#video-collection-" + totalPageCount).removeClass('hidden');
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

/**
 * Permet de faire le ménage dans la sections des vidéos
 */
function cleanVideoContent() {
    $("#video-preview").addClass('hidden');
    $('body').find('.video-collection').each(function(){
        $(this).addClass('hidden');
    });
}