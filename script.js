// Google Map Initialization
function initMap() {
    var location = { lat: -1.2674, lng: 36.8111 }; // Change this to your location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({ position: location, map: map });
}

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').innerText = "Booking confirmed! We will contact you soon.";
});
