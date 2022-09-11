<script>
    import { key } from './key.js';
    import { weatherList } from './store.js';

    let cityName = '';


    function getFetchUrl(cityName) {
        return 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + key + '&q=' + cityName ;
    }

    async function addWeatherInfo() {
        const res = await fetch(getFetchUrl(cityName));
        if (res.status === 404) {
            alert('Invalid City Name.');
        } else {
            weatherList.add(await res.json());
        }
        cityName = '';
    }
</script>

<div class="search-form">
    <input type="text"
           placeholder="Enter City Name."
           bind:value={cityName}
    />
    <button type="button"
            on:click={addWeatherInfo}
    >ADD</button>
</div>
<style >
    .search-form {
        width: 80%;
        margin-left: 10%;
        padding: 1rem;
    }
   input[type="text"] {
            width: 50%;
        }
      button {
            padding-left: 20px;
            padding-right: 20px;
            background-color: #f6d55c;
        }
    
</style>
