import leaflet from 'leaflet';
import { useEffect, useRef } from 'react';
import './Map.scss'

function MapMain({ locationLon, locationLat, city }) {
  const mapRef = useRef();
  
  useEffect(() => {

    const container = leaflet.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }

    mapRef.current = leaflet.map("map").setView([locationLat, locationLon], 7);

    leaflet
      .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mapRef.current);
      
    leaflet.marker([locationLat, locationLon])
      .bindPopup(city?city:'Kiev')
      .addTo(mapRef.current);

  }, [locationLon, locationLat]);
  return (
    <div id="map" ></div>
  )
}

export default MapMain



