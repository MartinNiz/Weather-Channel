function cargarCiudad() {
    let ciudad = document.querySelector("input").value;

    if (ciudad == '') {
        alert('vacio')
    }else{
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
            document.querySelector(".container").style.visibility = "visible";
            document.querySelector('#temperatura').textContent = Math.trunc(data.main.temp);
            document.querySelector('#temperatura').innerHTML += '<sup>°C</sup>';
            document.querySelector('#ciudad').textContent = data.name;
            document.querySelector('#wicon').src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
            document.querySelector('#descripcion').textContent = data.weather[0].description;        
        }).fail(function () {
            alert('ciudad no encontrada')
        })
        document.querySelector("input").value = ''
    }

}
document.querySelector('button').addEventListener('click', cargarCiudad)