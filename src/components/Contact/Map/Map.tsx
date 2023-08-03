import React from 'react'

import { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import './style.css'
import 'leaflet/dist/leaflet.css'

const markerPosition: LatLngExpression = [43.30695378394632, 21.92846524854377]
const center: LatLngExpression = [43.30695378394632, 21.92346524854377]

const Map = () => {
  return (
    <MapContainer
      center={center}
      minZoom={13}
      zoom={16}
      scrollWheelZoom={true}
      maxZoom={18}
      zoomControl={false}
      className="brightness-50 grayscale "
      maxBounds={[center, center]}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition}></Marker>
    </MapContainer>
  )
}

export default Map
