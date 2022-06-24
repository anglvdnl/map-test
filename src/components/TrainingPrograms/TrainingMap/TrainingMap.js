import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import styles from "./TrainingMap.module.scss";
import { useDispatch, useSelector } from 'react-redux'
import MapTrainMarker from "./MapTrainMarker";
import './index.scss'
import { trainingsActions } from "../../../app/slices/trainingSlice";

function TrainingMap(props) {
    const trainingsData = useSelector(state => state._train)
    const dispatch = useDispatch()
    const [map, setMap] = useState();

    // dispatch(trainingsActions.groupTraings())

    return (
        <div className={`${styles.Map} ${'custom-popup'}`} data-testid="map">
            <MapContainer
                center={props.mapStartPos}
                zoom={4}
                whenCreated={(leafletMap) => setMap(leafletMap)}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {trainingsData.groupedTrainings.map((trainingGroup, index) => (
                    <MapTrainMarker map={map} trainingGroup={trainingGroup} key={index} />
                ))}

            </MapContainer>
        </div>
    );
}

export default TrainingMap;