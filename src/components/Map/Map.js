import React, {useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet'
import classes from './Map.module.scss'
import { BsBookmark } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { getIcon, getIconClicked } from "../../App";
import { CSSTransition } from "react-transition-group";

  function Map(props) {

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

    return(
        <div className={classes.Map}>
                <MapContainer center={props.position} zoom={8}
                whenCreated={(leafletMap) => setMap(leafletMap)}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {props.data.map((marker, index) => (
                        <CSSTransition in={isIconActive} timeout={200} classNames="my-node" key={index}>
                          <Marker className={classes.Marker} position={marker.pos}
                          eventHandlers={{
                              click: () => {
                                currMarkIndex.current = index;
                                handleMarkerClicked();
                              }
                            }}
                            icon={(isIconActive && currMarkIndex.current === index) ? getIconClicked(marker.size, marker.iconClicked) : getIcon(marker.size, marker.icon)}
                            >  
                              <Popup className={classes.CustomPopup}
                              ref={(r) => {
                                  popups.current[index] = r;
                                  setRefReady(true);
                                }}
                                onClose={handlePopupClose}
                              >                        
                                  <div className={classes.PopupNav}>
                                      <img src={marker.img} alt="rec"/>
                                      <ul className={classes.PopupUl}>
                                          <li><img src={marker.indev} alt='indev'/></li>
                                          <li>In Development</li>
                                          <li><BsBookmark /></li>
                                      </ul>
                                  </div>
                                  <h1>{marker.h1}</h1>
                                  <p>{marker.p}</p>
                                  <p><IoLocationOutline/>{marker.loc}</p>
                                  <button>{marker.buttton}</button>
                                  <button>More</button>
                              </Popup>
                          </Marker>
                        </CSSTransition>
                    ))}
            </MapContainer>
        </div>
    )
}

export default Map