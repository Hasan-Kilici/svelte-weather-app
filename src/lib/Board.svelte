<script>
    import { weatherList } from './store.js';
    import WeatherCard from './WeatherCard.svelte';
</script>


{#each $weatherList as weather, index}
    <WeatherCard {weather} {index} />
{/each}
