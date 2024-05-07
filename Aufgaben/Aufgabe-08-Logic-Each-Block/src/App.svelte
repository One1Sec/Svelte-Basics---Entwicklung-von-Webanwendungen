<script>
  // Pizzen von einer API oder Datenbank abgerufen
  let pizzas = [
    { id: 1, name: "Goombas Spezial", emoji: "🍄", quantity: 0 },
    { id: 2, name: "Yoshis Veggie", emoji: "🦕", quantity: 0 },
    { id: 3, name: "Bowsers Feuer", emoji: "🐢", quantity: 0 },
    { id: 4, name: "Peachs Royal", emoji: "👑", quantity: 0 },
  ];

  // Funktion, um eine Pizza zum Warenkorb hinzuzufügen
  function addToCart(pizzaId) {
    const pizza = pizzas.find((p) => p.id === pizzaId);
    pizza.quantity += 1;
    pizzas = pizzas;
  }

  // Funktion, um eine Pizza aus dem Warenkorb zu entfernen
  function removeFromCart(pizzaId) {
    const pizza = pizzas.find((p) => p.id === pizzaId);
    pizza.quantity -= 1;
    pizzas = pizzas;
  }

  // Declaration, um nur ausgewählte Pizzen anzuzeigen
  $: cartItems = pizzas.filter((p) => p.quantity > 0);
</script>

<main>
  <h1>Mario & Luigi's Pizza Ordering System</h1>
  <ul>
    <!-- Aufgabe 1: Überarbeite diese Liste mithilfe von `{#each}` mit keys -->
    <!-- Entferne statischen Code von Zeile 33 bis 60 -->
    <li class="container">
      <button on:click={() => addToCart(1)}>
        Add {pizzas[0].emoji}
        {pizzas[0].name}
      </button>
      <button
        on:click={() => removeFromCart(1)}
        aria-label="Entfernen"
        disabled={pizzas[0].quantity === 0}
      >
        Remove {pizzas[0].emoji}
      </button>
      <span>Quantity: {pizzas[0].quantity}</span>
    </li>
    <li class="container">
      <button on:click={() => addToCart(2)}>
        Add {pizzas[1].emoji}
        {pizzas[1].name}
      </button>
      <button
        on:click={() => removeFromCart(2)}
        aria-label="Entfernen"
        disabled={pizzas[1].quantity === 0}
      >
        Remove {pizzas[1].emoji}
      </button>
      <span>Quantity: {pizzas[1].quantity}</span>
    </li>
  </ul>
  <div class="cart">
    <h2>Your cart:</h2>
    <ul>
      <!-- Aufgabe 2: Verwende `{#each}` um die Warenkorb-Zusammenfassung dynamisch mit keys zu rendern (z.B.: <li> {pizza.quantity} x {pizza.emoji} {pizza.name}) -->
    </ul>
    <!--Aufgabe 3: Füge in jedem `{#each}` block ein key hinzu, um sicherzustellen, dass Svelte jedes DOM-Element effizient verfolgen kann-->
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: "Comic Sans MS", cursive;
    text-align: center;
    background-color: #e3caa5;
    padding: 50px;
  }

  .container {
    display: flex;
    width: 200px;
    justify-content: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  button {
    cursor: pointer;
    border-radius: 0;
    min-width: 100px;
  }
  .cart {
    margin-top: 20px;
    background-color: #f6f6f6;
    padding: 10px;
    border-radius: 15px;
    width: 300px;
  }
</style>
