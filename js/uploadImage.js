function uploadImage() {
    var formData = new FormData();
    var nameInputField = $('#name-input');
    var authorInputField = $('#author-input');
    var licenseInputField = $('#license-input');

    var fileField = document.querySelector("input[type='file']");

    formData.append('metadata', new Blob([JSON.stringify({
        author: authorInputField.val(),
        name: nameInputField.val(),
        license: licenseInputField.val()
    })], {type: 'application/json'}));
    formData.append('rawdata', fileField.files[0]);

    fetch(buildUrl(''), {
        method: 'POST',
        body: formData
    })
        .then(function (response) {
            if (response.status !== 200) {
                alert("Your image failed to upload this time! Please try again!");
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')

            }
            alert("Your upload was successful! Thank you for your entry - Good Luck!");
            return response.json();
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)))
}
