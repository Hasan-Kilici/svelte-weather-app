<script>
    import { weatherList } from './store.js';
    export let weather;
    export let index;
    let src = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
    let duration = 1.5 * 1000;

    let start = 0;
    let showDeleteSection = false;

    function init() {
        start = new Date().getTime();
        showDeleteSection = false;
    }
    function openModal() {
        if (new Date().getTime() >= (start + duration)) {
            showDeleteSection = true;
        }
    }
    function closeModal() {
        start = 0;
        showDeleteSection = false;
    }
    function remove() {
        weatherList.remove(index);
        closeModal();
    }
</script>

<div class="card">
    <section on:mousedown={init} on:mouseup={openModal}>
        <h4><b>{weather.name}</b></h4>
        <img {src} alt={weather.weather[0].description} title={weather.weather[0].main}>
        <div class="container">
            {weather.main.temp}℃ / {weather.main.humidity}％
        </div>
    </section>
    {#if showDeleteSection}
        <section>
            <button type="button" on:click={remove}>Remove</button>
            <button type="button" on:click={closeModal}>Cancel</button>
        </section>
    {/if}
</div>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 20%;
        margin: 10px;
        display: inline-block;
     }
        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

       .card .container {
            padding: 10px;
        }
  
</style>
