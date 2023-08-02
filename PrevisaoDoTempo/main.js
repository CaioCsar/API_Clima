function getUserWeather() {
    let userWeather = document.getElementById("local").value;
    apiWeather(userWeather)
}

const key = "831f03b2b2ac62bb1ba3df50fcfc2f10"

async function apiWeather (userWeather){
    let dataWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userWeather}&appid=${key}&units=metric&lang=pt_br`).then(
        (Response) => Response.json()
    )
    console.log(dataWeather)
    putWeather(dataWeather)
}


function putWeather(dataWeather){
    document.getElementById("weather").innerHTML= "Temperatura: " + dataWeather.main.temp + "º c"
    document.getElementsByClassName("img_weather").src = `https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`
    document.getElementById("wind").innerHTML = "Vel. do Vento: " + dataWeather.wind.speed + " km/h"
}


function showWeather(){
    let boxResponse = document.getElementById("returnWeather")
    if(boxResponse.style.visibility == "hidden"){
        boxResponse.style.visibility = "visible"
    }else{
        boxResponse.style.visibility = "hidden"
    }
}