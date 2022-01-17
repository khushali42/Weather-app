import { AddCircleOutline, Cloud, CloudCircleOutlined, Edit } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Components/Weather.css'

export default function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('');
    //           useEffect(() => {
    //               if(search)
    //               {
    //                   handleSearch()
    //               }
    // }, [])
    
    
    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=66baf512b06662949d24da70c34f8c35`)
        .then((res)=>{
            console.log(res.data)
            // const fiveData = city.list.slice(0,5)
            // console.log(fiveData)
                      setCity(res.data)
        })
        .catch((err)=>{
           console.log(err.message)
        })
    }
  return (
    <div className="container bg-secondary mt-3">
      <div className="d-flex justify-content-center align-items-center">
        <h1>5-day Forecast</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <input type="text" className="rounded" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={(e) => handleSearch(e)
        }>Search</button>
      </div>

      {!city ? (
        <p>No data found</p>
      ) : (
        
          <div className="py-5 mx-5 row">
            {city && city.list.slice(0,5).map((weather, id) => (
              <div className="col card mx-2" id="card" key={id}>
              <div className="card-body">
                <h6 className="card-title" id="dt">{weather.dt_txt}</h6>
                <p ><CloudCircleOutlined id="img"/></p>
                <h4 className="card-text" id="temp">{weather.main.temp} F</h4>
                {weather.weather.map((desc,id) => (
                    <h6 className="card-text" key={id} id="desc">{desc.description}</h6>
                ))}
              </div>
            </div>
            ))}
      </div>
    )} 
    </div>
  );
}
