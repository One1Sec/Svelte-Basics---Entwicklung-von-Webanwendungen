<script>
 
  import PizzaList from "./lib/PizzaList.svelte";
  import OrderSummary from "./lib/OrderSummary.svelte";
  import order_confirm from "./assets/mario-lets-go.mp3";
  import ThisWeeksSpecial from "./lib/WeeklySpecial.svelte"

  let cart = [];
  let audio;
  let showOrderButton = true;
  let orderButton;

// Ergänze hier die fehlende Funktion für onMount
  
  function handleAddPizza(event) {
    const { topping } = event.detail;
    
    if (cart.some(item => item.id === topping.id)) return;

    cart = [...cart, topping];
  }

  function handleOrder() {
    if (cart.length === 0) return;

    audio.play();
    const toppings = cart.map((item) => item.name).join(", ");
    alert(`Your Pizza with ${toppings} will be baked🍕🎉`);
    cart = [];
    showOrderButton = false;
  }
  
// Ergänze hier die fehlende Funktion für onDestroy

</script>

<main>
  <h1>Create Your Own Super Mario Pizza!</h1>
  <PizzaList on:addTopping={handleAddPizza} />
  <ThisWeeksSpecial />
  <OrderSummary
    on:removeTopping={(event) =>
      (cart = cart.filter((item) => item.id !== event.detail.id))}
    {cart}
  />

  {#if showOrderButton}
    <button bind:this={orderButton} on:click={handleOrder}>Complete Order</button>
  {/if}

</main>

<style>
  main {
    font-family: "Comic Sans MS", cursive;
    text-align: center;
    background-color: #e3caa5;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    width: 200px;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    margin-top: 25px
  }
  button:hover {
    background-color: #45a049;
  }
</style>




