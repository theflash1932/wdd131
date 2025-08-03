cdate = document.querySelector("#currentyear");
nowYear = new Date().getFullYear();
cdate.innerHTML = nowYear;

lastm = document.querySelector("#lastmodified");
mod = document.lastModified
lastm.innerHTML = "Last modified: " + document.lastModified

currentTemp = 8.2
currentWind = 5.2
wc = document.querySelector("#wc");
cond = document.querySelector("#cond")
wind = document.querySelector("#wind")
temp = document.querySelector("#temp")
windchill = currentTemp
if(currentTemp < 10.0 && currentWind > 4.8) {
    windchill = calculateWindChill().toFixed(1);
}
else
    windchill = "N/A"

function calculateWindChill() {
    return windchill = 13.12 + (0.6215 * currentTemp) - (11.37 * (currentWind ** 0.16)) + (0.3965 * currentTemp * (currentWind ** 0.16));
}
//now.innerHTML = "<img src='images/conditions.svg' alt='now'>"
cond.innerHTML = "Mostly Sunny"
wind.innerHTML = currentWind + " km/s"
temp.innerHTML = currentTemp + " C"
wc.innerHTML = windchill + " C"

//only call calcwindchill if temp < 10 C and wind > 4.8 km/h, else display N/A