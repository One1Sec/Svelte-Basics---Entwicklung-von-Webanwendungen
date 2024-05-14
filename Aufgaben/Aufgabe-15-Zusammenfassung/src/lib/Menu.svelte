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

  // Ziel: Implementiere die addToCart Funktion und zeige die Kategorien und Artikel dynamisch an

  let selected = "Pizzas"; // Standardmäßig ausgewählte Kategorie
  // Datenstruktur für das Menu
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
  // Aufgabe 3: Funktion addToCart vervollständigen
  function addToCart(item) {
    // Dein Code hier: Verwende .update, um den cart-Store zu aktualisieren
    cart((currentItems) => {
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
    <!-- Aufgabe 3: Kategorien als Buttons anzeigen mit {#each} anstatt hardcodet -->
    <!-- Hinweis: {#each Object.keys(items) ...  -->

    <Button variant="raised" on:click={() => (selected = "Pizzas")}>
      <Label>Pizzas</Label>
    </Button>
    <Button variant="raised" on:click={() => (selected = "Desserts")}>
      <Label>Desserts</Label>
    </Button>
    <!--...-->
  </div>

  <div class="menu">
    <!-- Aufgabe 3: Menu items mit {#each} anzeigen je nach ausgewählter kategorie-->
    <!-- Hinweis: {#each items[selected] ... -->
    <MenuCard
      item={items[selected][0]}
      on:click={() => addToCart(items[selected][0])}
    />
    <!--...-->
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
