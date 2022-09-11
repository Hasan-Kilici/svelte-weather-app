import { writable } from 'svelte/store';

export const weatherList = (() => {
    const { subscribe, update } = writable([]);

    return {
        subscribe,
        add: (weatherInfo) => update(wList => [...wList, weatherInfo]),
        remove: (index) => update(wList => {
            wList.splice(index, 1);
            return wList;
        }),
    }
})();
