# Exercise 04 - Reactivity in Svelte

## Overview

In this exercise, you'll be implementing a reactive system in a Svelte application for Mario & Luigi's Pizza. The goal is to manage pizza orders and update the UI reactively based on user interactions.

## Tasks

1. **Initialize Pizza Count**: assign a variable to keep track of the number of pizzas ordered.
2. **Calculate Total Price Reactively**: Implement a **declaration** that calculates the total price based on the number of pizzas ordered.
3. **Create an Order Function**: Write a function to increment the pizza count when a pizza is ordered.
4. **Handle Excessive Orders**: Add a **decleration** to reset the pizza count if it exceeds a certain limit.

## Instructions

Follow the comments in the provided code snippet to complete the missing parts. Each task corresponds to a specific comment in the code.

```svelte
<script>
  // Task 1: Declare a reactive variable for pizza count (default should be 0)
  let pizzaCount; // <-- Your code here

  // Task 2: Calculate the total price reactively (assume each pizza costs 10€)
  $: totalPrice; // <-- Your code here

  function orderPizza() {
    // Task 3: Increment the pizza count here
    // <-- Your code here
  }

  // Task 4: Add reactivity to handle excessive pizza orders (limit of 6)
  $: // <-- Your code here

</script>

<main>
  <h1>Mario & Luigi's Pizza</h1>
  <button on:click={orderPizza}>Order Mario's Special</button>
  <p>Total Pizzas Ordered: {pizzaCount}</p>
  <p>Total Price: {totalPrice}€</p>
</main>
```
