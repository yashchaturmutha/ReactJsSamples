import React, { useState } from 'react';
import MapLocation from './MapLocation';
import './App.css';
import { Route, Routes, Navigate,Link } from "react-router-dom";
import LineChart from './LineChart';

const App = () => {

  // const [location,setLocation]=useState({
  //   loading:false,
  //   coords:{
  //     latitude :'',
  //     longitude :'' 
  //   },
  //   // date: "",
  //   name : ""
  // });

  // const [btnclick,setBtnclick]=useState(false);

  // const [user,setUser]=useState([]);

  return (
    <div>

    {/* <div style={{display :'flex', listStyle:'none' , justifyContent:'space-around'}}>
      <li>
        <Link to="/">MapLocation  </Link>
      </li>

      <li>
      <Link to="/chart">LineChart</Link>
      </li>
    </div> */}

      {/* <Routes> */}
			{/* {user && <Route path="/" element={<Main />} />} */}
			{/* <Route path="/"  */}
      {/* // element={ */}
      <MapLocation />
    {/* // }  */}
      {/* /> */}
			{/* <Route path="/chart" element={<LineChart location={location} />} /> */}
			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
		{/* </Routes> */}
    </div>
  )
}

export default App