// Google Map Initialization
function initMap() {
    const location = { lat: -1.2674, lng: 36.8111 }; // Change this to your location
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });

    // Add a marker to the map
    const marker = new google.maps.Marker({ position: location, map: map });
    
    // Handle Google Maps API errors
    google.maps.event.addListener(map, 'tilesloaded', function() {
        console.log('Map loaded successfully');
    });
    google.maps.event.addListener(map, 'tileserror', function() {
        console.error('Error loading the map');
    });
}

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    
    // Display a confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerText = "Booking confirmed! We will contact you soon.";
    confirmationMessage.style.display = 'block';
    
    // Clear the form
    event.target.reset();
});

// Add these new scripts
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("hidden");
    });
});