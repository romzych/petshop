var utilisateur = [48.867402758574094, 2.3641758702495963]


var map = L.map('map').setView(utilisateur, 16);
L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    maxZoom: 20
}).addTo(map);

var marker = L.marker(utilisateur).addTo(map);
marker.bindPopup('<h3>Votre position</h3>');

L.circle(utilisateur, {radius: 700}).addTo(map);
