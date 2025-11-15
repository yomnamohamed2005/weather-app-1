const key = "5ec0d90305ec46e5831194817252010";

 async function get_weather(city){
    
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);

        const data = await response.json();

    
    if (data.error) {
      document.getElementById("city-name").innerHTML = `<h3> City not found</h3>`;
      document.getElementById("detailes").innerHTML = "";
      document.getElementById("more-det").innerHTML = "";
    } else {
    document.getElementById("history").innerHTML = `<h3>${data.location.localtime}</h3>`;
      document.getElementById("city-name").innerHTML = `<h3>${data.location.name}</h3>`;
      document.getElementById("detailes").innerHTML = `
        <h2> ${data.current.temp_c} °C</h2>
         <img src="https:${data.current.condition.icon}" alt="weather icon">
       
      `;

      document.getElementById("more-det").innerHTML = `      
        <p>${data.current.condition.text}</p>
      `;
    }
}

window.addEventListener("load",()=>{
    get_weather("cairo");
})
   document.getElementById("search-button").addEventListener("click", async () => {
    
    const city = document.getElementById("input-search").value;
    if(city){
        get_weather(city);
    }
})
