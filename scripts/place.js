const yearElement = document.getElementById("currentyear");

const currentYear = new
    Date().getFullYear();

if (yearElement) {
    yearElement.textContent = currentYear;
}

const modifiedElement = document.getElementById("lastModified");

if (modifiedElement) {
    modifiedElement.textContent += document.lastModified;
}



const tempF = 40;    
const windSpeedMph = 10;

/**
 * Calculates the windchill factor using the Imperial formula.
 * @param {number} temperature - Air temperature in Fahrenheit (°F).
 * @param {number} windSpeed - Wind speed in miles per hour (mph).
 * @returns {number} The calculated windchill factor in °F, rounded to the nearest whole number.
 */
function calculateWindChill(temperature, windSpeed) {
    // Imperial Formula: Twc = 35.74 + 0.6215*T - 35.75*V^0.16 + 0.4275*T*V^0.16
    return Math.round(35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));
}

function displayWindChill() {
    const windchillElement = document.getElementById('windchill-value');

    const tempCondition = tempF <= 50;
    const windCondition = windSpeedMph > 3;

    if (tempCondition && windCondition) {
        // Conditions met, calculate and display
        const windChillFactor = calculateWindChill(tempF, windSpeedMph);
        windchillElement.textContent = `${windChillFactor} °F`;
    } else {
        // Conditions not met, display "N/A"
        windchillElement.textContent = "N/A";
    }
}

// Execute the function when the page loads
window.onload = displayWindChill;