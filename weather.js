const apikey = "1a7b2b699254b1235e8c8edd0033a66c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";




const div = document.querySelector("#card");
// const city = document.querySelector(".city");
// const temp = document.querySelector(".temp")
// const humidity = document.querySelector(".humidity") ;   
// const wind = document.querySelector(".wind");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weather_icon = document.querySelector(".weather_icon")


async function checkWeather(city) {
    
    const responce = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(responce.status == 404){
        document.querySelector(".error").style.display = "block"
    }
    else {

        var data = await responce.json()

        console.log(data)
    
    
    
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"℃";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTM = data.wind.speed + "km/h";
    
    
     if(data.weather[0].main == "Clouds"){
              weather_icon.src= "assets/clouds.png"
     }else if(data.weather[0].main == "Clear"){
        weather_icon.src = "assets/clear.png"
     }else if (data.weather[0].main == "Rain"){
        weather_icon.src = "assets/rain.png"
     }else if (data.weather[0].main == "Drizzle"){
        weather_icon.src = "assets/drizzle.png"
     }else if (data.weather[0].mian == "Mist"){
        weather_icon.src = "assets/mist.png "
     }
    
     document.querySelector(".weather").style.display = "block"
     document.querySelector(".error").style.display = "none"
    
    }
    


    }


searchBtn,addEventListener("click" , ()=>{
    checkWeather(searchBox.value);

})

