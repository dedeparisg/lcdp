/*jslint unparam: true, regexp: true */
/*global window, $ */
$(function () {
   'use strict';
           
   $('#fileupload').fileupload({
       url: '/galery/add',
       dataType: 'json',
       autoUpload: false,
       acceptFileTypes: /(\.|\/)(jpe?g)$/i,
       maxFileSize: 5000000, // 5 MB
       // Enable image resizing, except for Android and Opera,
       // which actually support image resizing, but fail to
       // send Blob objects via XHR requests:
       disableImageResize: /Android(?!.*Chrome)|Opera/
           .test(window.navigator.userAgent),
       previewMaxWidth: 100,
       previewMaxHeight: 100,
       previewCrop: true,
       messages: {
           maxNumberOfFiles: 'Nombre maximum de fichier atteint',
           acceptFileTypes: "Ce format de fichier n'est pas accepté (jpg/jpeg uniquement)",
           maxFileSize: 'La taille de ce fichier est trop grande',
           minFileSize: 'La taille de ce fichier est trop petite'
       }
   }).on('fileuploaddone', function(e, data) {
       if (data.result.files[0].error == undefined) {
           $('#nb-pictures').html(parseInt($('#nb-pictures').html()) + 1);
       }
   });
});