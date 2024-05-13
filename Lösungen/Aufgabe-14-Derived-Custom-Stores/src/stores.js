
// Zeitberechnung
import { readable, derived } from 'svelte/store';

const startTime = new Date();

export const time = readable(startTime, function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

export const elapsed = derived(
  time,
  // @ts-ignore
  ($time) => Math.round(($time - startTime) / 1000)
);

// Count für Besteck
import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		reset: () => set(0)
	};
}

export const count = createCount();