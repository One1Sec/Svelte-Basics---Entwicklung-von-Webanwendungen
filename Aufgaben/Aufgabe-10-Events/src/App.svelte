<script>
  import { onMount } from "svelte";
  import PizzaList from "./lib/PizzaList.svelte";
  import OrderSummary from "./lib/OrderSummary.svelte";
  import OrderButton from "./lib/OrderButton.svelte";
  import order_confirm from "./assets/mario-lets-go.mp3";

  let cart = [];
  let audio;

  // onMount ist eine Lifecycle-Funktion, die ausgeführt wird, wenn die Komponente gemountet wird. Mehr dazu später.
  onMount(() => {
    audio = new Audio(order_confirm);
    audio.preload = "auto";
  });

  function handleAddPizza(event) {
    const { topping } = event.detail;
    // verhindere doppelte Toppings
    if (cart.some((item) => item.id === topping.id)) return;

    // Aufgabe 2: Handle das addTopping Event hier
  }

  function handleOrder() {
    if (cart.length === 0) return;

    audio.play();
    const toppings = cart.map((item) => item.name).join(", ");
    alert(`Deine Pizza mit ${toppings} wird gebacken🍕🎉`);
    cart = [];
  }

  function handleRemoveTopping(event) {
    cart = cart.filter((item) => item.id !== event.detail.id);
  }
</script>

<main>
  <h1>Create Your Own Super Mario Pizza!</h1>
  <PizzaList on:addTopping={handleAddPizza} />
  <!-- Aufgabe 3: Refaktorisiere die handleRemoveTopping Funktion zu einem Inline-Handler -->
  <OrderSummary on:removeTopping={handleRemoveTopping} {cart} />
  <!-- Aufgabe 4: Verbinde das Klick-Event des OrderButton mit der handleOrder Funktion und füge den 'once' Modifier hinzu -->
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
