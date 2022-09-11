import { sass } from 'svelte-preprocess-sass';

export default {
    plugins: [
        svelte({
			preprocess: {
				style: sass({}, { name: 'scss' }),
			},
		}),
    ],
}
