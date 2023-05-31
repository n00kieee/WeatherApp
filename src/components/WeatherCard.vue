<template>
  <div class="container">
    <div class="weather-card">
      <div class="card-gradient"></div>
      <transition name="fade" v-if="loading">
        <div class="loader">
          <div class="loading"></div>
        </div>
      </transition>
      <span class="location">
        <MapPin class="pin"/>
       {{ city }} {{ region }}, {{ country }}</span>
      <div class="info-container">
        <div class="temperature">
          <span class="deg">{{ tempC }}°</span>
          <span class="max-temp">max. {{ trunc(maxTemp) }}° </span>
          <span class="min-temp">min. {{ trunc(minTemp) }}°</span>
        </div>
        <div class="icon-weather">
          <svg>
            <IconsWeather :text="text"/>
          </svg>
        </div>
        <div class="desc">
          <span class="text">{{ text }}</span>
          <div class="weather-info">
            <span class="water"><DropLet/>{{ humidity }}%</span>
            <span class="wind"><WindIcon/>{{ trunc(wind) }}km/h</span>
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
            <svg>
              <IconsWeather :text="days.day.condition.text"/>
            </svg>
            <span class="week-deg">{{ trunc(days.day.maxtemp_c) }}°</span>
            <span class="week-day">{{ dayOfWeek(new Date(`${days.date}`)) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import $api from "@/api/index.js";
import MapPin from "@/components/images/icons/MapPin.vue";
import DropLet from "@/components/images/icons/DropLet.vue";
import WindIcon from "@/components/images/icons/WindIcon.vue";
import CompassIcon from "@/components/images/icons/CompassIcon.vue";
import IconsWeather from "@/components/IconsWeather.vue";

const country = ref('');
const region = ref('');
const city = ref('');
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
const loading = ref(false);

const coords = reactive({
  latitude: 0,
  longitude: 0
})

const error = ref(null);

const trunc = computed(() => (temp) => {
  return Math.trunc(temp)
})

const dayOfWeek = computed(() => (date = new Date(), locale = `en-US`) => {
  return date.toLocaleDateString(locale, {weekday: 'long'})
})

const dateNow = computed(() => (date = new Date(), locale = `en-US`) => {
  return date.toLocaleDateString(locale, {weekday: 'long', month: 'long', day: "numeric", year: "numeric"})
})

const getCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          coords.latitude = position.coords.latitude;
          coords.longitude = position.coords.longitude;
          resolve();
        },
        (err) => {
          error.value = err.message;
          reject(err);
        }
    );
  });
};

const getReg = async () => {
  try {
    const currentRegion = await $api.get(`/current.json?q=${coords.latitude}%20${coords.longitude}`);
    const currentCountry = await $api.get(`/current.json?q=${currentRegion.data.location.country}&`);
    country.value = currentCountry.data.location.country;
    region.value = currentRegion.data.location.region;
    city.value = currentRegion.data.location.name
  } catch (error) {
    error.value = error;
  }
}

const getInfo = async () => {
  try {
    const current = await $api.get(`/current.json?q=${region.value}&`);
    const futureDay = await $api.get(`/forecast.json?q=${region.value}&days=3`);
    const firstDay = await $api.get(`/forecast.json?q=${region.value}&days=1`);

    tempC.value = current.data.current.temp_c;
    text.value = current.data.current.condition.text;
    humidity.value = current.data.current.humidity;
    wind.value = current.data.current.wind_kph;
    windDir.value = current.data.current.wind_dir;
    icon.value = current.data.current.condition.icon;
    date.value = futureDay.data.forecast.forecastday[0].date;
    week.value = futureDay.data.forecast.forecastday;
    maxTemp.value = firstDay.data.forecast.forecastday[0].day.maxtemp_c;
    minTemp.value = firstDay.data.forecast.forecastday[0].day.mintemp_c;
  } catch (error) {
    error.value = error;
  }
}

onMounted(async () => {
  try {
    loading.value = true;
    await getCoords();
    await getReg();
    await getInfo();
    loading.value = false;
  } catch (error) {
    error.value = error;
    console.log(error.value);
  }
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.weather-card {
  width: 600px;
  height: 400px;
  background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
  border-radius: 15px;
  box-shadow: 0 0 8px -1px #262626;
  display: flex;
  justify-content: space-around;
  align-items: initial;
  flex-direction: column;
}

.card-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: var(--gradient);
  border-radius: 15px;
  opacity: 0.8;
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
  height: 24px;
}

.info-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 15px;
}

.icon-weather svg {
  width: 130px;
  height: 130px;
}

.desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.weather-info {
  display: flex;
  flex-direction: column;
}

.deg {
  display: flex;
  align-items: center;
  font-size: 70px;
  font-weight: 900;
}

.max-temp {
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.min-temp {
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: 5px;
}

.text {
  font-size: 30px;
  font-weight: 900;
}

.water {
  display: flex;
  align-items: center;
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.water svg {
  height: 40px;
}

.wind {
  display: flex;
  align-items: center;
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.wind svg {
  height: 40px;
}

.compass {
  display: flex;
  align-items: center;
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.compass svg {
  height: 40px;
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

.week-day svg {
  width: 60px;
  height: 60px;
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--gradient);
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
