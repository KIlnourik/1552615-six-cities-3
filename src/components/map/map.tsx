import { useEffect, useRef } from 'react';
import { City, Offer } from '../../types/offer';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

type Props = {
  parentClass: string;
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({ parentClass, city, offers, selectedOffer }: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const width = parentClass.includes('offer') ? '1144px' : '100%';

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return (
    <section className={`${parentClass} map`}>
      <div id='map' style={{display: 'block', width: width, height: '100%', margin: '0 auto'}} ref={mapRef}>
      </div>
    </section>
  );
}
