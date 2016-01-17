/**
 * @author André Tapia <atapia@webnet.fr>
 */
$(function () {
    validateFormOnFocus();
    generateLoginIdOnFocus();

    // Uniquement en cas de création d'utilisateur, on calcul le login au chargement de la page
    if (isNew) {
        loginIdAjaxCall();
    }

    confirmSave();
});


/**
 * Permet de valider les champs onFocus sur les champs
 */
function validateFormOnFocus() {
    $('#lcdp_user_email_first').on('change', function () {
        if (!validateEmail($(this).val())) {
            $(this).closest('div').addClass('has-error');
        } else {
            $(this).closest('div').removeClass('has-error');
        }
    });

    $('#lcdp_user_email_second').on('change', function () {
        if ($('#lcdp_user_email_first').val() === $(this).val()) {
            $(this).closest('div').removeClass('has-error');
        } else {
            $(this).closest('div').addClass('has-error');
        }
    });

    $('#lcdp_user_cannonicalPassword_first').on('change', function () {

        var myRegex1 = new RegExp("((.*[A-Z]){1,})"); // contient au moins une majuscule
        var myRegex2 = new RegExp("((.*[a-z]){1,})"); // contient au moins une minuscule
        var myRegex3 = new RegExp("((.*[0-9]){1,})"); // contient au moins un chiffre
        var myRegex4 = new RegExp("((.*\\W|_){1,})"); // contient au moins un caractère spécial

        if (myRegex1.test($(this).val()) && myRegex2.test($(this).val()) && myRegex3.test($(this).val()) && myRegex4.test($(this).val()) && $(this).val().length >= 8) {
            $(this).closest('div').removeClass('has-error');
        } else {
            $(this).closest('div').addClass('has-error');
        }
    });

    $('#lcdp_user_cannonicalPassword_second').on('change', function () {
        if ($('#lcdp_user_cannonicalPassword_first').val() === $(this).val()) {
            $(this).closest('div').removeClass('has-error');
        } else {
            $(this).closest('div').addClass('has-error');
        }
    });
}

/**
 * Permet de générer un identifiant unique de login onFocus sur les champs "email", "nom", "prenom"
 */
function generateLoginIdOnFocus() {
    // Uniquement dans le cadre de création d'un utilisateur
    if (!isNew && $('#lcdp_user_login').val() != "") {
        return false;
    }

    $('.login-focus').on('change', function () {
        loginIdAjaxCall();
    });
    $('#lcdp_user_email_first').on('change', function () {
        loginIdAjaxCall();
    });
}

/**
 * Appel Ajax pour la génération d'un identifiant unique de connexion
 */
function loginIdAjaxCall() {
    var email = $('#lcdp_user_email_first').val();
    var firstname = $('#lcdp_user_firstname').val();
    var lastname = $('#lcdp_user_lastname').val();

    if (email == '' || !validateEmail(email) || firstname == '' || lastname == '') {
        return false;
    }

    $.post(
        Routing.generate('users_login'),
        {
            'firstname': firstname,
            'lastname': lastname,
            'email': email
        },
        function (data) {
            $('#lcdp_user_login').val(data);
        }
    )
}

/**
 * Confirmer avant sauvegarder
 */
function confirmSave() {
    $('.publish').on('click', function () {
        bootbox.dialog({
            message: "Vous êtes sur le point de modifier les informations de l'utilisateur. Confirmez-vous vos changements ?",
            buttons: {
                cancel: {
                    label: 'Annuler',
                    className: "btn btn-white"
                },
                save: {
                    label: "Confirmer",
                    className: "btn btn-primary",
                    callback: function () {
                        $('#user_form').submit();
                    }
                }
            },
            onEscape: function () {
                bootbox.hideAll()
            },
            closeButton: false,
            backdrop: true
        });
    });
}
