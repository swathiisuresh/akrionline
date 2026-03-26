import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';

const mapContainerStyle = { width: '100%', height: '400px', borderRadius: '1.5rem' };
const center = { lat: 9.9312, lng: 76.2673 }; // Kochi default

function MapSelector({ onAddressSelect }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
        libraries: ['places'] // Critical for search
    });

    const [map, setMap] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [position, setPosition] = useState(center);

    const onPlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            const newPos = { lat, lng };
            
            setPosition(newPos);
            map.panTo(newPos);
            onAddressSelect(place.formatted_address, newPos);
        }
    };

    return isLoaded ? (
        <div className="space-y-4">
            <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
                <input
                    type="text"
                    placeholder="Search for your location..."
                    className="w-full p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl text-sm outline-none focus:border-[#2D6A4F] transition-all"
                />
            </Autocomplete>
            
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={position}
                zoom={15}
                onLoad={setMap}
                options={{
                    disableDefaultUI: true,
                    styles: [ /* Add "Silver" or "Dark" map styles here for aesthetic */ ]
                }}
            >
                <Marker position={position} draggable={true} />
            </GoogleMap>
        </div>
    ) : <div>Loading Terminal...</div>;
}