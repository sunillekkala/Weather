var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik="e925e15fd12aec1de229c91832b9b56b"
function convertion(val)
{
    return (val -273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval =data['name']
        var descrip =data['weather']['0']['description']
        var tempature =data['main']['temp']
        var wndspeed =data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${ convertion(tempature)} c</span>`
        description.innerHTML= `Sky conditations: <span>${descrip}<span>`
        wind.innerHTML= `Wind Speed: <span>${wndspeed} km/h<span>`
    })

    .catch(err => alert('You entered Worng city name'))
})
     