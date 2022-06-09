import { Geolocation } from 'ol';
import React, { useContext, useEffect } from 'react'
import MapContext from "../Map/MapContext";

function CurrentLocation() {
    const { map } = useContext(MapContext);
  useEffect(() => {

    if (!map) return;
    const projection = map.getView().getProjection()
    console.log(projection)
    const geoLocation = new Geolocation({
      trackingOptions: {
        enableHighAccuracy: true,
      },
      projection: projection,
    })
    console.log(geoLocation)
    console.log(geoLocation.getPosition())
  }, []);
  return null;
}

export default CurrentLocation