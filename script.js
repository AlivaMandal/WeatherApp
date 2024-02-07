const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apikey="53a4d3a08c1aa74cbd8d779e57ac95bc";

const serchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather = document.querySelector(".weather-icon");

const checkweather = async (city) =>{

    const response = await fetch(url + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    } else{ 

    let data = await response.json();

    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
    weather.src = "images/clouds.png";
} 
else if(data.weather[0].main == "Clear"){
    weather.src = "images/clear.png";
} 
else if(data.weather[0].main == "Haze"){
    weather.src = "images/haze.png";
} 
else if(data.weather[0].main == "Foggy"){
    weather.src = "images/Foggy.png";
} 
else if(data.weather[0].main == "Drizzle"){
    weather.src = "images/drizzle.png";
} 
else if(data.weather[0].main == "Rain"){
    weather.src = "images/rainy.png";
} 
else if(data.weather[0].main == "Mist"){
    weather.src = "images/mist.png";
} 
else if(data.weather[0].main == "Snow"){
    weather.src = "images/snow.png";
} 

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";

    }
}

searchbtn.addEventListener("click" , () =>{
    checkweather(serchbox.value);
});
