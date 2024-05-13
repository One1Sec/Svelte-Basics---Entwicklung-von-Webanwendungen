<script>
  import CancelOrder from "./lib/CancelOrder.svelte";
  import Header from "./lib/Header.svelte";
  import Menu from "./lib/Menu.svelte";
  import OrderSummary from "./lib/OrderSummary.svelte";
  import OpeningHours from "./lib/OpeningHours.svelte"
</script>

<main>
  <Header></Header>
  <h2>Our Menu</h2>
  <Menu></Menu>
  <h2>Your Order</h2>
  <OrderSummary></OrderSummary>
  <CancelOrder></CancelOrder>
  <OpeningHours></OpeningHours>
</main>

<style>
  main {
    font-family: "Comic Sans MS", cursive;
    text-align: center;
    background-color: #e3caa5;
    padding: 50px;
  }
</style>
