<script>
  // Fetched pizzas from an API or database
  let pizzas = [
    { id: 1, name: "Goomba's Special", emoji: "🍄", quantity: 0 },
    { id: 2, name: "Yoshi's Veggie", emoji: "🦕", quantity: 0 },
    { id: 3, name: "Bowser's Blaze", emoji: "🐢", quantity: 0 },
    { id: 4, name: "Peach's Royal", emoji: "👑", quantity: 0 },
  ];

  // Function to add a pizza to the cart
  function addToCart(pizzaId) {
    const pizza = pizzas.find((p) => p.id === pizzaId);
    pizza.quantity += 1;
    pizzas = pizzas;
  }

  // Function to remove a pizza from the cart
  function removeFromCart(pizzaId) {
    const pizza = pizzas.find((p) => p.id === pizzaId);
    pizza.quantity -= 1;
    pizzas = pizzas;
  }

  // Declaration to filter selected pizzas
  $: cartItems = pizzas.filter((p) => p.quantity > 0);
</script>

<main>
  <h1>Mario & Luigi's Pizza Ordering System</h1>
  <ul>
    <!-- Task: Refactor this list to use the {#each} block for dynamic rendering -->
    <!-- Remove static code from line 33 to 60-->
    <li>
      <button on:click={() => addToCart(1)}>
        Add {pizzas[0].emoji}
        {pizzas[0].name}
      </button>
      <button
        on:click={() => removeFromCart(1)}
        aria-label="Remove"
        disabled={pizzas[0].quantity === 0}
      >
        Remove {pizzas[0].emoji}
      </button>
      <span>Quantity: {pizzas[0].quantity}</span>
    </li>
    <li>
      <button on:click={() => addToCart(2)}>
        Add {pizzas[1].emoji}
        {pizzas[1].name}
      </button>
      <button
        on:click={() => removeFromCart(2)}
        aria-label="Remove"
        disabled={pizzas[1].quantity === 0}
      >
        Remove {pizzas[1].emoji}
      </button>
      <span>Quantity: {pizzas[1].quantity}</span>
    </li>
  </ul>
  <div class="cart">
    <h2>Your Cart:</h2>
    <!-- Task: Refactor this list to use the {#each} block with cartItems for dynamic rendering -->
    <ul></ul>
  </div>
</main>

<style>
  main {
    font-family: "Comic Sans MS", cursive;
    text-align: center;
    background-color: #e3caa5;
    padding: 50px;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  button {
    margin-right: 10px;
    cursor: pointer;
  }
  .cart {
    margin-top: 20px;
    background-color: #f6f6f6;
    padding: 10px;
  }
</style>
