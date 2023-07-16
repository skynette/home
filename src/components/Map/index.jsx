import React from 'react'
import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};


function MapComponent(props) {
    const {latitude, longitude, info} = props;

    const center = {
        lat: latitude,
        lng: longitude
      };
      

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDR13r7UK4JwN0djIc9xgjJy3RJwJvLHtI"
  })

  const [map, setMap] = React.useState(null)
  const [z, setZ] = useState(0)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

useEffect(()=>{
    setTimeout(()=>{
        setZ(14)
    }, 500)
},[])
    const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={z}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={{
            lat: latitude,
            lng: longitude
        }}
        label={info}
        />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)