import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import classes from "./ProjectsMap.module.scss";
import { getIcon, getIconClicked } from "../../data/utils/getIcons";
import { CSSTransition } from "react-transition-group";
import CustomPopup from '../CustomProjectsPopup/CustomPopup'

function ProjectsMap(props) {
  const [isIconActive, setIsIconActive] = useState(false);
  const [map, setMap] = useState();
  const [refReady, setRefReady] = useState(false);

  let popups = useRef([]);
  let currMarkIndex = useRef(0);

  function handleMarkerClicked() {
    setIsIconActive(!isIconActive);
  }

  function handlePopupClose() {
    setIsIconActive(false);
  }

  useEffect(() => {
    if (refReady && isIconActive) {
      popups.current[currMarkIndex.current].openOn(map);
    }
  }, [isIconActive, refReady, map]);

  return (
    <div className={classes.Map} data-testid="map">
      <MapContainer
        center={props.mapStartPos}
        zoom={5}
        whenCreated={(leafletMap) => setMap(leafletMap)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.data.map((marker, index) => (
          <CSSTransition
            in={isIconActive}
            timeout={200}
            classNames="my-node"
            key={index}
          >
            <Marker
              data-testid="marker-test"
              className={classes.Marker}
              position={marker.position}
              eventHandlers={{
                click: () => {
                  currMarkIndex.current = index;
                  handleMarkerClicked();
                },
              }}
              icon={
                isIconActive && currMarkIndex.current === index
                  ? getIconClicked(
                    marker.iconClicked
                  )
                  : getIcon(marker.icon)
              }
            >
              <Popup
                className={classes.Popup}
                data-testid="popup-test"
                ref={(r) => {
                  popups.current[index] = r;
                  setRefReady(true);
                }}
                onClose={handlePopupClose}
              >
                <CustomPopup data={props.data} marker={marker} />
              </Popup>
            </Marker>
          </CSSTransition>
        ))}
      </MapContainer>
    </div>
  );
}

export default ProjectsMap;

// https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJd8BlQ2BZwokRAFUEcm_qrcA&key=AIzaSyA51ABA9d3XAG7OfpRPAnbLdbqsLmf0X3E