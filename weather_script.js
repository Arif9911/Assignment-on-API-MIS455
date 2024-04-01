let weather = {
    "apikey": "32f54c634e8db3964f2cf328eba498c4",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name +"')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);    // send search bar value
    }
};

document
    .querySelector(".search button") // search button pressed
    .addEventListener("click", function(){
        weather.search();            // then it will call search() function
    });

document.querySelector(".search-bar").addEventListener("keyup", function(event){ // event listener key 
    if(event.key == "Enter"){ // if Enter Key is Pressed
        weather.search();
    }
});

weather.fetchWeather("Dhaka"); // initial the site will show Dhaka city's weather