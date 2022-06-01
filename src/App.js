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
import JobsPage from './components/Pages/JobsPage';
import TrainingPage from './components/Pages/TrainingPage';
import BlogPage from './components/Pages/BlogPage';
import AuthPage from './components/Pages/AuthPage';
import Footer from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch()

  const token = JSON.parse(localStorage.getItem("fbLoginToken"));
  if (token) {
    dispatch(authActions.login(token))
  }

  const [initedProjectsData, setInitedProjectsData] = useState([]);

  const mapStartPos = { lat: 46.877186, lng: -96.789803 };

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
      <HashRouter hash="mapping-proj">
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='' element={<СlimatSolutionsPage />} />
            <Route path='projects' element={<ProjectsPage data={initedProjectsData} mapStartPos={mapStartPos} />} />
            <Route path='jobs' element={<JobsPage />} />
            <Route path='training' element={<TrainingPage />} />
            <Route path='blog' element={<BlogPage />} />
            <Route path='auth' element={<AuthPage />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
