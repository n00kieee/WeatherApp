<template>
  <BlowingSnowIcon v-if="props.text === 'Blowing snow'"/>
  <BlowingSnowIcon v-if="props.text === 'Blizzard'"/>
  <ClearDayIcon v-if="props.text === 'Sunny'"/>
  <ClearNightIcon v-if="props.text === 'Clear'"/>
  <CloudyIcon v-if="props.text === 'Cloudy'"/>
  <FogIcon v-if="props.text === 'Fog'"/>
  <FogIcon v-if="props.text === 'Freezing fog'"/>
  <FreezingDrizzleIcon v-if="props.text === 'Freezing drizzle'"/>
  <FreezingDrizzleIcon v-if="props.text === 'Heavy freezing drizzle'"/>
  <FreezingDrizzleIcon v-if="props.text === 'Light freezing rain'"/>
  <FreezingDrizzleIcon v-if="props.text === 'Moderate or heavy freezing rain'"/>
  <FreezingDrizzleIcon v-if="props.text === 'Light sleet'"/>
  <FreezingDrizzleIcon v-if="props.text === 'Moderate or heavy sleet'"/>
  <IcePelletsIcon v-if="props.text === 'Ice pellets'"/>
  <LightRainIcon v-if="props.text === 'Light rain'"/>
  <LightShowersOfIcePelletsIcon v-if="props.text === 'Light showers of ice pellets'"/>
  <LightShowersOfIcePelletsIcon v-if="props.text === 'Moderate or heavy showers of ice pellets'"/>
  <LightSnowShowersIcon v-if="props.text === 'Light snow showers'"/>
  <LightSnowIcon v-if="props.text === 'Light snow'"/>
  <LightSnowIcon v-if="props.text === 'Moderate snow'"/>
  <LightSnowIcon v-if="props.text === 'Heavy snow'"/>
  <MistIcon v-if="props.text === 'Mist'"/>
  <ModerateOrHeavyRainWithThunderIcon v-if="props.text === 'Moderate or heavy freezing rain'"/>
  <ModerateOrHeavySnowWithThunderIcon v-if="props.text === 'Moderate or heavy rain with thunder'"/>
  <ModerateOrHeavySnowWithThunderIcon v-if="props.text === 'Moderate or heavy snow with thunder'"/>
  <ModerateRainAtTimesIcon v-if="props.text === 'Moderate rain at times'"/>
  <ModerateRainAtTimesIcon v-if="props.text === 'Heavy rain at times'"/>
  <ModerateRainAtTimesIcon v-if="props.text === 'Heavy rain'"/>
  <OvercastIcon v-if="props.text === 'Overcast'"/>
  <PartlyCloudyIcon v-if="props.text === 'Partly cloudy'"/>
  <PatchyFreezingDrizzlePossibleIcon v-if="props.text === 'Patchy freezing drizzle possible'"/>
  <PatchyLightDrizzleIcon v-if="props.text === 'Patchy light drizzle'"/>
  <PatchyLightDrizzleIcon v-if="props.text === 'Light drizzle'"/>
  <PatchyLightRainIcon v-if="props.text === 'Patchy light rain'"/>
  <PatchyLightRainIcon v-if="props.text === 'Light rain shower'"/>
  <PatchyLightRainIcon v-if="props.text === 'Moderate or heavy rain shower'"/>
  <PatchyLightRainIcon v-if="props.text === 'Torrential rain shower'"/>
  <PatchyLightRainIcon v-if="props.text === 'Light sleet showers'"/>
  <PatchyLightSnowWithThunderIcon v-if="props.text === 'Patchy light snow with thunder'"/>
  <PatchyRainPossibleIcon v-if="props.text === 'Patchy rain possible'"/>
  <PatchySleetPossibleIcon v-if="props.text === 'Patchy sleet possible'"/>
  <PatchySleetPossibleIcon v-if="props.text === 'Moderate or heavy sleet showers'"/>
  <PatchySleetPossibleIcon v-if="props.text === 'Moderate or heavy snow showers'"/>
  <PatchySnowPossibleIcon v-if="props.text === 'Patchy snow possible'"/>
  <PatchySnowPossibleIcon v-if="props.text === 'Patchy light snow'"/>
  <PatchySnowPossibleIcon v-if="props.text === 'Patchy moderate snow'"/>
  <PatchySnowPossibleIcon v-if="props.text === 'Patchy heavy snow'"/>
  <ThunderyOutbreaksPossibleIcon v-if="props.text === 'Thundery outbreaks possible'"/>
  <ThunderyOutbreaksPossibleIcon v-if="props.text === 'Patchy light rain with thunder'"/>
</template>

<script setup>
import BlowingSnowIcon from "@/components/images/icons-weather/BlowingSnowIcon.vue";
import ClearDayIcon from "@/components/images/icons-weather/ClearDayIcon.vue";
import ClearNightIcon from "@/components/images/icons-weather/ClearNightIcon.vue";
import CloudyIcon from "@/components/images/icons-weather/CloudyIcon.vue";
import FogIcon from "@/components/images/icons-weather/FogIcon.vue";
import FreezingDrizzleIcon from "@/components/images/icons-weather/FreezingDrizzleIcon.vue";
import IcePelletsIcon from "@/components/images/icons-weather/IcePelletsIcon.vue";
import LightRainIcon from "@/components/images/icons-weather/LightRainIcon.vue";
import LightShowersOfIcePelletsIcon from "@/components/images/icons-weather/LightShowersOfIcePelletsIcon.vue";
import LightSnowShowersIcon from "@/components/images/icons-weather/LightSnowShowersIcon.vue";
import LightSnowIcon from "@/components/images/icons-weather/LightSnowIcon.vue";
import MistIcon from "@/components/images/icons-weather/MistIcon.vue";
import ModerateOrHeavyRainWithThunderIcon
  from "@/components/images/icons-weather/ModerateOrHeavyRainWithThunderIcon.vue";
import ModerateOrHeavySnowWithThunderIcon
  from "@/components/images/icons-weather/ModerateOrHeavySnowWithThunderIcon.vue";
import ModerateRainAtTimesIcon from "@/components/images/icons-weather/ModerateRainAtTimesIcon.vue";
import OvercastIcon from "@/components/images/icons-weather/OvercastIcon.vue";
import PartlyCloudyIcon from "@/components/images/icons-weather/PartlyCloudyIcon.vue";
import PatchyFreezingDrizzlePossibleIcon from "@/components/images/icons-weather/PatchyFreezingDrizzlePossibleIcon.vue";
import PatchyLightDrizzleIcon from "@/components/images/icons-weather/PatchyLightDrizzleIcon.vue";
import PatchyLightRainIcon from "@/components/images/icons-weather/PatchyLightRainIcon.vue";
import PatchyLightSnowWithThunderIcon from "@/components/images/icons-weather/PatchyLightSnowWithThunderIcon.vue";
import PatchyRainPossibleIcon from "@/components/images/icons-weather/PatchyRainPossibleIcon.vue";
import PatchySleetPossibleIcon from "@/components/images/icons-weather/PatchySleetPossibleIcon.vue";
import PatchySnowPossibleIcon from "@/components/images/icons-weather/PatchySnowPossibleIcon.vue";
import ThunderyOutbreaksPossibleIcon from "@/components/images/icons-weather/ThunderyOutbreaksPossibleIcon.vue";

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
</style>
