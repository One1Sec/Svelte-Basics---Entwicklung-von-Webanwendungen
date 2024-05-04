// Berechnung der verstrichenen Zeit
import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const start = new Date();

export const elapsed = derived(
	time,
    // hier Zeitberechnung einfügen
);


// Funktion für Feedback-Feld
import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => // hier update ergänzen
		reset: () => // hier set ergänzen
	};
}

export const count = createCount();
