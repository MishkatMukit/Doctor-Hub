import React, { useState } from 'react';
import { Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

  
const MyMap = () => {
    const [markerLocation] = useState({
    lat: 22.3609464,    // Dhaka, Bangladesh
    lng: 91.8487879,
  });
    return (
          <Map
        style={{ width: '100%', height: '500px' }}
        defaultCenter={markerLocation}
        defaultZoom={10}
        gestureHandling="greedy"
      >
        <AdvancedMarker position={markerLocation}>
          <Pin background="#FF0000" glyphColor="#000" borderColor="#FFF" />
        </AdvancedMarker>
      </Map>
    );
};

export default MyMap;