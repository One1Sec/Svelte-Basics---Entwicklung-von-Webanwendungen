<script>
  import PizzaList from "./lib/PizzaList.svelte";
  import OrderSummary from "./lib/OrderSummary.svelte";
  import OrderButton from "./lib/OrderButton.svelte";
  import order_confirm from "./assets/mario-lets-go.mp3";

  let cart = [];

  function handleAddPizza(event) {
    // Task 2: Handle the addTopping event here
  }

  function handleOrder() {
    if (cart.length === 0) return;

    const audio = new Audio(order_confirm);
    audio.play();
    const toppings = cart.map((item) => item.name).join(", ");
    alert(`Your Pizza with ${toppings} will be baked🍕🎉`);
    cart = [];
  }

  function handleRemoveTopping(event) {
    cart = cart.filter((item) => item.id !== event.detail.id);
  }
</script>

<main>
  <h1>Create Your Own Super Mario Pizza!</h1>
  <PizzaList on:addTopping={handleAddPizza} />
  <!-- Task 4: Refactor the handleRemoveTopping function into an inline handler -->
  <OrderSummary on:removeTopping={handleRemoveTopping} {cart} />
  <!-- Task 5: Link the OrderButton click event to the handleOrder function-->
  <OrderButton />
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
