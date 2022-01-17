import axios from "axios"

export const fetchWeatherRequest = () =>{
    return {
        type: "FETCH_WEATHER_REQUEST"
    }
}

export const fetchWeatherSuccess = (weather) => { 
   return{
        type: 'FETCH_WEATHER_SUCCESS',
        payload: weather
    }
}

export const fetchWeatherFail = (err) =>{
    return {
        type: 'FETCH_WEATHER_FAIL',
        payload: err
    }
}

export const fetchWeather = (url) => {
    return function (dispatch) {
        dispatch(fetchWeatherRequest);
        axios.get(url)
        .then((res)=>{
            // console.log("action creator called");
            dispatch(fetchWeatherSuccess(res.data))
            return res.data
        })
        .catch((err)=>{
            dispatch(fetchWeatherFail(err.message))
        })
    }
}