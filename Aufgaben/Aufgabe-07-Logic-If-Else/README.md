# Aufgabe 07 - Logik in Svelte

## Überblick 

In svelte können verschiedene Logiken mithilfe von if, else und if else abgebildet werden. Eine neue if-Bedingung hat die folgende Schreibweise:

```svelte
{#if Bedingung1 = true} Ereignis A
{:else if Bedingung2 = true} Ereignis B
{:else} Ereignis C
{/if}
```

**Aufgabe:** Ergänze den Code damit folgende Nachrichten abgebildet werden: 
    - wenn mehr als 10 Pizzen im Wahrenkorb sind, soll eine Warnmeldung auftauchen, die darauf hinweist, dass Bestellungen für mehr als 10 Pizzen telefonisch bestellt werden müssen.
    
    - wenn weniger als 5 Pizzen im Wahrenkorb sind, soll eine Mitteilung erscheinen, die den Käufer darauf hinweist, dass die Liferkosten ab 5 Pizzen gratis sind und erfragt, ob dieser sicher nicht mehr bestellen möchte.
    
    - wenn zwischen 5 und 10 Pizzen im Wahrenkorb siind, soll die folgende Mittilung erscheinen: '{Anzahl Pizzen} - Pizzas sounds like a party🍕🥳'
    

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