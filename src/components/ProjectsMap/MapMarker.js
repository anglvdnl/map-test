import React, { useEffect, useRef, useState } from 'react'
import { Marker, Popup } from 'react-leaflet';
import { getIcon, getIconClicked } from "../../data/utils/getIcons";
import CustomPopup from '../CustomProjectsPopup/CustomPopup';
import classes from './ProjectsMap.module.scss'

function MapMarker(props) {
    const project = props.project
    const map = props.map
    
    const [isIconClicked, setIsIconClicked] = useState(false)

    let popupRef = useRef();

    useEffect(() => {
        if (popupRef && isIconClicked) {
            popupRef.openOn(map);
        }
    }, [isIconClicked, map]);

    return (
        <Marker
            className={classes.Marker}
            position={project.position}
            icon={isIconClicked ? getIconClicked(project.iconClicked) : getIcon(project.icon)}
        >

            <Popup
                ref={(r) => {
                    popupRef = r;
                }}
                onOpen={() => setIsIconClicked(true)}
                onClose={() => setIsIconClicked(false)}
                className={classes.Popup}>
                <CustomPopup data={props.data} project={project} />
            </Popup>
        </Marker>
    )
}

export default MapMarker