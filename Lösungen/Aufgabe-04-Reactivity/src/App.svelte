<script>
  let pizzaCount = 0;

  // Reactive declaration for calculating total price
  $: totalPrice = pizzaCount * 10;

  // Logging the order changes reactively
  $: console.log(`Total pizzas ordered: ${pizzaCount}`);

  // Resetting pizza count reactively if it exceeds 6
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
