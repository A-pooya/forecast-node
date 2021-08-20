const fs = require('fs');
const {Weather} = require('./WeatherClass');



const weather = new Weather("tehran")

let code;

weather.getCityApi()
.then(res =>{ console.log(res); 
code =  res.data[0].Key
})
.catch(err => {console.log(err)})

weather.getForecastApi(code).then(res =>{
    console.log(res)
    const dailyForecat = res.data.DailyForecasts
    const text = dailyForecat.map(JSON.stringify).reduce((prev, next) => `${prev}\n${next}`);
    fs.writeFile("data.txt" , text , "utf-8"  )
   }
)
.catch(err => console.log(err))

// const { default: axios } = require('axios');

// const key = "k07BDBtzvnYtHAp6FnGwXvhMxfgDYQzU"
//  const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
//  const query = `?apikey=${key}&q=tehran`

//  const getCityApi = () => {
//      axios.get(baseUrl+query).then(res =>{
//          console.log(res.data[0].Key);
         
//      }).catch(err => console.log(err))
//  }

//  getCityApi()