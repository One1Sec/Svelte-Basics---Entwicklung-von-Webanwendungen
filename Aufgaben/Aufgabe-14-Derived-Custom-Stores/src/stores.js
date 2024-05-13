
// Berechnung der verstrichenen Zeit

const startTime = new Date();

export const time = readable(startTime, function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

// Ergänze hier den derived Store "elapsed"


// Count für Besteck
import { writable } from 'svelte/store';

function createCount() {
  // Definiere hier einen Objekt writable Store 

  // Ergänze hier die fehlenden Funktionen für increment und reset
	return {
		subscribe,
		increment:
		reset:
}

export const count = createCount();