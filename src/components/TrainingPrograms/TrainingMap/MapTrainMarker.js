import React, { useEffect, useRef, useState } from 'react'
import { Marker, Popup } from 'react-leaflet';
import { getIcon, getIconClicked } from "../../../data/utils/getIcons";
import CustomTrainingPopup from './CustomTrainingPopup/CustomTrainingPopup';
import styles from './TrainingMap.module.scss'
import Carousel from '../../Carousel/Carousel'

function MapTrainMarker(props) {
    const trainings = props.trainingGroup

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
            className={styles.Marker}
            position={trainings[0].position}
            icon={isIconClicked ? getIconClicked(trainings[0].iconClicked) : getIcon(trainings[0].icon)}
        >

            <Popup
                ref={(r) => {
                    popupRef = r;
                }}
                onOpen={() => setIsIconClicked(true)}
                onClose={() => setIsIconClicked(false)}
                className={styles.Popup}>
                {trainings.length === 1
                    ? <div><CustomTrainingPopup trainings={trainings} data={trainings[0]} /></div>
                    : (<Carousel>
                        {trainings.map((x, index) => (
                            <CustomTrainingPopup trainings={trainings} key={index} data={x} />
                        ))}
                    </Carousel>)
                }
            </Popup>
        </Marker >
    )
}

export default MapTrainMarker