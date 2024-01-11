const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const iconn = document.querySelector('.icon_moon');

btn.addEventListener('click', () => {
    body.classList.toggle('darkmode');


    if(body.classList.contains('darkmode')) {
      iconn.classList.remove('.icon_moon');
     
    }
})

let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

 icon.addEventListener("click", () => {
      ul.classList.toggle("showData");
      console.log(ul);
})


    //JSON



const city = document.querySelector('#today');
const todayTemp = document.querySelector('.temp');
const humidityElement = document.querySelector('.percentnumber');

                      //map
const hourlyForecastContent = hourlyForecast.map(hourData => {
  return `<div><b>${hourData.hour}</b> - Temp: ${hourData.temperature}, Condition: ${hourData.condition}</div>`;
}).join('');

//  const getApi = async () => {
//   const data = await fetch('./weather.json').then(response => response.json());
//   console.log(data);
//  };  
//      city.innerHTML = city;

//  getApi();
 
 //city.innerHTML = data.city;
 //todayTemp.innerHTML = current_weather.temperature;
 //humidityElement.innerHTML = current_weather.humidity;

 

 function getApi() {
  fetch('weather.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Corrected: response.json() instead of Response.json()
    })
    .then(data => {
      city.innerHTML = data.city;
      todayTemp.innerHTML = data.current_weather.temperature;
      humidityElement.innerHTML = data.current_weather.humidity;
    })
    .catch(error => {
      console.error('Error fetching API:', error);
    });
}

getApi();
