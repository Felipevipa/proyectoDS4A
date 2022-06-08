import { Geolocation } from 'ol';
import React, { useContext, useEffect } from 'react'
import MapContext from "../Map/MapContext";

function CurrentLocation() {
    const { map } = useContext(MapContext);
  useEffect(() => {

    if (!map) return;
    console.log(map)
    var geolocation = new Geolocation({
        // enableHighAccuracy must be set to true to have the heading value.
        trackingOptions: {
          enableHighAccuracy: true
        },
        projection: map.getView().getProjection()
    });
    // map.addLayer(vectorLayer);
    // vectorLayer.setZIndex(zIndex);
    // return () => {
    //   if (map) {
    //     map.removeLayer(vectorLayer);
    //   }
    // };
    console.log(geolocation.getPosition())
  }, []);
  return null;
}

export default CurrentLocation