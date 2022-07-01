import { useDispatch } from 'react-redux'
import { Routes, Route, HashRouter } from "react-router-dom";
import { projectsInitialize } from './app/reducers/projectsReducers';
import { authActions } from './app/slices/authSlice'
import { projectsActions } from './app/slices/projectsSlice';
import { trainingInitialize } from './app/reducers/trainingReducers';
import { trainingsActions } from './app/slices/trainingSlice';
import styles from './App.module.scss'
import Projects from "./data/json/projects.json";
import Trainings from './data/json/training_programs.json'
import Navbar from './components/Navbar/Navbar';
import ProjectsPage from './components/Pages/ProjectsPage';
import TrainingPage from './components/Pages/TrainingPage';
import AuthPage from './components/Pages/AuthPage';
import Footer from './components/Footer/Footer';


function App() {
  const dispatch = useDispatch()
  projectsInitialize(Projects.data).then(result => dispatch(projectsActions.setProjects(result)))
  trainingInitialize(Trainings.data).then(result => dispatch(trainingsActions.setTrainings(result)))

  const token = JSON.parse(localStorage.getItem("fbLoginToken"));
  if (token) {
    dispatch(authActions.login(token))
  }

  const mapStartPos = { lat: 46.877186, lng: -96.789803 };
  
  return (
    <div className={styles.App}>
      <HashRouter hash="mapping-proj">
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='' element={<ProjectsPage mapStartPos={mapStartPos} />} />
            <Route path='trainings' element={<TrainingPage mapStartPos={mapStartPos} />} />
            <Route path='auth' element={<AuthPage />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div >
  );
}

export default App;
