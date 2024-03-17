document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var birthdate = document.getElementById('birthdate').value;
        var preferences = document.getElementById('preferences').value;
        var country = document.getElementById('country').value;
        var profilePic = document.getElementById('profilePic').value;

        // Here you can process the form data, send it to a server, or store it locally
        console.log('Name:', name);
        console.log('Birthdate:', birthdate);
        console.log('Preferences:', preferences);
        console.log('Country:', country);
        console.log('Profile Picture:', profilePic);

        // Redirect to a confirmation page after registration
        window.location.href = 'confirmation.html'; // Change 'confirmation.html' to the desired page
    });
});
