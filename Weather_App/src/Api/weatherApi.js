import axios from "axios";

export const BASE_URL = "http://api.openweathermap.org";
export const URL = "http://api.openweathermap.org/data/2.5/weather";
const fetchWeather = async (query) => {
  const API_KEY = "c2cc44a797ceff00a23609d17828a8c2";

  try {
    const { data } = await axios.get(URL, {
      params: { q: query, units: "metric", APPID: API_KEY },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log("error in getting weather data", error);
  }
};
export default fetchWeather;
