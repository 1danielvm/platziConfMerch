import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  
      const mapStyles ={
        height: "50vh",
        width: "100%"  
      }

      const defaultCenter = {
        lat: data.lat, lng: data.lng
      }

  return (
    // <LoadScript googleMapsApiKey='AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'>
    <LoadScript googleMapsApiKey='Aqui va ala key que logras con el paso a paso de la api de google maps developer :D'>
      <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={17}
      center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;