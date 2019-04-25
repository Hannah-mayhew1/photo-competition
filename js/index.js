'use strict';
// JavaScript for use with the index page.

var photoId;
var scores = [];

function loadRandomImage() {
    fetch(buildUrl('/random'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /random succeeded: ');
            console.log(json);

            photoId = json.id;

            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition image, ' + json.name);

            var authorName = $('#authorName');
            authorName.text(json.author);

            var photographName = $('#photographName');
            photographName.text(json.name);

            var license = $('#license');
            license.text(json.license);
        })
        .catch(function (err) {
            console.error('Request to /random failed: ', err);
        });
}

function voteUp() {
    fetch(buildUrl('/id/' + photoId + '/vote/up'), {method: 'post'})
        .then(function (response) {
            if (response.status !== 204) {
                throw new Error('Request return status code !== 204: ' + response.status + ' - ')
            }
        })
        .catch(function (err) {
            console.error('Request to \'/image/id/\' + photoId + \'/vote/up\' failed: ', err);
        });
    location.reload();
}

function voteDown() {
    fetch(buildUrl('/id/' + photoId + '/vote/down'), {method: 'post'})
        .then(function (response) {
            if (response.status !== 204) {
                throw new Error('Request return status code !== 204: ' + response.status + ' - ')
            }
        })
        .catch(function (err) {
            console.error('Request to \'/image/id/\'' + photoId + '\'/vote/up\' failed: ', err);
        });
    location.reload();
}

$(function () {
    loadRandomImage();
});
