<script>
  // Task 1: Declare a reactive variable for pizza count (default should be 0)
  let pizzaCount; // <-- Your code here

  // Task 2: Calculate the total price reactively (assume each pizza costs 10€)
  $: totalPrice = undefined; // <-- Your code here

  function orderPizza() {
    // Task 3: Increment the pizza count here
    // <-- Your code here
  }

  // Task 4: Add reactivity to handle excessive pizza orders (e.g. limit of 6)
  $: if (undefined) {
    // Reset logic here
    // <-- Your code here
  }
</script>

<main>
  <h1>Mario & Luigi's Pizza</h1>
  <button on:click={orderPizza}>Order Mario's Special</button>
  <p>Total Pizzas Ordered: {pizzaCount}</p>
  <p>Total Price: {totalPrice} €</p>
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
