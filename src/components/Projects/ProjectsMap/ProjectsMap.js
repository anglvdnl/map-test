import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import styles from "./ProjectsMap.module.scss";
import { useSelector } from 'react-redux'
import MapProjMarker from "./MapProjMarker";

function ProjectsMap(props) {
  const projectsData = useSelector(state => state._proj);

  const [map, setMap] = useState();

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

        {projectsData.filteredProjects.map((project, index) => (
          <MapProjMarker map={map} project={project} key={index} />
        ))}

      </MapContainer>
    </div>
  );
}

export default ProjectsMap;

// https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJd8BlQ2BZwokRAFUEcm_qrcA&key=AIzaSyA51ABA9d3XAG7OfpRPAnbLdbqsLmf0X3E