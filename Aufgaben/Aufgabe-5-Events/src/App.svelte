<script>
  import { fade } from "svelte/transition";
  import PizzaList from "./lib/PizzaList.svelte";
  import OrderSummary from "./lib/OrderSummary.svelte";
  import mario_start from "../mario-lets-go.mp3";
  import order_confirm from "../order-confirm.mp3";

  let audio = new Audio();
  let isButtonClicked = false;
  let orderList = [];

  function playMarioSound() {
    // could be inside an inline handler instead
    audio.src = mario_start;
    audio.play();
    isButtonClicked = true;
  }

  function handleOrder(event) {
    orderList = [...orderList, event.detail.pizza];
  }

  function onConfirmOrder() {
    if (orderList.length < 0) return;

    audio.src = order_confirm;
    audio.play();
    orderList = [];
    alert("Deine Bestellung wurde aufgegeben.");
  }
</script>

<div class="container">
  {#if !isButtonClicked}
    <h1 transition:fade={{ delay: 2000, duration: 200 }}>
      Willkommen bei Mario & Luigis Pizza
    </h1>
    <button
      on:click|once={playMarioSound}
      transition:fade={{ delay: 2000, duration: 200 }}
      >Speisekarte ansehen</button
    >
    <!-- on:click|once explained, can be chained. -->
  {/if}
  {#if isButtonClicked}
    <div transition:fade class="pizza-list">
      <h2>Pizza:</h2>
      <PizzaList on:order={handleOrder} />
      <!-- on:order explained -->
      <OrderSummary {orderList} on:click={onConfirmOrder} />
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .pizza-list {
    margin-top: 20px;
    text-align: center;
  }
</style>
