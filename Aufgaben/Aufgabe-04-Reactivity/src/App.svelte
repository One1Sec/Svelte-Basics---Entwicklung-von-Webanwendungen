<script>
  // Aufgabe 1: Gebe der Variable einen Standartwert (standardmäßig 0)
  let pizzaCount; // <-- Your code here

  // Aufgabe 2: Berechne den Gesamtpreis der Pizzen (1 Pizza = 10€)
  $: totalPrice = undefined; // <-- Your code here

  function orderPizza() {
    // Aufgabe 3: Erhöhe die Anzahl der Pizzen um 1
    // <-- Your code here
  }

  // Aufgabe 4: Zurücksetzen vom pizzaCount, wenn sie 6 überschreitet
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
