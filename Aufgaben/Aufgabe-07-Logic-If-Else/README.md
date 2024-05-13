# Aufgabe 07 - Logik in Svelte

## Überblick 

In der folgenden Aufgabe sollen je nach Pizzen im Warenkorb bestimmte Nachrichten an den Kunden abgebildet werden. Diese sollen mithilfe von If, Else If und Else implementiert werden.

## Aufgabe:

Ergänze den Code damit folgende Nachrichten abgebildet werden: 

1. wenn mehr als 10 Pizzen im Wahrenkorb sind, soll eine Warnmeldung auftauchen, die darauf hinweist, dass Bestellungen für mehr als 10 Pizzen telefonisch bestellt werden müssen.
    
2. wenn weniger als 5 Pizzen im Wahrenkorb sind, soll eine Mitteilung erscheinen, die den Käufer darauf hinweist, dass die Liferkosten ab 5 Pizzen gratis sind und erfragt, ob dieser sicher nicht mehr bestellen möchte.
    
3. wenn zwischen 5 und 10 Pizzen im Wahrenkorb sind, soll die folgende Mittilung erscheinen: '{Anzahl Pizzen} - Pizzas sounds like a party🍕🥳'
    

```svelte
<script>
  	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<main>

	<h1>Mario & Luigi's Pizza</h1>

	<button on:click={increment}>
		Pizza Margherita zum Warenkorb hinzufügen
	</button>

	<button on:click={increment}>
		Pizza Funghi zum Warenkorb hinzufügen
	</button>

	<button on:click={increment}>
		Pizza Tonno zum Warenkorb hinzufügen
	</button>

	<p>Es befinden sich {count} Pizzen in deinem Wahrenkorb.</p>

	<!-- Ergänze hier die Bedingungen -->

</main>
```