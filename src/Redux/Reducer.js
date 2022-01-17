const initialState = [{
    loading: false,
    weather: [],
    error: ''
}]

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_WEATHER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_WEATHER_SUCCESS':
            {
            console.log('fetch weather reducer')
            return {
                weather: action.payload
            }
        }
        case 'FETCH_WEATHER_FAIL':
            return {
                loading: false,
                weather: [],
                error: action.payload
            }
        default : 
            return state
    }
}