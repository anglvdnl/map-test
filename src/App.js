import classes from './App.module.scss'
import L from 'leaflet'
import Projects from "./data/json/projects.json";
import СlimatSolutionsPage from './Pages/СlimatSolutionsPage'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ProjectsPage from './Pages/ProjectsPage';
import JobsPage from './Pages/JobsPage';
import TrainingPage from './Pages/TrainingPage';
import BlogPage from './Pages/BlogPage';
import LoginPage from './Pages/LoginPage';
import { projectsInitialize } from './components/controllers/core/projectsInitialize';
import Navbar from './components/views/Navbar/Navbar';
import { useEffect, useMemo, useState } from 'react';
import { DefaultUser, UserContext } from './data/models/UserContext';

export function getIcon(icon) {
  return L.icon({
    iconUrl: require("./Static/Icons/" + icon + ".png"),
    iconSize: 40,
  })
}

export function getIconClicked(iconClicked) {
  return L.icon({
    iconUrl: require("./Static/Icons/" + iconClicked + ".png"),
    iconSize: 40
  })
}

function App() {
  const token = JSON.parse(localStorage.getItem("fbLoginToken"));
  const [initedProjectsData, setInitedProjectsData] = useState([]);
  const [user, setUser] = useState(token ? {
    isLoggedIn: true,
    name: token.name,
    email: token.email,
    picture: token.picture.data.url
  } : DefaultUser);

  const mapStartPos = { lat: 46.877186, lng: -96.789803 };
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    if (initedProjectsData.length <= 0) {
      projectsInitialize(Projects.data).then(initializedData => {
        console.log(initializedData)
        setInitedProjectsData(initializedData)
      });
    }
  })

  return (
    <div className={classes.App}>
      <Router>
        <UserContext.Provider value={providerValue}>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<СlimatSolutionsPage />} />
              <Route path='projects' element={<ProjectsPage data={initedProjectsData} mapStartPos={mapStartPos} />} />
              <Route path='jobs' element={<JobsPage />} />
              <Route path='training' element={<TrainingPage />} />
              <Route path='blog' element={<BlogPage />} />
              <Route path='login' element={<LoginPage />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
