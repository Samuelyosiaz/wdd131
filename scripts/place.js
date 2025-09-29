const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");


const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: ${oLastModif.toLocaleString()}`;

const temperature = 17;
const windspeed = 5;


function calculateWindChill(temperature, windspeed) {
    if (temperature > 10 || windspeed < 4.8) {
        return "N/A";
    }
    const v = Math.pow(windspeed, 0.16);
    const windchill = 13.12 + 0.6215 * temperature - 11.37 * v + 0.3965 * temperature * v;
    return `${Math.round(windchill)} °C`;
}

const tempEl = document.querySelector("#temperature").innerHTML = temperature;
const windEl = document.querySelector("#wind").innerHTML = windspeed;
const windchEl = document.querySelector("#windchill");
windchEl.innerHTML = calculateWindChill(temperature, windspeed);