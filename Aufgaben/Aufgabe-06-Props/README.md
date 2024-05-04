# Aufgabe 06 - Props in Svelte

## Überblick 

1. **Declaring props:** Um Daten auch außerhalb einer Komonente zu nutzen, kann in svelet vor der Deklarierung das Stichwort 'export' ergänzt werden. Mithilfe von 'export' kann dann auch außerhalb einer Komponente auf Props zugegriffen werden. Dafür wird bei der Deklarierung im script durch let/ const zusätzlich export geschrieben. 
Um die Props in anderen Komponenten nutzen zu können, muss in diesem zusätzlich die Funktion 'import' genutzt werden. Diese wird in svelte genutzt, um Module, Komponenten oder andere JavaScript-Assets in eine Svelte-Datei zu importieren. 

2. **Default values:** Props können zusätzlich mit einem default value versehen werden. Dieser kann bei der Deklaration vergeben werden. Wird eine exportierte Komponente ohne eine Antwortstütze hinzufügen, wird automatisch der default value zurückgegeben.

3. **Spread props:** Spread Props in Svelte ermöglichen es, die Eigenschaften eines Objekts auf ein Svelte-Element oder eine Komponente zu verteilen (ähnlich wie in JavaScript mit dem Spread-Operator). Dadurch kann man Props übergeben, ohne sie explizit aufzulisten, was z.B. beim Erstellen wiederverwendbarer Komponenten nützlich ist.

## Aufgaben 
1. **Declaring props:** Ergänze in Nested.svelte das fehlende 'export' vor der Deklaration von 'pizzaGoomba'.

2. **Default values:** Ergänze in Nested.svelte den default value für 'pizzaGoomba' und in App.svelte eine weiteres <Nested/>-Element ohne Antwortstütze, sodass aitomatisch der default value ausgegeben wird.

3. **Spread props:** In der Aufgabe liegt das file Pizzainfo.svelte ab. In diesem liegt ein p-Element ab und es werden weitere props exportiert.
In App.svelte wurde vergessen, den Wert für 'toppings' zu referenzieren. Da die props den erwarteten Werten entsprechen, kann alternativ die folgende Methode genutzt werden:

```svelte
<Pizzainfo {...pizza} /> 
```

Hierdurch werden die erwarteten Props auf die komplette Komponente "gespreaded"

Aufgabe: Ersetze den vorhanden Pizzainfo-Aufruf durch die oben beschriebene Möglichkeit. 

```svelte
<script>
	import Nested from './Nested.svelte';
	import Pizzainfo from './Pizzainfo.svelte';

	const pizza = {
		name: "Yoshi's Veggi",
		diameter: "28cm",
		price: "10€",
		toppings: "Mozzarella and Broccoli",
	};

</script>

<main>
	<h1>Mario & Luigi's Pizza</h1>
	<Nested pizzaGoomba = {"Mozzarella and Mushrooms"} />

	<Pizzainfo 
		name = {pizza.name}	
		diameter = {pizza.diameter}
		price= {pizza.price}
	/>
	
</main>
```