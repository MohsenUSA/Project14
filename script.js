// Initializing the map with a specific view
var map = L.map('map').setView([51.505, -0.09], 13);

// Adding a tile layer to the map (in this case, using OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Defining an array of locations with coordinates and popup information
var locations = [
    {lat: 51.5, lon: -0.09, title: 'Marker 1', description: 'This is marker 1'},
    {lat: 51.51, lon: -0.1, title: 'Marker 2', description: 'This is marker 2'}
];

// Looping through the locations array and adding markers to the map
for (var i = 0; i < locations.length; i++) {
    var marker = L.marker([locations[i].lat, locations[i].lon]).addTo(map);
    marker.bindPopup('<b>' + locations[i].title + '</b><br>' + locations[i].description);
}
