function convert() {
    let celsius = document.getElementById('inputC');
    let valueC = celsius.value.trim();
    let result = document.getElementById('res');
    
    if (valueC === "") {
        alert("Insira uma temperatura VÁLIDA");
    } else {
        let fahrenheit = (Number(valueC) * 9/5) + 32;
        
        result.value = fahrenheit + "°F";
        celsius.value = "";
    }
}
