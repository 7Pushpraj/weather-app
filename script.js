const api_key = "5b58ecb263838d8597174cc4ee41cbef";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_box = document.querySelector(".search input");
const search_btn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");

async function check_weather(city){
    const response = await fetch(api_url + city + `&appid=${api_key}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
         var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weather_icon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weather_icon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weather_icon.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weather_icon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weather_icon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
   
}

search_btn.addEventListener("click", ()=>{
    check_weather(search_box.value);
})