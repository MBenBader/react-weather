import './App.css';
import CityFinder from './CityFinder';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Axios from "axios"

function App() {
  const dispatch = useDispatch()
  const cityToFind = useSelector(state => state.cityReducer.cityToFind);

  useEffect(() => {
    if (cityToFind) {
      Axios.get("https://apivilles.herokuapp.com/name/" + cityToFind).then(response => {
        let tab = []
        response.data.forEach(element => {
          if (!tab.includes(element["Libelle_acheminement"])) {
            tab.push(element["Libelle_acheminement"])
          }
        })
        dispatch({ type: 'SET_CITIES', payload: tab })
      })
    }
  }, [dispatch, cityToFind]);

  return (
    <div className="App">

      <CityFinder />
    </div>
  );
}

export default App;
