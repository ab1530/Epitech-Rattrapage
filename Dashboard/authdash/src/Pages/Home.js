import React, { useState, useRef } from 'react';
import MapContainer from '../components/Google/GoogleMap' 
import Video from '../components/Youtube/Video'
import Widgets from '../components/Widgets'
import Weather2 from '../components/Weather/WeatherCard2'
import Wind2 from '../components/Weather/Wind/windCard2'
import Country from '../components/Weather/Country/countryCard2'
import Wind from '../components/Weather/Wind/Wind'
import Spotify from '../components/spotify/spotify'

// import TestMap from '../components/TestMap'

const handleGoogleMap = (nb) => {
    nb = nb + 1;
    console.log(nb);
}

const removeAtIndex = index => () => false

const LOCAL_STORAGE_KEY = "widg";
function saveToLocalStorage(locations) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(locations));
}

function readFromLocalStorage() {
    localStorage.getItem(LOCAL_STORAGE_KEY)
}

function Home({ handleLogOut }) {
  var tab = [Weather2, MapContainer, Weather2, Weather2]
  // const [widgetList, addWidget] = React.useState(readFromLocalStorage());//oublie pas de stringify
  const [widgetList, addWidget] = React.useState([]);
  var nb = 8;
  const [count, setCount] = useState(0);

  const weatherRef = useRef()

  const click = (elem) => {
    addWidget([...widgetList, elem])
    saveToLocalStorage(elem)
  }
  return (
    <section className="home">
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <button onClick={() => setCount(1)} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <button onClick={() => click(Video)}>
                            <a class="nav-link" ><font color="white">Youtube</font><span class="sr-only">(current)</span></a>
                        </button>
                        <button onClick={() => click(MapContainer)}>
                            <a class="nav-link" ><font color="white">Geolocation</font><span class="sr-only">(current)</span></a>
                        </button>
                        <button onClick={() => click(Weather2)}>
                            <a class="nav-link" ><font color="white">Weather</font><span class="sr-only">(current)</span></a>
                        </button>
                        <button onClick={() => click(Wind2)}>
                            <a class="nav-link" ><font color="white">Wind</font><span class="sr-only">(current)</span></a>
                        </button>
                        <button onClick={() => click(Country)}>
                            <a class="nav-link" ><font color="white">Country</font><span class="sr-only">(current)</span></a>
                        </button>
                        <button onClick={() => click(Spotify)}>
                            <a class="nav-link" ><font color="white">Spotify</font><span class="sr-only">(current)</span></a>
                        </button>

                    </ul>
                </div>
            </nav>

      <div className="login-divider">
        <button className="logout-button" onClick={handleLogOut}>
          Logout
        </button>
          <Widgets onDelete={index => {
            const list = widgetList.filter((video, videoIndex) => index !== videoIndex)
            debugger
            addWidget(list)
          }} widgetList={widgetList}/>
{/*           
          {tab.map(Component => <Component />)} */}
          <ul>
  </ul>
      </div>
    </section>
  );
}

export default Home;
