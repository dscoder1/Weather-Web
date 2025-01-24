import { useEffect, useState } from 'react'
import './App.css'

function App() {
const[location,setlocation]=useState("")
const[maindetails,setmaindetails]=useState("")
const[coorddetails,setcoorddetails]=useState("")
const[descdetails,setdescdetails]=useState("")
const handleInput=(e)=>{
  e.preventDefault();
  setlocation(e.target.value)
  
}
    useEffect(()=>{

      const Details=async()=>{
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
        const resJson=await res.json()
        setmaindetails(resJson.main)
        setcoorddetails(resJson.coord)
        setdescdetails(resJson.weather[0])
        console.log(maindetails)
        console.log(coorddetails)
        console.log(descdetails)
          };
          Details();
    },[location])
  return (
    <>
    <div className="Head">

      <div className="box">
        <h1>Weather Details</h1>
        <br />
        <input type="search" placeholder='....Location....' value={location} onChange={handleInput}/>
        <div className="Details">
          {
            maindetails && coorddetails?
              (
                <div>
            <div className="mainData">
                <p>Longitude: &nbsp;{coorddetails.lon}</p>
              <p>Latitude: &nbsp;{coorddetails.lat}</p>
                <p>Place: &nbsp;{location}</p>
              <p>Temp: &nbsp;{maindetails.temp} <sup>o</sup>C</p>
                <p>Description: &nbsp;{descdetails.description}</p>
                <p>Pressure: &nbsp;{maindetails.pressure}</p>
              <p>Humidity: &nbsp;{maindetails.humidity}</p> 
              </div>
                </div>
              )
            :
            (
              <div className='middle'>
              <p id="notFound">Data Not Found</p>
              </div>
            )
          }

        </div>
      </div>
    </div>

    </>
  )
}

export default App
