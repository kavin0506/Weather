
// import Advice from './Advice';
import { useEffect, useState } from 'react';
import './App.css';
// import Form from './Form';
import { IoMdSearch } from "react-icons/io";
import { createEntityAdapter } from '@reduxjs/toolkit';


const Weather=({temp ,city,country,lat ,long,humidity,wind,icon})=>{
  return(
    <>
      <div className='imageSec'>
        <img src={icon} alt='snow'/>
      </div>
        <div className='temp'>{temp}°C</div>
        <div className='city'>{city}</div>
        <div className='country'> {country}</div>
        <div className='flex'>
          <div className='flexcol'>
            <span className='lat'>latitude</span>
            <span>{lat}</span>
          </div>
            <div className='flexcol'>
             <span className='long'>longtitude</span>
             <span>{long}</span>
            </div>
        </div>
          <div className='dataContainer'>
            <div className='element'>
              {/* <img src='./image/hum.png' alt='hum'/> */}
              <div className='data'>
                <div>{humidity} %</div>
                <div>Humidity</div>
              </div>
            </div>
              <div className='element'>
                {/* <img src='./image/wind.png' alt='wind'/> */}
                  <div className='data'>
                    <div>{wind} kh</div>
                    <div>Wind Speed</div>

                  </div>

              </div>
          </div>
    </>
  )
}

function App() {

  let apiKey="512af981855a7358f302dc8e7bf17c60";
  const[text,setText]=useState("chennai")

  const[icon,setIcon]=useState("./image/snow.png")
  const[temp,setTemp]=useState(0);
  const[city,setCity]=useState("chennai");
  const[country,setCountry]=useState("IN");
  const[lat,setLat]=useState(0);
  const[long,setLong]=useState(0);
  const[humidity,setHumidity]=useState(0);
  const[wind,setWind]=useState(0);
  
  
  const weatherIcon={
    "01d":"./image/sun.png",
    "01n":"./image/sun.png",
    "02d":"./image/cloud.png",
    "02n":"./image/cloud.png",
    "03d":"./image/normal.png",
    "03n":"./image/normal.png",
    "04d":"./image/normal.png",
    "04n":"./image/normal.png",
    "09d":"./image/rain.png",
    "09n":"./image/rain.png",
    "010d":"./image/rain.png",
    "010n":"./image/rain.png",
    "013d":"./image/snow.png",
    "013n":"./image/snow.png"
    
  }

  const search = async()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`
  

    try{
      let res=await fetch(url);
      let data=await res.json()
      // console.log(data)
      if(data.cod==="404"){
        console.log("Not Found ")
      }
      setTemp(Math.floor(data.main.temp))
      setCity(data.name)
      setCountry(data.sys.country)
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setLat(data.coord.lat)
      setLong(data.coord.lon)
      const weatherIconCode=data.weather[0].icon;
  setIcon(weatherIcon[weatherIconCode]||"./iamge/sun.png")

    }catch(error){
        console.error("error your page",error.message);
    }finally{

    }
  }



const handleChange=(e)=>{
setText(e.target.value)
}
const handleKey=(e)=>{
 if(e.key==="Enter"){
  search()
 }
}

 useEffect(function(){
search();
 },[])

  return (
    <div className="App">
      <div className='container'>
        <div className='searchBar'>
            <div className='inputBox'>
              <input type='text' placeholder='Serach City' value={text} onChange={handleChange} onKeyDown={handleKey}/>
            </div>
             <div className='searchIcon'>
              < IoMdSearch onClick={search}/>
            </div>
           
        </div>
        <Weather temp={temp} icon={icon}  city={city} country={country} lat={lat} long={long} humidity={humidity} wind={wind}/>
      </div>
       
    </div>
  );
}

export default App;
