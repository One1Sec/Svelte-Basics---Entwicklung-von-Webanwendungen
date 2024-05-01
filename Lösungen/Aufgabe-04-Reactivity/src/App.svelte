<script>
  // Standardmäßig 0 Pizzen
  let pizzaCount = 0;

  // Declaration zur Berechnung des Gesamtpreises
  $: totalPrice = pizzaCount * 10;

  // Zurücksetzen vom pizzaCount, wenn sie 6 überschreitet
  $: if (pizzaCount > 6) {
    alert("Too many pizzas! Resetting your order.");
    pizzaCount = 0;
  }

  function orderPizza() {
    pizzaCount += 1;
  }
</script>

<main>
  <h1>Mario & Luigi's Pizza</h1>
  <button on:click={orderPizza}> Order Mario's Special </button>
  <p>Total Pizzas Ordered: {pizzaCount}</p>
  <p>Total Price: {totalPrice}€</p>
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
