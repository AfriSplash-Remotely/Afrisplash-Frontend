import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Head from 'next/head';
import Script from 'next/script';

interface MapProps {
    address: string;
}


const Map: React.FC<MapProps> = ({ address }) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadMap = async () => {
            try {
                const loader = new Loader({
                    apiKey: 'AIzaSyB2zR4510pMkfORNtxU4ngOTXmcugErYwE',
                    version: 'weekly',
                });

                const google = await loader.load();

                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address }, (results, status) => {
                    if (status === 'OK') {
                        const map = new google.maps.Map(mapRef.current!, {
                            center: results[0].geometry.location,
                            zoom: 8,
                        });
                        const marker = new google.maps.Marker({
                            map,
                            position: results[0].geometry.location,
                        });
                    } else {
                        console.error(`Geocode was not successful for the following reason: ${status}`);
                    }
                });
            } catch (error) {
                console.error('Error loading Google Maps API:', error);
            }
        };

        loadMap();
    }, [address]);

    return (
        <div className='w-full'>
            <Head>
                <Script src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB2zR4510pMkfORNtxU4ngOTXmcugErYwE&libraries=places`} />
            </Head>
            <div className='border-2 border-map_border w-[100%]  md:h-[435px] h-[355px]' ref={mapRef} />
        </div>
    );
};

export default Map;
