<script>
  import OrderButton from "./OrderButton.svelte";
  import IconButton from "@smui/icon-button";
  import { cart, totalPrice } from "./stores";

  // Ziel: Implementiere die removeItem Funktion und zeige die Artikel im Warenkorb dynamisch an


  // Aufgabe 4: Implementiere die removeItem-Funktion
  // Hinweis: cart.update(...)
  function removeItem(itemId) {}
</script>

<div class="container">
  <div class="cart-grid">
    <h2>Your Cart</h2>
    <div class="cart-items">
      <!-- Aufgabe 4: Nutze {#each}, um die cart items aus dem store effizient anzuzeigen -->

      <!-- Hinweis: Hardcoding vermeiden mit {#each} -->
      <!-- <div class="cart-item">
        <p>{$cart[0].name} - {$cart[0].quantity} x {$cart[0].price.toFixed(2)}€</p>
        <IconButton class="material-icons" on:click={() => removeItem($cart[0].id)}>close</IconButton>
      </div>
      <div class="cart-item">
        <p>{$cart[1].name} - {$cart[1].quantity} x {$cart[1].price.toFixed(2)}€</p>
        <IconButton class="material-icons" on:click={() => removeItem($cart[1].id)}>close</IconButton>
      </div> -->
    </div>
    <div class="cart-total">
      <h3>
        Total: <!-- Aufgabe 4: $totalPrice anzeigen mit 2 Nachkommastellen-->
      </h3>
      <OrderButton />
      <!-- Aufgabe 4: OrderButton click Event an die app.svelte forwarden -->
    </div>
  </div>
</div>

<style>
  .container {
    background-color: #ffd6bf;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cart-grid {
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 100%;
    max-width: 500px;
  }
  .cart-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
    background: white;
    height: 200px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
