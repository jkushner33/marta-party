import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 33.749, lng: -84.388 }}>
    {props.buses.map(bus => {
      const vehicleNumber = parseInt(bus.VEHICLE);
      const routeNumber = bus.ROUTE;
      const latitude = parseFloat(bus.LATITUDE);
      const longitude = parseFloat(bus.LONGITUDE);

      return (
        <Marker
          key={vehicleNumber}
          label={routeNumber}
          position={{
            lat: latitude,
            lng: longitude
          }}
        />
      );
    })}
  </GoogleMap>
));

export default Map;
