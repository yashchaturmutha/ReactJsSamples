import {useState,useEffect} from 'react';
import { MapContainer, TileLayer, useMap,Marker, Popup } from 'react-leaflet';
import mapData from './mapData.json';
import cities from 'cities.json';
import LineChart from './LineChart';

const MapLocation = () => {
    const [location,setLocation]=useState({
        loading:false,
        coords:{
          latitude :'',
          longitude :'' 
        },
        // date: "",
        name : ""
      });

      const [dateValue, setDateValue] = useState(new Date());

      // const [flag,setFlag]=useState(true);
    
      const [detail,setDetail]=useState([]);
    
      async function onSuccess(position){
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        let url=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&localityLanguage=en`; 
        let response=await fetch(url);
        let data=await response.json();
        // console.log(data.localityInfo.administrative[2].name);
        // setDetail(data);
        // console.log(detail);
        const newDate = new Date(dateValue);

        setLocation(prevLocation=>({
          ...prevLocation,
          loading : true,
          coords:{
            latitude :position.coords.latitude,
            longitude :position.coords.longitude 
          },
          today : newDate.getHours() + ":" +(newDate.getMinutes()<10?'0':'') + newDate.getMinutes(),
          city : data.localityInfo.administrative[2].name,
          state : data.principalSubdivision,
          country : data.countryName
        }));

        // setUser(user.map((item,i)=>{

        // if(item.today===location.today)
        // {
        // setFlag(false);
        // return {...item,count :item.count+1 }
        // }
        // }
        // ))

        // console.log("Flag "+flag);

        // if(flag)
        // {
        //   setUser(prevUser=>([
        //     ...prevUser,
        //     {
        //       today:location.today,
        //       count : 1
        //     }
        //   ]));
        // }
        // console.log("Flag "+flag);
        // console.log(user);
    
        // console.log(cities[0]);
        // console.log(cities);
    
        // let url='https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708';
        // let response =await fetch(url);
        // let data=await response.json();
        // console.log(data);
    
      };
    
      const onError=((error)=>{
    
        let msg="";
        
        switch(error.code){
          case error.PERMISSION_DENIED:
            msg="User denied the request for Geolocation."
          break;
          case error.POSITION_UNAVAILABLE:
            msg="Location information is unavailable."
          break;
          case error.TIMEOUT:
            msg="The request to get user location timed out."
          break;
          case error.UNKNOWN_ERROR:
            msg="An unknown error occurred."
          break;
        }
    
        setLocation({
          loading : false,
          error:{
            code : error.code,
            message :msg
          }
        })
      })
    
      // useEffect(() => {
      //   // if (!("geolocation" in navigator))
      //   //   onError();
    
      //   // navigator.geolocation.getCurrentPosition(onSuccess,onError);

      //   setLocation(prevLocation=>({
      //     ...prevLocation,
      //     today:new Date().getHours() + ":" +new Date().getMinutes()
      //   }))
      // }, [location.name])

      // useEffect(() => {
      //   setTime(new Date());
      // }, [])
      
      
    
      return (
        <>
        <div className="App">    
        
        {/* <h1>{location.loading?JSON.stringify(location):"Location Not Available yet"}</h1> */}
        
        <input type="text" id="" placeholder='Name...' value={location.name}
        onChange={(e)=>setLocation(prevState=>({...prevState,name:e.target.value}))}/>

        <button style={{width:'200px',height:'50px' , cursor:'pointer'}} type='submit' onClick={()=>{
           if (!("geolocation" in navigator))
           onError();
     
         navigator.geolocation.getCurrentPosition(onSuccess,onError);
        //  setBtnclick(!btnclick);
        //  setFlag(true);
        }}>Get My Location</button>
        
        {location.loading? 
        <>
        <MapContainer style={{ width: '100%', height: '50vh'}} 
          center={[location.coords.latitude, location.coords.longitude]} zoom={10}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.coords.latitude, location.coords.longitude]}>
        <Popup>
          Country : {location.country}
          <br/>
          State : {location.state}
           <br/>
          City : {location.city} 
          <br/>
           Time : {location.today}
           <br/>
           Name : {location.name}
           <br/><br/>
           You are Here !
        </Popup>
        </Marker>
        </MapContainer>
        <LineChart location={location}/>
        </>:
        console.log(location)
        }

        
    
       
        {/* <MapContainer center={[20.5204, 73.8567]} zoom={12} >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
    
        {/* {mapData.map(obj=>(
        <Marker key={obj.id} position={[obj.latitude, obj.longitude]}>
        <Popup>
          {obj.id} <br /> Latitude {obj.latitude} <br/> Longitude {obj.longitude}
        </Popup>
        </Marker>
        ))} */}
    
        {/* {cities.map((obj,index)=>{
          return (obj.name==='Pune'?
        <Marker key={index} position={[obj.lat, obj.lng]}>
        <Popup>
          City : {obj.name} <br/> Country: {obj.country} <br /> Latitude {obj.lat} <br/> Longitude {obj.lng}
        </Popup>
        </Marker>:null)
        })} */}
    
        {/* {cities.map((obj,index)=>{
          return (obj.lat===location.coords.latitude && obj.lng===location.coords.longitude?
        <Marker key={index} position={[obj.lat, obj.lng]}>
        <Popup>
          City : {obj.name} <br/> Country: {obj.country} <br /> Latitude {obj.lat} <br/> Longitude {obj.lng}
        </Popup>
        </Marker>:null)
        })} */}
       
        {/* </MapContainer> */}
    
    </div>
    </>
      );
}

export default MapLocation