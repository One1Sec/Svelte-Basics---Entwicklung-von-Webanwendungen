<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const pizzas = ["Salami", "Margherita", "Pepperoni", "Veggie", "Hawaiian"];

  function selectPizza(pizza) {
    dispatch("order", { pizza }); // Component events
  }
</script>

<ul>
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#each pizzas as pizza}
    <li on:click={() => selectPizza(pizza)}>
      {pizza}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background: #f8f8f8;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
</style>
