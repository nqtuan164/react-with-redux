import who from './who';
import axios from 'axios';

const API_KEY = '7d12d58132952e6b66e6448cf24f6c0b';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
	const url = `${API_URL}&q=${city},us`;
	const request = axios.get(url);

	//console.log("Request: ", request);

	return {
		type: who.FETCH_WEATHER,
		payload: request
	}
}