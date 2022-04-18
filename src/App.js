import classes from './App.module.scss'
import Map from './components/Map/Map'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Map center={{ lat: 52.8174847, lng: 10.6912322 }} zoom={4}/>
    </div>
  );
}

export default App;
