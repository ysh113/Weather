


// get api key
// make input field where users can search cities
// make the input field searchable by "enter"
// use the api key to get the weather
// print the temperature by console.log
// 








let userInput = document.getElementById("cityName")
let temp = document.getElementById("temp")



const api = {
    key: "f68e717454a648c974ba49fc3b284836",
    baseUrl: `https://api.openweathermap.org/data`
}


function input(){
    let userInput = document.getElementById("cityName")
       userInput.addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            fetch(`${api.baseUrl}/2.5/weather?q=${userInput.value}&appid=${api.key}`)
            .then(response =>{
                return response.json()
            })
            .then(data =>{   //im specifically asking about this part here
             weather(data)
                 })
        
            .catch(function(error){
                console.log(error)
            })

            userInput.value = ""
        }
    })
}

input()

function weather(a){
    let celcius = Math.round(parseFloat(a.main.temp)-273.15)

    document.getElementById("description").innerHTML = a.weather[0].description
    temp.innerHTML = celcius + '&deg'
    // document.getElementById("icons").src = `http://openweathermap.org/img/w/${a.weather[0].icon}.png`

}


