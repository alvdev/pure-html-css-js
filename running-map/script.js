'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // console.log(position);
      const latitude = position.coords.latitude;
      // console.log(`The latitude is: ${latitude}`);
      const longitude = position.coords.longitude;
      // console.log(`The longitude is: ${longitude}`);
      const mapUrl = `https://www.google.com/maps/@${latitude},${longitude}`;
      console.log(mapUrl);

      // Leaflet
      const coords = [latitude, longitude];
      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

      // Click on the map
      map.on('click', () => {
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      console.log('there are no position');
    }
  );
}
