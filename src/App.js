import './App.css';
import CityFinder from './CityFinder';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';

function App() {
  const dispatch = useDispatch()
  const cityToFind = useSelector(state => state.cityReducer.cityToFind);
  const codeRegion = useSelector(state => state.cityReducer.codeRegion);



  useEffect(() => {
    if (cityToFind) {
      Axios.get("https://apivilles.herokuapp.com/name/" + cityToFind).then(response => {
        let tab = []
        response.data.forEach(element => {
          if (!tab.includes(element["Libelle_acheminement"])) {
            tab.push(
              {
                name: element["Libelle_acheminement"],
                zipcode: element["Code_postal"]
              }
            )
          }
        })
        dispatch({ type: 'SET_CITIES', payload: tab })
      })
    }
  }, [dispatch, cityToFind]);

  useEffect(() => {
    if (codeRegion) {
      Axios.get("https://apivilles.herokuapp.com/region/" + codeRegion).then(response => {
        let tab = []
        response.data.forEach(element => {
          if (!tab.includes(element["Libelle_acheminement"])) {
            tab.push(
              {
                name: element["Libelle_acheminement"],
                zipcode: element["Code_postal"]
              }
            )
          }
        })
        dispatch({ type: 'SET_CITIES', payload: tab })
      })
    }
  }, [dispatch, codeRegion]);

  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/cityname" component={CityFinder} />
          <Route path="/region" component={CityFinder} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
