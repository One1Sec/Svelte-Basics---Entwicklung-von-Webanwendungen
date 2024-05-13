<script>
  import MenuCard from "./MenuCard.svelte";
  import { cart } from "./stores";
  import pizza1 from "../assets/pizza-1.jpg";
  import pizza2 from "../assets/pizza-2.jpg";
  import pizza3 from "../assets/pizza-3.jpg";

  import dessert1 from "../assets/dessert-1.jpg";
  import dessert2 from "../assets/dessert-2.jpg";

  import drink1 from "../assets/drink-1.jpg";
  import drink2 from "../assets/drink-2.jpg";

  import Button, { Label } from "@smui/button";

  let selected = "Pizzas"; // Default selected category

  const items = {
    Pizzas: [
      {
        id: 1,
        name: "Mushroom Kingdom",
        price: 9.5,
        description:
          "A pizza loaded with a variety of mushrooms and mozzarella cheese.",
        img: pizza1,
      },
      {
        id: 2,
        name: "Bowser's Inferno",
        price: 10.5,
        description:
          "A spicy pizza with pepperoni, jalapenos, and a hot sauce base.",
        img: pizza2,
      },
      {
        id: 3,
        name: "Yoshi's Island Delight",
        price: 8.5,
        description:
          "A vegetarian pizza with bell peppers, olives, onions, and a pesto base.",
        img: pizza3,
      },
    ],
    Desserts: [
      {
        id: 4,
        name: "Peach’s Castle Cake",
        price: 6.5,
        description:
          "A majestic cake layered with peach preserves and vanilla frosting.",
        img: dessert1,
      },
      {
        id: 5,
        name: "Luigi’s Mansion Donut",
        price: 5.0,
        description: "A mysterious blend of dark chocolate and mint gelato.",
        img: dessert2,
      },
    ],
    Drinks: [
      {
        id: 6,
        name: "Fire Flower Soda",
        price: 4.5,
        description:
          "An energizing soda infused with fiery spices and a touch of citrus.",
        img: drink2,
      },
      {
        id: 7,
        name: "Starman’s Sparkling Water",
        price: 3.5,
        description:
          "A sparkling water that gives a temporary boost of invigoration.",
        img: drink1,
      },
    ],
  };

  function addToCart(item) {
    cart.update((currentItems) => {
      const found = currentItems.find((p) => p.id === item.id);
      if (found) {
        found.quantity++;
      } else {
        currentItems.push({ ...item, quantity: 1 });
      }
      return currentItems;
    });
  }
</script>

<main class="container">
  <div class="category-buttons">
    {#each Object.keys(items) as category}
      <Button variant="raised" on:click={() => (selected = category)}>
        <Label>{category}</Label>
      </Button>
    {/each}
  </div>

  <div class="menu">
    {#each items[selected] as item (item.id)}
      <MenuCard {item} on:click={() => addToCart(item)} />
    {/each}
  </div>
</main>

<style>
  .container {
    background-color: #ff9f66;
    padding: 25px;
  }
  .category-buttons {
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  .menu {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
  }
</style>
