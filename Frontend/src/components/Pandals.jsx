import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from './Navbar.jsx'; // Navbar component
import Chatbot from './Chatbot.jsx';
import durgaPujaIcon from '../../public/wallpaper2.webp'; // Import the icon image
import { Box } from '@mui/material';

// Custom marker icon for Durga Puja pandals
const durgaPujaIconInstance = new L.Icon({
  iconUrl: durgaPujaIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const SouthKolkata = () => {
  const [location, setLocation] = useState(null);
  const [pandals, setPandals] = useState([]);

  // Fetch nearby pandals (mock data, replace with actual API call)
  const fetchPandals = (lat, lng) => {
    const mockPandals = [
      {
        id: 1,
        name: 'Tridhara Sammelani Durgotsav',
        address: 'Shop Number 76B, Near Deshapriya Park, Kolkata',
        position: [22.5194, 88.3529],
      },
      // Add more pandals as needed
    ];
    setPandals(mockPandals);
  };

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation([latitude, longitude]);
        fetchPandals(latitude, longitude);
      },
      (error) => {
        console.error('Error getting location', error);
      }
    );
  }, []);

  return (
    <>
      

        <Box
          sx={{
            height: '98vh',
            backgroundImage: `url('../../wallpaper1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ color: 'white', padding: 2 }}>
            <Navbar />
          </Box>

          <Box 
            sx={{ 
              color: 'white', 
              padding: 2, 
              textAlign: 'center', 
              fontSize: { xs: '5vh', md: '8vh' }, 
              fontWeight: 'bold',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' 
            }}
          >
            Find Pujo Pandals near you
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>  
            {location && (
            <Box
              sx={{
                width: '300px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                background: 'white',
                textAlign: 'center',
              }}
            >
              <MapContainer center={location} zoom={14} style={{ height: '200px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* User's location marker */}
                <Marker position={location}>
                  <Popup>Your Location</Popup>
                </Marker>
                {/* Pandals markers */}
                {pandals.map((pandal) => (
                  <Marker key={pandal.id} position={pandal.position} icon={durgaPujaIconInstance}>
                    <Popup>
                      <strong>{pandal.name}</strong>
                      <br />
                      {pandal.address}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
              <Box sx={{ padding: '10px', fontSize: '1.2rem', color: '#333' }}>
                Nearby Durga Puja Pandals
              </Box>
            </Box>
          )}            
        </Box>
        <Box sx={{ padding: 3, backgroundColor: 'rgba(0,0,0,0.7)', borderTop: '1px solid #444' }}>
          <Chatbot />
        </Box>  
      </Box>
    </>
  )
}

export default SouthKolkata;
