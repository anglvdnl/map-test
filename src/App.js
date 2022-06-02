import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Routes, Route, HashRouter } from "react-router-dom";
import { projectsInitialize } from './app/reducers/projectsReducers';
import { authActions } from './app/slices/authSlice'
import classes from './App.module.scss'
import Projects from "./data/json/projects.json";
import Navbar from './components/Navbar/Navbar';
import СlimatSolutionsPage from './components/Pages/СlimatSolutionsPage'
import ProjectsPage from './components/Pages/ProjectsPage';
import TrainingPage from './components/Pages/TrainingPage';
import AuthPage from './components/Pages/AuthPage';
import Footer from './components/Footer/Footer';
import { projectsActions } from './app/slices/projectsSlice';

function App() {
  const dispatch = useDispatch()
  projectsInitialize(Projects.data).then(result => dispatch(projectsActions.setProjects(result)))

  console.log("hui")

  const token = JSON.parse(localStorage.getItem("fbLoginToken"));
  if (token) {
    dispatch(authActions.login(token))
  }

  const mapStartPos = { lat: 46.877186, lng: -96.789803 };

  return (
    <div className={classes.App}>
      <HashRouter hash="mapping-proj">
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='' element={<СlimatSolutionsPage />} />
            <Route path='projects' element={<ProjectsPage mapStartPos={mapStartPos} />} />
            <Route path='training' element={<TrainingPage />} />
            <Route path='auth' element={<AuthPage />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div >
  );
}

export default App;
