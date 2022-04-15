import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet'
import L from 'leaflet'
import classes from './Map.module.scss'
import rec from '../../Images/Rectangle.png'
import indev from '../../Images/indev.png'
import { BsBookmark } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import windClicked from '../../Static/Icons/Wind-clicked.png'

function GetIcon(_iconSize) {
    return L.icon({
        iconUrl: require("../../Static/Icons/Wind.png"),
        iconSize: [_iconSize]
    })
}

function getIconActive(_iconSize) {
    return L.icon({
        iconUrl: require("../../Static/Icons/Wind-clicked.png"),
        iconSize: [_iconSize]
    })
}

const position = {
    lat: 51.505,
    lng: -0.09,
  }

  
function Map() {

    const [isActive, setIsActive] = useState(false)

    function handlePopupOpen() {
        setIsActive(true)
        console.log("Open")
    }

    function handlePopupClose() {
        setIsActive(false)
        console.log("Close")
    }

    return(
        <div className={classes.Map}>
            <MapContainer center={position} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                position={position} 
                icon={isActive ? getIconActive(40) : GetIcon(40)}
                eventHandlers={{
                    click: () => {
                      {setIsActive ? handlePopupOpen(40) : handlePopupClose(40)}
                    },
                  }}
                >
                    <Popup className={classes.CustomPopup} 
                    onClose={handlePopupClose}
                    isTooltipOpen={false}
                    >
                        <div className={classes.PopupNav}>
                            <img src={rec} alt="rec"/>
                            <ul>
                                <p><img src={indev} alt='indev'/>In Development</p>
                                <BsBookmark />
                            </ul>
                        </div>
                        <h1>Amherst Community Wind Farm</h1>
                        <p>Developer: Amherst Community</p>
                        <p><IoLocationOutline/> Unknown</p>
                        <button>Wind</button>
                        <button>More</button>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map