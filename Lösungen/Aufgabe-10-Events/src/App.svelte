<script>
  import PizzaList from "./lib/PizzaList.svelte";
  import OrderSummary from "./lib/OrderSummary.svelte";
  import OrderButton from "./lib/OrderButton.svelte";
  import order_confirm from "./assets/mario-lets-go.mp3";

  let cart = [];

  function handleAddPizza(event) {
    console.log(event.detail);
    cart = [...cart, event.detail.topping];
    

    // Excess code to prevent duplicate toppings if we do not use the on:click|once event modifier
    // if (!cart.find((cartItem) => cartItem.id === topping.id)) {
    //   cart = [...cart, topping];
    // }
  }

  function handleOrder() {
    if (cart.length === 0) return;

    const audio = new Audio(order_confirm);
    audio.play();
    const toppings = cart.map((item) => item.name).join(", ");
    alert(`Your Pizza with ${toppings} will be baked🍕🎉`);
    cart = [];
  }
</script>

<main>
  <h1>Create Your Own Super Mario Pizza!</h1>
  <PizzaList on:addTopping={handleAddPizza} />
  <OrderSummary
    on:removeTopping={(event) =>
      (cart = cart.filter((item) => item.id !== event.detail.id))}
    {cart}
  />
  <OrderButton on:click={handleOrder} />
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
</style>
