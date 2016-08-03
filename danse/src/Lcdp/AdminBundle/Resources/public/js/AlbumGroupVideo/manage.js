$(function(){
    // Gestion des actions sur la liste des videos
    $('span.edit-video').on('click', function(){
        cleanVideoContent();

        var elemId = $(this).closest('tr').data('attr');
        $('body').find("#video-collection-" + elemId).removeClass('hidden');
    });
    $('span.preview-video').on('click', function(){
        cleanVideoContent();

        var url = $(this).closest('tr').data('url');
        $("#preview").removeClass('hidden').html(url);
    });

    // Gestion des collections des vidéos
    $('div#video-content').on('click', '.add_tag_link', function(e) {
        e.preventDefault();
        addBlocForm();
    });

    // Gestion de la suppression des vidéos
    $('div#video-content').on('click', '.remove-video', function(e) {
        e.preventDefault();
        removeVideo($(this));
    });

    // Initialisation des collections des videos
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
 * Permet de faire le ménage dans la sections des vidéos
 */
function cleanVideoContent() {
    $("#preview").addClass('hidden');
    $('body').find('.video-collection').each(function(){
        $(this).addClass('hidden');
    });
}

/**
 * Gestion de la suppression des videos
 */
function removeVideo(elem) {
    $tr = elem.closest('tr');

    // Appel AJAX pour sauvegarder la modification que l'on vient d'apporter
    $.ajax({
        type: 'POST',
        url: elem.attr('href'),
        success: function(data){
            if (data.success === true) {
                $tr.remove();
            } else {
                alert("Une erreur est survenue lors de la suppression de la vidéo.");
            }
        }
    });
}