# Aufgabe 14 - Stores in Svelte

## Überblick 

In der folgenden Aufgabe werden mithilfe von Stores eine Anzeige der verstrichenen Zeit seit der Öffnung der Website und zwei Buttons mit einem zugehörigen Store implementiert. Im letzten Schritt wird ein Eingabefeld eingebunden. 

## Aufgaben

1. **Dervied-Stores**: In dieser Aufgabe wird mithilfe von 'elapsed' angezeigt, wie lange die Seite bereits geöffnet ist. Nach ca. 20 Sekunden soll eine Hinweis auftauchen.

Wechsle zuerst zu "stores.js"

- Importiere "readable" und "derived" aus 'svelte/store'
- Deiniere die exportierte Variable "elapsed". Da diese vom Store "time" anhängt, handelt es sich um einen derived store.
	Weise "elapsed" die Funktion "derived" und rufe in dieser "time" auf. 
- Ergänze im letzten Schritt die Berechnunng für die verstrichene Zeit. Nutze dafür die Differenz zwischen der Variable "startTime", die ein neues Datumerstellt, und dem Store "time". (Hinweis: Math.round nicht vergessen)
 
2. **Custom stores:**: In dieser Aufgabe wird ein custom Store für das zusätzliche Bestellen von Einwegbesteck erstellt, der mit zwei Buttons verknüpft ist.

Wechsle zuerst zu "stores.js"

1. Definire in der Funktion "createCount" zunächst den writabel Store mit dem Startwert 0. 
Dieser soll ein Objekt mit den 3 Methoden "subscribe", "set" und "update" zurückgeben.

	Hinweis: Die Methode **subscribe** wird verwendet, um eine Callback-Funktion zu "abonnieren", die aufgerufen wird, wenn sich der Wert des Stores ändert.
	
2. Damit der custom Store in dieser Aufgabe funktionsfähig ist, müssen in store.js in der return-Funktion 'update' und 'set' ergänzt werden.
    - der +-Button soll den Speicher um 1 erhöhen (-> update)
    - der reset-Button soll den Speicher zurück auf 0 setzen (->reset)

## Code aus stores.js

```javascript
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
```

3. **Store bindings**: In dieser Aufgabe wird ein Store aus store_bindings.js importiert. Mithilfe eines Buttons soll eine Antwort aus dem Inputfeld an den Store gebunden werden. Damit dies funktioniert, muss folgender Code ergänzt werden:

1. bind: Das bind-Attribut synchronisiert den Wert eines HTML-Elements, in diesem Fall der des input-Felds. Im Code in App.svelte muss das fehlende "bind:" vor dem value in 'input' stehen.

2. Funktion für Button: Der Button soll es ermöglichen, automtisch durch einen Klick positives Feedback in das auszufüllende Feld hinzuzufügen. Sobald er angeklickt wird, soll automatisch einmal "I am satisfied" hinzugefügt werden. 
Ergänze dafür in App.svelte die fehlenden Funktion für den Button "I am satisfied!". Diese muss auf den store "feedback" verweisen.

## Code aus App.svelte

```svelte
<script>
	import { onDestroy } from 'svelte';
	import { elapsed } from './stores';
 	import { feedback, hinweis } from './store_bindings.js';
 	import { count } from './stores';

	function handleFeedback() {
    alert('Thank you for your feedback!');
	$feedback = '';
  	}

	function reminder() {
    alert('Are you still there?');
  	}
	const interval = setInterval(reminder, 20000);
	onDestroy(() => {
		clearInterval(interval);
	});
	
</script>

<main>
	<h1>Mario & Luigi's Pizza</h1>
	<h2>Almost there! </h2>
	<h3>Your order at Mario and Luigis's Pizza is almost complete. If you have any feedback for us, please let us know here:</h3>

	<p>{$hinweis}</p>
	<!-- im folgenden input-Element muss bind ergänzt werden -->
	<input value={$feedback} />

	<!-- dem folgenden Button muss on:click und eine Funktion ergänzt werden -->
	<button>
		"I am satisfied!"
	</button>

	<button on:click={handleFeedback}>
		Send
	</button>

	<h3>Do you need additional disposable cutlery for your order?</h3>
	<p>I need {$count} sets of cutlery.</p>

	<button on:click={count.increment}>+</button>
	<button on:click={count.reset}>reset</button>


	<p>This page has been open for {$elapsed} seconds. <br/>
		After 5 minutes the order process is automatically cancelled.
	</p>
</main>

<style>

	main {
	  font-family: "Comic Sans MS", cursive;
		 text-align: center;
		 background-color: #e3caa5;
		 padding: 50px;
	}
	button {
		background-color: #fc4100;
		color: white;
		border: none;
		padding: 10px 20px;
		cursor: pointer;
		border-radius: 5px;
		font-size: 16px;
  	}
 	button:hover {
    	background-color: #c40c0c;
 	}

</style>
```