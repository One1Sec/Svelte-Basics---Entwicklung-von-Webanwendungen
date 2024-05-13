# Aufgabe 06 - Props in Svelte

## Überblick 

In dieser Übung ergänzt ihr den Code, sodass alle Props richtig dargestellt und mit einem default value versehen werden. Zuletzt wird die spread-Methode angewand.

## Aufgaben 
1. **Declaring props:** In Nested.svelte wurde pizzaGooma nicht korrekt exportiert. Ergänze den Code entsprechend damit die Variable in der root component verwendet werden kann.

2. **Default values:** Ergänze in Nested.svelte den default value für 'pizzaGoomba' und rufe die Komponente erneut auf, jedoch ohne wie im Beispiel einen Input zu geben.

3. **Spread props:** Pizzainfo.svelte enthält ein p-Element und es werden weitere props deklariert und exportiert.
In App.svelte wurde bei einem Aufruf von "Pizzainfo" vergessen, den Wert für 'toppings' zu referenzieren. Da die props aus Pizzainfo.svelte den erwarteten Werten entsprechen, können alternativ spread props genutzt werden.
Ersetze den vorhanden Pizzainfo-Aufruf, damit die Nachricht im Browser korrekt angezeigt wird. 

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