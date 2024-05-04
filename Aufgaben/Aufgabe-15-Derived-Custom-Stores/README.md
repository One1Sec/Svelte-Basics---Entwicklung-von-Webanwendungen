# Aufgabe 15 - Stores in Svelte

## Überblick 

**1 Dervied Stores:** In Svelte ist ein derived store ein Store, der von einem oder mehreren anderen Stores abgeleitet wird. Er wird automatisch aktualisiert, wenn sich die abhängigen Stores ändern. Der Wert dieses Stores wird durch eine Funktion bestimmt, die die aktuellen Werte der abhängigen Stores als Parameter erhält. 

**2 Custom stores:** Custom Stores sind reaktive Speicher, die eine strukturierte Möglichkeit bieten, eigene Funktionen zur Interaktion und Verwaltung von Daten in Svelte zu erstellen, während sie die reaktive Natur von Svelte beibehalten.

**3 Store bindings:** Store-Bindings sorgen dafür, dass eine Komponente automatisch aktualisiert wird, wenn sich ein zugeordneter Store ändert, und dass Änderungen in der Komponente den Store ebenfalls aktualisieren können. Wenn ein Speicher eine set-Mehode hat, kann an seinen Wert angebunden werden. 

## Aufgaben

1. **Dervied-Stores**: In dieser Aufgabe wird mithilfe von 'elapsed' angezeigt, wie lange die Seite bereits geöffnet ist.  
Damit die Anzeige funktioniert, muss in dem Store 'elapsed' in stores.js die fehlende Berechnung ($time) => Math.round(($time - start) / 1000) ergänzt werden. Diese berechnet die Differenz zwischen dem Aufruf der Seite und der aktuellen Zeit.

2. **Custom stores:**: Damit der custom Store in dieser Aufgabe funktionsfähig ist, müssen in store.js in der return-Funktion 'update' und 'set' ergänzt werden.
    - der +-Button soll den Speicher um 1 erhöhen (-> update)
    - der reset-Button soll den Speicher zurück auf 0 setzen (->reset)

## Code aus stores.js

```javascript
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
```

3. **Store bindings**: In dieser Aufgabe wird eine Nachricht und die Möglichkeit Feedback zu geben aus store_bindings.js importiert. Damit dies funktioniert, muss folgender Code ergänzt werden:

    1. bind: Das bind-Attribut synchronisiert den Wert eines HTML-Elements, in diesem Fall der des input-Felds. Im Code in App.svelte muss das fehlende "bind:" vor dem value in <input> stehen.
    2. Funktion für Button: Der Button soll es ermöglichen, automtisch durch einen Klick positives Feedback in das auszufüllende Feld hinzuzufügen. Sobald er angeklickt wird, soll automatisch einmal 'I am satisfied' hinzugefügt werden. Im Code in App.svelte muss hierfür die fehlende Funktion und on:click ergänzt werden.

## Code aus App.svelte

```svelte
<script>
	import { time, elapsed } from './stores.js';
 	import { feedback, hinweis } from './store_bindings.js';
 	import { count } from './stores.js';

	const formatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);
</script>

<main>
	<h1>Mario & Luigi's Pizza</h1>
	<h2>Almost there! </h2>
	<h3>Your order at Mario and Luigis's Pizza is almost complete. If you have any feedback for us, please let us know here:</h3>

	<p>{$hinweis}</p>
	<!-- im folgenden input-Element muss bind ergänzt werden -->
	<input value={$feedback} />

	<!-- dem folgenden Button muss on:click und die Funktion feedback zugewiesen werden -->
	<button>
		I am satisfied!
	</button>

	<h3>Do you need additional disposable cutlery for your order?</h3>
	<p>I need {$count} sets of cutlery.</p>

	<button on:click={count.increment}>+</button>
	<button on:click={count.reset}>reset</button>


	<p>This page has been open for {$elapsed} seconds. <br/>
		After 5 minutes the order process is automatically cancelled.
	</p>
</main>
```