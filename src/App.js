import classes from './App.module.scss'
import Map from './components/Map/Map'
import Navbar from './components/Navbar/Navbar';

const data = [
  {
    name: "Oslo",
    fillColor: "#7FC9FF",
    id: 1,
    position: {
      lat: 59.923043,
      lng: 10.752839,
    },
  },
  {
    name: "Stockholm",
    fillColor: "#7FC9FF",
    id: 2,
    position: {
      lat: 59.339025,
      lng: 18.065818,
    },
  },
  {
    name: "Copenhagen",
    fillColor: "#7FC9FF",
    id: 3,
    position: {
      lat: 55.675507,
      lng: 12.574227,
    },
  },
  {
    name: "Berlin",
    fillColor: "#7FC9FF",
    id: 4,
    position: {
      lat: 52.521248,
      lng: 13.399038,
    },
  },
  {
    name: "Paris",
    fillColor: "#7FC9FF",
    id: 5,
    position: {
      lat: 48.856127,
      lng: 2.346525,
    },
  },
];

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Map center={{ lat: 52.8174847, lng: 10.6912322 }} zoom={4}  data={data}/>
    </div>
  );
}

export default App;
