import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import styles from "./TrainingMap.module.scss";
import { useDispatch, useSelector } from 'react-redux'
import MapTrainMarker from "./MapTrainMarker";
import { getUniqueValue } from '../../../data/utils/getUniqueValue'
import { trainingsActions } from "../../../app/slices/trainingSlice";

function TrainingMap(props) {
    const trainingsData = useSelector(state => state._train)
    const dispatch = useDispatch()

    const [map, setMap] = useState();

    const getGroupedTrainings = () => {
        const uniqueLocs = getUniqueValue(trainingsData.trainings, "location");
        const groupedTrainings = []

        for (let i = 0; i < uniqueLocs.length; i++) {
            const element = uniqueLocs[i];
            const group = trainingsData.trainings.filter(x => x.location === element);

            groupedTrainings.push(group)
        }
        return groupedTrainings
    }

    return (
        <div className={styles.Map} data-testid="map">
            <MapContainer
                center={props.mapStartPos}
                zoom={4}
                whenCreated={(leafletMap) => setMap(leafletMap)}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {getGroupedTrainings().map((trainingGroup, index) => (

                    <MapTrainMarker map={map} trainingGroup={trainingGroup} key={index} />
                ))}

            </MapContainer>
        </div>
    );
}

export default TrainingMap;