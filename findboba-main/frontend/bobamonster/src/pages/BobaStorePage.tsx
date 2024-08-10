import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Shop {
  id: string;
  name: string;
  address: string;
}

const ShopDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [shop, setShop] = useState<Shop | null>(null);

  useEffect(() => {
    const fetchShopDetails = async () => {
      if (id) {
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        const request: google.maps.places.PlaceDetailsRequest = {
          placeId: id,
          fields: ['name', 'formatted_address'],
        };
        
        service.getDetails(request, (result, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && result) {
            setShop({
              id: result.place_id!,
              name: result.name!,
              address: result.formatted_address!,
            });
          }
        });
      }
    };

    fetchShopDetails();
  }, [id]);

  return (
    <div>
      <h1>Boba Shop Details</h1>
      {shop ? (
        <>
          <h2>{shop.name}</h2>
          <p>{shop.address}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShopDetail;
