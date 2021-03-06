function loadMostPopularImage() {
    fetch(buildUrl(''))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request succeeded: ');
            console.log(json);

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
            console.error('Request failed: ', err);
        });
}

$(function () {
    loadMostPopularImage();
});