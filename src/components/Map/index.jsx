import React from 'react';
import { GoogleMap, LoadScript, Marker } from 'react-google-maps';
import { API_KEY } from './config';
import { LazyLoadComponent } from 'react-google-maps/lib/components/LoadScript';

const Map = () => {
  const mapStyles = {
    height: '400px',
    width: '100%'
  };x

  const markers = [
    { lat: 37.7749, lng: -122.4194 }
  ];

  return (
    <LazyLoadComponent>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={{ lat: 37.7749, lng: -122.4194 }}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}
        </GoogleMap>
      </LoadScript>
    </LazyLoadComponent>
  );
};

export default Map;