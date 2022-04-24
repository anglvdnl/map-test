import classes from './App.module.scss'
import Navbar from './components/Navbar/Navbar';
import L from 'leaflet'
import MainSec from './components/MainSec/MainSec';
import Btns from './components/Btns/Btns';
import { useState } from 'react';


export function getIcon(_iconSize, icon) {
  return L.icon({
      iconUrl: require("./Static/Icons/"+ icon +".png"),
      iconSize: [_iconSize]
  })
}

export function getIconClicked(_iconSize, iconClicked) {
  return L.icon({
      iconUrl: require("./Static/Icons/"+ iconClicked +".png"),
      iconSize: [_iconSize]
  })
}

function App() {

  const position = {
    lat: 55.676098,
    lng: 12.568337,
  }

  const data = [
    {
        img: {},
        indev: {},
        h1: 'Amherst Community Wind Farm',
        p: 'Developer: Amherst Community',
        loc: 'Unknown',
        icon: "Wind",
        iconClicked: "WClicked", 
        buttton: "Wind",
        pos: [55, 12],
        size: 40
    },
    {
        img: {},
        indev: {},
        h1: 'Amherst Community Wind Farm',
        p: 'Developer: Amherst Community',
        loc: 'Unknown',
        icon: "Ev",
        iconClicked: "EvClicked", 
        buttton: "Battery",
        pos: [54.5, 12],
        size: 40
    },
    {
        img: {},
        indev: {},
        h1: 'Amherst Community Wind Farm',
        p: 'Developer: Amherst Community',
        loc: 'Unknown',
        icon: "Estorage",
        iconClicked: "EClicked", 
        buttton:"Battery",
        pos: [55, 13],
        size: 40
    },
]


const [view, setView] = useState(true)

  return (
    <div className={classes.App}>
      <Navbar />
      <Btns view={view} setView={setView} />
      <MainSec view={view} data={data} position={position}/>
    </div>
  );
}

export default App;
