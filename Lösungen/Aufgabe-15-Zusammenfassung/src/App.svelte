<script>
  import Hero from "./lib/Hero.svelte";
  import Menu from "./lib/Menu.svelte";
  import Cart from "./lib/Cart.svelte";
  import OrderProcess from "./lib/OrderProcess.svelte";
  import Footer from "./lib/Footer.svelte";
  import { onMount } from "svelte";
  import orderSucess from "./assets/sucess.mp3";
  import orderFailed from "./assets/fail.mp3";
  import Contact from "./lib/Contact.svelte";
  import { cart } from "./lib/stores";

  let isOrderProcessing = false;

  let orderCompleted, orderFailure;

  onMount(() => {
    orderCompleted = new Audio(orderSucess);
    orderFailure = new Audio(orderFailed);
  });
</script>

<main>
  <Hero />
  <Menu />
  <Cart
    on:click={() => {
      isOrderProcessing = true;
    }}
  />
  {#if isOrderProcessing && $cart.length > 0}
    <OrderProcess
      on:closeDialog={() => (isOrderProcessing = false)}
      on:orderSuccess={() => orderCompleted.play()}
      on:orderFailed={() => orderFailure.play()}
    />
  {/if}
  <Contact />
  <Footer />
</main>

<style>
  main {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
</style>
