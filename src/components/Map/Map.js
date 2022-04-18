import React from "react";
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet'
import L from 'leaflet'
import classes from './Map.module.scss'
import rec from '../../Images/Rectangle.png'
import indev from '../../Images/indev.png'
import { BsBookmark } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

// function getIcon(_iconSize, icon) {
//     return L.icon({
//         iconUrl: require("../../Static/Icons/" + icon + ".png"),
//         iconSize: [_iconSize]
//     })
// }

function getIcon(_iconSize, icon) {
    return L.icon({
        iconUrl: require("../../Static/Icons/" + icon + ".svg"),
        iconSize: [_iconSize]
    })
}

const position = {
    lat: 55.676098,
    lng: 12.568337,
  }

function Map() {
    const data = [
        {
            img: {rec},
            indev: {indev},
            h1: 'Amherst Community Wind Farm',
            p: 'Developer: Amherst Community',
            loc: 'Unknown',
            icon: "wind",
            buttton: "Wind",
            pos: [55, 12],
            size: 30
        },
        {
            img: {},
            indev: {},
            h1: 'Amherst Community Wind Farm',
            p: 'Developer: Amherst Community',
            loc: 'Unknown',
            icon: "ev",
            buttton: "Wind",
            pos: [54.5, 12],
            size: 30
        },
        {
            img: {rec},
            indev: {indev},
            h1: 'Amherst Community Wind Farm',
            p: 'Developer: Amherst Community',
            loc: 'Unknown',
            icon: "estorage",
            buttton:"Wind",
            pos: [55, 13],
            size: 30
        },

      ];

    // const [data, setData] = useState([
    //     {
    //         img: {rec},
    //         indev: {indev},
    //         h1: 'Amherst Community Wind Farm',
    //         p: 'Developer: Amherst Community',
    //         loc: 'Unknown',
    //         icon: "Wind",
    //         buttton: "Wind",
    //         pos: [55, 12],
    //         size: 40
    //     },
    //     {
    //         img: {},
    //         indev: {},
    //         h1: 'Amherst Community Wind Farm',
    //         p: 'Developer: Amherst Community',
    //         loc: 'Unknown',
    //         icon: "Ev",
    //         buttton: "Wind",
    //         pos: [54.5, 12],
    //         size: 40
    //     },
    //     {
    //         img: {rec},
    //         indev: {indev},
    //         h1: 'Amherst Community Wind Farm',
    //         p: 'Developer: Amherst Community',
    //         loc: 'Unknown',
    //         icon: "Estorage",
    //         buttton:"Wind",
    //         pos: [55, 13],
    //         size: 40
    //     },

    //   ]);

    //   const [activeIcon, setActiveIcon] = useState(false)

    //   if (activeIcon) {
    //       setData([...data, {icon: "WClicked"}])
    //   }
    return(
        <div className={classes.Map}>
            <MapContainer center={position} zoom={4}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map((marker, index) => (
                    <Marker className={classes.Marker} position={marker.pos} key={index} icon={getIcon(marker.size, marker.icon)}>
                        <Popup className={classes.CustomPopup} 
                        // onOpen={() => setActiveIcon(true)} onClose={() => setActiveIcon(false)}
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
                ))}
            </MapContainer>
        </div>
    )
}

export default Map