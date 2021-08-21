const fs = require('fs');
const {Weather} = require('./WeatherClass');



const weather = new Weather("tehran")//! enter your city here

var code;

weather.getCityApi()
.then(res =>{ 
code =  res.data[0].Key

weather.getForecastApi(code).then(res =>{
    
    const dailyForecat = res.data.DailyForecasts
    const text = dailyForecat.map(JSON.stringify).reduce((prev, next) => `${prev}\n${next}`);
    fs.writeFileSync("data.txt" , text , "utf-8"  )
   }
)
.catch(err => console.log(err))

})
.catch(err => {console.log(err)})

 

