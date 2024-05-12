<script>
  import PizzaCard from "./PizzaCard.svelte";
  import { cart } from "./stores";
  import pizza1 from "../assets/pizza-1.jpg";
  import pizza2 from "../assets/pizza-2.jpg";
  import pizza3 from "../assets/pizza-3.jpg";

  const pizzas = [
    {
      id: 1,
      name: "Mushroom Kingdom",
      price: 9.50,
      description:
        "A pizza loaded with a variety of mushrooms and mozzarella cheese.",
      img: pizza1,
    },
    {
      id: 2,
      name: "Bowser's Inferno",
      price: 10.50,
      description:
        "A spicy pizza with pepperoni, jalapenos, and a hot sauce base.",
      img: pizza2,
    },
    {
      id: 3,
      name: "Yoshi's Island Delight",
      price: 8.50,
      description:
        "A vegetarian pizza with bell peppers, olives, onions, and a pesto base.",
      img: pizza3,
    },
  ];

  function addToCart(pizza) {
    cart.update((items) => {
      let found = items.find((p) => p.id === pizza.id);
      if (found) {
        found.quantity++;
      } else {
        items.push({ ...pizza, quantity: 1 });
      }
      return items;
    });
  }
</script>

<div class="menu">
  {#each pizzas as pizza (pizza.id)}
    <PizzaCard {pizza} on:click={() => addToCart(pizza)} />
  {/each}
</div>

<style>
  .menu {
    display: flex;
    justify-content: center;
    align-items: space-between;
    gap: 1rem;
    padding: 2rem;
    background-color: #524c42;
  }
</style>
