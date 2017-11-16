const $ = window.$
navigator.geolocation.getCurrentPosition(function (position) {
  var Longitude = position.coords.longitude
  var Latitude = position.coords.latitude

  $.ajax({

    url: 'https://fcc-weather-api.glitch.me/api/current?lon=' + Longitude + '&lat=' + Latitude,
    type: 'GET',

    success: function (data) {
      updateUI(data)
      console.log(data)
    }

  })

  function updateUI (data) {
    var celTemp = data.main.temp
    $('#city').html(data.name)
    $('#countries').html(data.sys.country)
    $('#status').html(data.weather[0].main)
    var iconName = data.weather[0].description

    $('#temp').html(data.main.temp)

    $('#icon').text(iconName)

    switch (iconName) {
      case 'scattered clouds':

        $('#icon').attr('src', 'images/cloudy.svg')
        break
      case 'sunny':

        $('#icon').attr('src', 'images/snowy.svg')
        break
      case 'thunderstorm':

        $('#icon').attr('src', 'images/thenderstorm.svg')
        break
      case 'rainy':

        $('').attr('src', 'images/rainy.svg')
        break
      case 'clouds':

        $('#icon').attr('src', 'images/broken.svg')
        break
      case 'light rain':

        $('#icon').attr('src', 'images/rainy.svg')
        break
    }

    document.getElementById('fah').onclick = function () {
      $('#temp').html(Math.round(data.main.temp) + ' °F')
    }

    document.getElementById('cel').onclick = function () {
      $('#temp').html((celTemp) + ' °C')
    }
  }
})
