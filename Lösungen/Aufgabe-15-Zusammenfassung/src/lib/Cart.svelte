<script>
  import OrderButton from "./OrderButton.svelte";
  import IconButton from "@smui/icon-button";
  import { cart, totalPrice } from "./stores";

  $: $cart, $totalPrice;

  function removeItem(itemId) {
    cart.update(items => items.filter(item => item.id !== itemId));
  }
</script>

<div class="container">
  <div class="cart-grid">
    <h2>Your Cart</h2>
    <div class="cart-items">
      {#each $cart as item (item.id)}
        <div class="cart-item">
          <p>{item.name} - {item.quantity} x {item.price.toFixed(2)}€</p>
          <IconButton class="material-icons" on:click={() => removeItem(item.id)}>close</IconButton>
        </div>
      {/each}
    </div>
    <div class="cart-total">
      <h3>Total: {$totalPrice.toFixed(2)}€</h3>
      <OrderButton on:click />
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