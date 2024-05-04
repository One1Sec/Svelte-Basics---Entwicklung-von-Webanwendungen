
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
	<Nested pizzaGoomba={"Mozzarella and Mushrooms"} />
	<Nested/>

	<Pizzainfo {...pizza} />
	
</main>

<style>

	  main {
		font-family: "Comic Sans MS", cursive;
   		text-align: center;
   		background-color: #e3caa5;
   		padding: 50px;
	  }

</style>
