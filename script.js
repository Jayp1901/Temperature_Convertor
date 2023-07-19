function convert() {
    let temperature = document.getElementById("temperature").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (from === "celsius") {
        if (to === "fahrenheit") {
            temperature = temperature * 9/5 + 32;
        } else if (to === "kelvin") {
            temperature = parseFloat(temperature) + 273.15;
        }
    } else if (from === "fahrenheit") {
        if (to === "celsius") {
            temperature = (temperature - 32) * 5/9;
        } else if (to === "kelvin") {
            temperature = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (from === "kelvin") {
        if (to === "celsius") {
            temperature = temperature - 273.15;
        } else if (to === "fahrenheit") {
            temperature = (temperature - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById("output").innerHTML = temperature.toFixed(2) + "°" + to[0].toUpperCase();
}