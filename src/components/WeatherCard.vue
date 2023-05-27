<template>
  <div class="container">
    <div class="weather-card">
      <transition name="fade" v-if="loading">
        <div class="loader">
          <div class="loading"></div>
        </div>
      </transition>
      <span class="location">
        <MapPin class="pin"/>
        {{ region }}, {{ country }}</span>
      <div class="info-container">
        <div class="temperature">
          <span class="deg"><TempIcon/>{{ tempC }}°</span>
          <span class="max-temp">max. {{ trunc(maxTemp) }}° </span>
          <span class="min-temp">min. {{ trunc(minTemp) }}°</span>
        </div>
        <div class="icon-weather">
          <img :src="icon" :alt="text" class="icon">
        </div>
        <div class="desc">
          <span class="text">{{ text }}</span>
          <div class="weather-info">
            <span class="water"><DropLet/>{{ humidity }}%</span>
            <span class="wind"><WindIcon/>{{ trunc(wind) }} km/h</span>
            <span class="compass"><CompassIcon/>{{ windDir }}</span>
          </div>
        </div>
      </div>
      <div class="date-container">
        <span class="date">{{ dateNow(new Date(`${date}`)) }}</span>
      </div>

      <div class="week-container">
        <div class="week">
          <div class="week-day"
               v-for="days in week"
               :key="days"
          >
            <img :src="days.day.condition.icon" alt="">
            <span class="week-deg">+{{ trunc(days.day.maxtemp_c) }}</span>
            <span class="week-day">{{ dayOfWeek(new Date(`${days.date}`)) }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import MapPin from "@/components/icons/MapPin.vue";
import {computed, onMounted, ref} from "vue";
import $api from "@/api/index.js";
import TempIcon from "@/components/icons/TempIcon.vue";
import DropLet from "@/components/icons/DropLet.vue";
import WindIcon from "@/components/icons/WindIcon.vue";
import CompassIcon from "@/components/icons/CompassIcon.vue";

const getCoords = async () => {
 await navigator.geolocation.getCurrentPosition(
      position => {
        lat.value = position.coords.latitude;
        lon.value = position.coords.longitude;
      },
      error => {
        console.log(error.message);
      },
  );
  console.log(lat.value, lon.value);
}


const lat = ref('');
const lon = ref('');
const country = ref('');
const region = ref('');
const tempC = ref('');
const text = ref('');
const humidity = ref('');
const wind = ref('');
const windDir = ref('');
const maxTemp = ref('');
const minTemp = ref('');
const icon = ref('');
const week = ref('');
const date = ref('');
const loading = ref(false)

// const getReg =  () => {
//    $api.get(`/current.json?q=${lat.value}%20${lon.value}&`)
//       .then((response) => (region.value = response.data.location.region))
//       .catch((error) => (console.log(error)))
//    $api.get(`/current.json?q=${region.value}&`)
//       .then((response) => (country.value = response.data.location.country))
//       .catch((error) => (console.log(error)))
// }
//
// const getInfo =  () => {
//    $api.get(`/current.json?q=${region.value}&`)
//       .then((response) => (tempC.value = response.data.current.temp_c))
//       .catch((error) => (console.log(error)))
//    $api.get(`/current.json?q=${region.value}&`)
//       .then((response) => (text.value = response.data.current.condition.text))
//       .catch((error) => (console.log(error)))
//    $api.get(`/current.json?q=${region.value}&`)
//       .then((response) => (humidity.value = response.data.current.humidity))
//       .catch((error) => (console.log(error)))
//    $api.get(`/current.json?q=${region.value}&`)
//       .then((response) => (wind.value = response.data.current.wind_kph))
//       .catch((error) => (console.log(error)))
//    $api.get(`/current.json?q=${region.value}&`)
//       .then((response) => (windDir.value = response.data.current.wind_dir))
//       .catch((error) => (console.log(error)))
//    $api.get(`/current.json?q=${region.value}&`)
//       .then((response) => (icon.value = response.data.current.condition.icon))
//       .catch((error) => (console.log(error)))
//    $api.get(`/forecast.json?q=${region.value}&days=6`)
//       .then((response) => (date.value = response.data.forecast.forecastday[0].date))
//       .catch((error) => (console.log(error)))
//    $api.get(`/forecast.json?q=${region.value}&days=6`)
//       .then((response) => (week.value = response.data.forecast.forecastday))
//       .catch((error) => (console.log(error)))
//    $api.get(`/forecast.json?q=${region.value}&days=1`)
//       .then((response) => (maxTemp.value = response.data.forecast.forecastday[0].day.maxtemp_c))
//       .catch((error) => (console.log(error)))
//    $api.get(`/forecast.json?q=${region.value}&days=1`)
//       .then((response) => (minTemp.value = response.data.forecast.forecastday[0].day.mintemp_c))
//       .catch((error) => (console.log(error)))
// }

// const getCoords = async () => {
//   try {
//     const response = await navigator.geolocation.getCurrentPosition
//     // lat.value = response.data.position.coords.latitude
//     // lon.value = response.data.position.coords.longitude
//     // console.log(lat.value, lon.value)
//     console.log(response)
//   } catch (e) {
//     console.log(e)
//   }
// }

const getReg = async () => {
  try {

  } catch (e) {

  }
}
const getInfo = async () => {
  try {

  } catch (e) {

  }
}

const trunc = computed(() => (temp) => {
  return Math.trunc(temp)
})

const dayOfWeek = computed(() => (date = new Date(), locale = `en-US`) => {
  return date.toLocaleDateString(locale, {weekday: 'long'})
})

const dateNow = computed(() => (date = new Date(), locale = `en-US`) => {
  return date.toLocaleDateString(locale, {weekday: 'long', month: 'long', day: "numeric", year: "numeric"})
})

// const loader = () => {
//   setTimeout(() => {
//     loading.value = false;
//   }, 1000);
// }

onMounted(async () => {
  await getCoords()
  // await getReg()
  // await getInfo()
  // loading.value = false
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 60px;
  padding: 20px;
}

.weather-card {
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse at 15% 20%, #7f1bd7 0%, #6622cc 25%, #3141b1 50%, #3f7998 75%, #4b8178 100%) 75% 50%/110% 150%;
  border-radius: 15px;
  box-shadow: 0 0 8px -1px #262626;
  display: flex;
  justify-content: space-around;
  align-items: initial;
  flex-direction: column;
}

.date-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.date {
  font-size: 18px;
  font-weight: 600;
  background-color: rgba(255, 0, 0, 0.47);
  border-radius: 8px;
  padding: 5px;
}

.location {
  display: flex;
  padding: 10px;
  font-size: 19px;
  font-weight: 600;
  justify-content: start;
  align-items: center;
}

.pin {
  display: inline-block;
  width: auto;
  margin-right: 2px;
  height: 0.8em;
}


.info-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
}

.weather-info {
  display: flex;
  flex-direction: column;
}

.water {
  display: flex;
  align-items: center;
}

.icon {
  height: 100px;
  width: auto;
}

.deg {
  display: flex;
  align-items: center;
  font-size: 70px;
  font-weight: 900;
}

.deg svg {
  width: 50px;
  height: 50px;
}

.text {
  font-size: 30px;
  font-weight: 900;
}

.water {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.water svg {
  margin-right: 5px;
}

.wind {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.wind svg {
  margin-right: 5px;
}

.compass {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.compass svg {
  margin-right: 5px;
}

.week-container {
  padding: 10px;
}

.week {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.week-day {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at 15% 20%, #7f1bd7 0%, #6622cc 25%, #3141b1 50%, #3f7998 75%, #4b8178 100%) 75% 50%/110% 150%;
  border-radius: 15px;
  z-index: 9999;
}

.loading {
  height: 70px;
  width: 70px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent rgba(255, 0, 0, 0.47);;
  border-radius: 100%;
  animation: rotate 0.75s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg) translatez(0);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
