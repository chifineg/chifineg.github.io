document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("conversion-form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const temperatureInput = parseFloat(document.getElementById("temperature").value);
        const unit = document.getElementById("unit").value;

        let convertedTemperature;

        if (unit === "celsius") {
            convertedTemperature = (temperatureInput * 9/5) + 32;
        } else {
            convertedTemperature = (temperatureInput - 32) * 5/9;
        }

        result.innerHTML = `Result: ${convertedTemperature.toFixed(2)} °${unit.toUpperCase()}`;
    });
});