import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Shop {
  id: string;
  name: string;
  address: string;
}

const HomePage: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [shops, setShops] = useState<Shop[]>([]);
  const [search, setSearch] = useState<boolean>(false);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<google.maps.Map | null>(null);
  const service = useRef<google.maps.places.PlacesService | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      map.current = new google.maps.Map(mapRef.current, {
        center: { lat: -33.866, lng: 151.196 },
        zoom: 15,
      });

      service.current = new google.maps.places.PlacesService(map.current);
    }
  }, []);

  useEffect(() => {
    if (search && location.trim() !== '' && service.current) {
      const request = {
        query: `boba in ${location}`,
        fields: ['name', 'geometry', 'formatted_address', 'place_id'],
      };

      service.current.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const shopResults = results.map(result => ({
            id: result.place_id!,
            name: result.name!,
            address: result.formatted_address!,
          }));
          setShops(shopResults);
          if (map.current && results[0].geometry?.location) {
            map.current.setCenter(results[0].geometry.location);
          }
        }
        setSearch(false);
      });
    }
  }, [search, location]);

  const handleSearch = () => {
    setSearch(true);
  };

  return (
    <div className="home-page">
      <div>
        <h3>Boba In Your City</h3>
        <input
          type="text"
          placeholder='Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className='search-button'>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div id="map" ref={mapRef} style={{ height: '500px', width: '100%' }}></div>
        <ul className='list-of-boba-shops'>
          {shops.map((shop) => (
            <li key={shop.id}>
              <Link to={`/shop/${shop.id}`}>
                {shop.name} - {shop.address}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;