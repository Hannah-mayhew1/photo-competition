function loadAllImages() {
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

            for (var i = 0; i < json.length; i++) {
                var currentImageThumbnail = json[i].thumbnail;
                $('.thumbnails').append(
                    '<div class="thumbnail-image-div"><img class="thumbnail-image" src="data:image/jpeg;base64, ' + currentImageThumbnail + '"/></div>'
                );
            }
        })
        .catch(function (err) {
            console.error('Request failed: ', err);
        });
}

$(function() {
    loadAllImages();
});