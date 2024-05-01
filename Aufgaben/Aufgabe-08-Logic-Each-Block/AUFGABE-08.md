# Mario & Luigi's Pizza Ordering System Refactoring Exercise

## Overview

This exercise is designed to help you practice using Svelte's `{#each}` block to render lists dynamically. You will convert a static representation of a pizza list into a dynamic list based on an array of pizzas. This process will reinforce your understanding of dynamic data binding in Svelte.

## Objectives

- Implement the `{#each}` block to dynamically render list items.
- Understand and apply the use of keys to optimize rendering.

## Tasks

### Task 1: Implement the `{#each}` Block for the pizzas

Your task is to refactor a given static list into a dynamic list using the `{#each}` block. You should use the array `pizzas` to create list items dynamically. Focus on understanding how each list item updates automatically when the data changes.

### Task 2: Implement the `{#each}` Block for the cartItems

Refactor the cart summary section to dynamically render items using the `{#each}` block, focusing on items that have a quantity greater than zero. This will allow you to practice dynamic list rendering based on conditional logic.

### Task 3: Add Keys to the `{#each}` Blocks

Modify both `{#each}` blocks for pizzas and cartItems to include keys. Use the unique identifiers for pizzas to ensure Svelte can track each DOM element efficiently. This practice reduces potential bugs and improves the performance of your application.

## Instructions

Below is a template for your `App.svelte`. Follow the comments in the code to complete your tasks.

```svelte
<script>
  let pizzas = [
    { id: 1, name: "Goomba's Special", emoji: "🍄", quantity: 0 },
    { id: 2, name: "Yoshi's Veggie", emoji: "🦕", quantity: 0 },
    { id: 3, name: "Bowser's Blaze", emoji: "🐢", quantity: 0 },
    { id: 4, name: "Peach's Royal", emoji: "👑", quantity: 0 },
  ];

  // Functions to modify pizza quantities are already implemented
  function addToCart(pizza) {
    pizza.quantity += 1;
    pizzas = pizzas.slice(); // Triggers reactivity
  }

  function removeFromCart(pizza) {
    if (pizza.quantity > 0) {
      pizza.quantity -= 1;
      pizzas = pizzas.slice(); // Triggers reactivity
    }
  }
  // Pizzas that have been selected
  $: cartItems = pizzas.filter(p => p.quantity > 0);
</script>

<main>
  <h1>Mario & Luigi's Pizza Ordering System</h1>
  <ul>
    <!-- Task 1: Replace static list items with dynamic items using `{#each}` with keys -->
  </ul>
  <div class="cart">
    <h2>Your Cart:</h2>
    <!-- Task 2: Use `{#each}` to dynamically render the cart summary with keys -->
  </div>
</main>
```
