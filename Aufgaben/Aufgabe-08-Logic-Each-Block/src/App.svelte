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
  <h1>Mario & Luigis Pizzabestellsystem</h1>
  <ul>
    <!-- Aufgabe 1: Überarbeite diese Liste mithilfe von `{#each}` mit keys -->
    <!-- Entferne statischen Code von Zeile 33 bis 60 -->
    <li>
      <button on:click={() => addToCart(1)}>
        Hinzufügen {pizzas[0].emoji}
        {pizzas[0].name}
      </button>
      <button
        on:click={() => removeFromCart(1)}
        aria-label="Entfernen"
        disabled={pizzas[0].quantity === 0}
      >
        Entfernen {pizzas[0].emoji}
      </button>
      <span>Menge: {pizzas[0].quantity}</span>
    </li>
    <li>
      <button on:click={() => addToCart(2)}>
        Hinzufügen {pizzas[1].emoji}
        {pizzas[1].name}
      </button>
      <button
        on:click={() => removeFromCart(2)}
        aria-label="Entfernen"
        disabled={pizzas[1].quantity === 0}
      >
        Entfernen {pizzas[1].emoji}
      </button>
      <span>Menge: {pizzas[1].quantity}</span>
    </li>
  </ul>
  <div class="cart">
    <h2>Dein Warenkorb:</h2>
    <!-- Aufgabe 2: Verwende `{#each}` um die Warenkorb-Zusammenfassung dynamisch mit keys zu rendern -->
    <ul></ul>
    <!--Aufgabe 3: Füge in jedem `{#each}` block ein key hinzu, um sicherzustellen, dass Svelte jedes DOM-Element effizient verfolgen kann-->
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
    cursor: pointer;
  }
  .cart {
    margin-top: 20px;
    background-color: #f6f6f6;
    padding: 10px;
  }
</style>
