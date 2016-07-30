$(function(){
    // // Gestion de l'affichage des videos ou photos
    // $('span.video').on('click', function() {
    //     $('#photo-content').addClass('hidden');
    //     $('#video-content').removeClass('hidden');
    // });
    // $('span.photo').on('click', function() {
    //     $('#video-content').addClass('hidden');
    //     $('#photo-content').removeClass('hidden');
    // });

    // // Gestion des actions sur la liste des videos
    // $('span.edit-video').on('click', function(){
    //     cleanVideoContent();
    //
    //     var elemId = $(this).closest('tr').data('attr');
    //     $('body').find("#video-collection-" + elemId).removeClass('hidden');
    // });
    // $('span.preview-video').on('click', function(){
    //     cleanVideoContent();
    //
    //     var url = $(this).closest('tr').data('url');
    //     $("#video-preview").removeClass('hidden').html(url);
    // });

    // // Gestion des collections des vidéos
    // $('div#video-content').on('click', '.add_tag_link', function(e) {
    //     e.preventDefault();
    //     addBlocForm();
    // });
    // $('div#collectionHolder').on('click', '.supp_tag_link', function (e) {
    //     e.preventDefault();
    //     removeBlocForm($(this));
    // });
    //
    // // Initialisation des collections des videos
    // if ($('#collectionHolder').find('.row').length == 0) {
    //     addBlocForm();
    // }

    // // Initialisation des collections des groupes
    // if ($('#collectionGroup').find('.row').length == 0) {
    //     addGroupBlocForm();
    // }

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

/**
 * Gestion de la suppression des images
 */
function managePictures() {
    $('.delete-picture').on('click', function(){

        $tr = $(this).closest('tr');

        // Appel AJAX pour sauvegarder la modification que l'on vient d'apporter
        $.ajax({
            type: 'POST',
            url: Routing.generate('lcdp_admin_remove_picture', {'albumId': $tr.data('albumid'), 'id': $tr.data('pictureid')}),
            success: function(data){
                if (data.success === true) {
                    $tr.remove();
                } else {
                    alert("Une erreur est survenue lors de la suppression de l'image.");
                }
            }
        });
    });
}