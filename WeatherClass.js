const { default: axios } = require('axios');

class Weather{
    constructor(city){
        this.apiKey = "k07BDBtzvnYtHAp6FnGwXvhMxfgDYQzU";
        this.city = city
    }


async getCityApi() {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${this.city}`)

    return response;
}    

async getForecastApi(cityCode) {
   const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=k07BDBtzvnYtHAp6FnGwXvhMxfgDYQzU`)    
}


}
module.exports ={
Weather
}

