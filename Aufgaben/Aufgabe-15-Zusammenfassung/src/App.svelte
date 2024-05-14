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

  // Ziel: Initialisiere die Audio-Objekte für die Bestellstatus-Sounds im onMount-Hook und zeige den OrderProcess an, wenn isOrderProcessing true ist

  let isOrderProcessing = false;

  let orderCompleted = new Audio(orderSucess);
  let orderFailure = new Audio(orderFailed);

  // Aufgabe 7: Initialisiere die Audio-Objekte für die Bestellstatus-Sounds im onMount-Hook
</script>

<main>
  <Hero />
  <Menu />
  <Cart
    on:click={() => {
      isOrderProcessing = true;
    }}
  />
  <!-- Aufgabe 7: Verwende einen if-Block, um OrderProcess anzuzeigen, wenn isOrderProcessing true ist -->
  <!-- 
  Füge der OrderProcess-Komponente die Component/Custom Events hinzu, 
  die in Aufgabe 6 dispatched wurden. Diese Events setzen beim Schließen 
  des Dialogs isOrderProcessing auf false und spielen die entsprechenden 
  Sounds ab (orderCompleted oder orderFailure). 
  -->
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
