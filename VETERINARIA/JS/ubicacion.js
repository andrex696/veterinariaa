// Función para inicializar el mapa
function initMap() {
    // Coordenadas iniciales (Centro del mapa)
    var initialCoords = { lat: -34.397, lng: 150.644 };
    
    // Crear el mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: initialCoords
    });
}
