const button = document.getElementById('button');
const statusBox = document.getElementById('status-box');
const dataBox = document.getElementById('data-box');
const screenDataBox = document.getElementById("screen-data");


button.addEventListener('click', getMyPosition);

function getMyPosition() {
  statusBox.innerHTML = 'Finding geolocation data...';
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

async function onSuccess(geolocationData) {
  statusBox.innerHTML = 'Успех!';
  
  let latitude = geolocationData.coords.latitude
  let longitude = geolocationData.coords.longitude
  url = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`;

  let timezone
  await fetch(url)
      .then((response) => { return response.json(); })
      .then((data) => { timezone = data })
      .catch(() => { console.log('error profile_data') })

  console.log(timezone)

  let preview = {
    coords: {
      latitude: geolocationData.coords.latitude,
      longitude: geolocationData.coords.longitude,
      timezone: timezone.timezone,
      date_time: timezone.date_time
    },
  };

 dataBox.innerHTML = JSON.stringify(preview, null, 2);
  
}



function onError(error) {
  statusBox.innerHTML = 'Информация о местоположении недоступна';
  dataBox.innerHTML = error.message;
}

