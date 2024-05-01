<script>
  let pizzas = [
    { id: 1, name: "Goomba's Special", emoji: "🍄", quantity: 0 },
    { id: 2, name: "Yoshi's Veggie", emoji: "🦕", quantity: 0 },
    { id: 3, name: "Bowser's Blaze", emoji: "🐢", quantity: 0 },
    { id: 4, name: "Peach's Royal", emoji: "👑", quantity: 0 },
  ];

  //  Declaration to filter selected pizzas
  $: cartItems = pizzas.filter((p) => p.quantity > 0);

  function addToCart(pizzaId) {
    const pizza = pizzas.find((p) => p.id === pizzaId);
    pizza.quantity = pizza.quantity + 1;
    pizzas = pizzas;
  }

  // Function to remove a pizza from the cart
  function removeFromCart(pizzaId) {
    const pizza = pizzas.find((p) => p.id === pizzaId);
    pizza.quantity = pizza.quantity - 1;
    pizzas = pizzas;
  }
</script>

<main>
  <h1>Mario & Luigi's Pizza Ordering System</h1>
  <ul>
    <!-- Die Verwendung der `id` als Key hilft Svelte, jeden DOM-Knoten des Elements effizient zu verfolgen.
         Dies ist besonders wichtig bei größeren Listen oder wenn Elemente häufig aktualisiert,
         hinzugefügt oder entfernt werden, da es die Performance erheblich verbessern und UI-Fehler verhindern kann. -->
    {#each pizzas as pizza (pizza.id)}
      <li>
        <button on:click={() => addToCart(pizza.id)}>
          Add {pizza.emoji}
          {pizza.name}
        </button>
        <button
          on:click={() => removeFromCart(pizza.id)}
          disabled={pizza.quantity === 0}
        >
          Remove {pizza.emoji}
        </button>
        <span>Quantity: {pizza.quantity}</span>
      </li>
    {/each}
  </ul>
  <div class="cart">
    <h2>Your Cart:</h2>
    <ul>
      <!-- Auch hier optimiert die Verwendung der `id` als Key die Aktualisierungen nur für Elemente, die sich ändern,
           bewahrt den Zustand anderer Elemente in der Liste und minimiert dadurch DOM-Aktualisierungen. -->
      {#each cartItems as pizza (pizza.id)}
        <li>{pizza.quantity} x {pizza.emoji} {pizza.name}</li>
      {/each}
    </ul>
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
