/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
    address: string;
}

const LocateMap: React.FC<MapProps> = ({ address }) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadMap = async () => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'DEFAULT_API_KEY';

                const loader = new Loader({
                    apiKey,
                    version: 'weekly',
                });

                const google = await loader.load();

                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address }, (results, status) => {
                    if (status === 'OK') {
                        if (results && results.length > 0) {
                            const map = new google.maps.Map(mapRef.current!, {
                                center: results[0]?.geometry.location,
                                zoom: 8,
                            });
                            new google.maps.Marker({
                                map,
                                position: results[0]?.geometry.location,
                            });
                        } else {
                            console.error('No results found');
                        }
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
            <div className='border-2  border-map_border w-[100%]  md:h-[435px] h-[355px]' ref={mapRef} />
        </div>
    );
};

export default LocateMap;
