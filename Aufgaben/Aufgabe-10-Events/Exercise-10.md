# Exercise 10 - Event Handling in Svelte

## Overview

This exercise enhances your understanding of event handling in Svelte applications. You'll work on the "Create Your Own Super Mario Pizza!" ordering system, focusing on dispatching and handling custom events, using event modifiers, and implementing event forwarding.

## Objectives

- Implement and dispatch custom component events using `createEventDispatcher`.
- Use event modifiers to control user interactions.
- Apply event forwarding to manage events effectively across different components.

## Tasks

### Task 1: Dispatching Component Events

Modify `PizzaList.svelte` to dispatch an event when a topping is added. This event should carry the topping details.

**Instructions:**

- Locate the `addToPizza` function in `PizzaList.svelte`.
- Use `createEventDispatcher` to dispatch an 'addTopping' event that includes the topping details.

### Task 2: Handling Component Events in App.svelte

Setup `App.svelte` to handle the 'addTopping' event from `PizzaList.svelte`. Update the cart array appropriately to manage new toppings.

**Instructions:**

- Implement the event handler in `App.svelte` to receive the topping data and update the cart, ensuring no duplicates.

### Task 3: Implement an Event Modifier

Adjust the button in `PizzaList.svelte` to use an inline event handler with the `once` modifier, ensuring that a topping can only be added once.

**Instructions:**

- Apply the `once` modifier to the button responsible for adding toppings.

### Task 4: Implement an Inline Handler for Deleting Toppings in App.svelte

**Instructions:**

- Use the `on:removeTopping` component event and its `event.detail.id` to filter the topping out from the `cart`.

### Task 5: Implement Event Forwarding in OrderButton

Ensure that the `OrderButton` component forwards the click event properly to `App.svelte` for order completion.

**Instructions:**

- Link the `OrderButton` click event to a function in `App.svelte` that completes the order.

## Code Templates

**PizzaList.svelte**

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let toppings = [
    { id: 1, name: "Goomba's Mushroom", emoji: "🍄" },
    { id: 2, name: "Yoshi's Peppers", emoji: "🌶️" },
    { id: 3, name: "Bowser's Hot Sauce", emoji: "🔥" },
    { id: 4, name: "Peach's Pineapple", emoji: "🍍" },
  ];

  function addToPizza(topping) {
    // Task 1: Dispatch an event with the topping information
    // <-- code here -->
  }
</script>

<ul>
  {#each toppings as topping (topping.id)}
    <li>
      <button on:click={() => addToPizza(topping)}> <!-- Task 3: Add the 'once' modifier here -->
        Add {topping.emoji} {topping.name}
      </button>
    </li>
  {/each}
</ul>
```

**App.svelte**

```svelte
<script>
  import PizzaList from "./lib/PizzaList.svelte";
  import OrderSummary from "./lib/OrderSummary.svelte";
  import OrderButton from "./lib/OrderButton.svelte";

  let cart = [];

  function handleAddPizza(event) {
    // Task 2: Handle the addTopping event here
    // <-- Your code here -->
  }

  function handleOrder() {
     if (cart.length === 0) return;

    const audio = new Audio(order_confirm);
    audio.play();
    const toppings = cart.map((item) => item.name).join(", ");
    alert(`Your Pizza with ${toppings} will be baked🍕🎉`);
    cart = [];
  }
</script>

<main>
  <h1>Create Your Own Super Mario Pizza!</h1>
  <PizzaList on:addTopping={handleAddPizza} />
  <OrderSummary {cart} on:removeTopping={(event) => {
    // Task 4: Implement the inline handler to delete orders
    // <-- Your code here -->
  }} />
  <OrderButton /> <!--Task 5: Pass the handleOrder function to the forwarded on:click event from OrderButton-->
</main>
```

**OrderSummary.svelte**

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  export let cart;

  const dispatch = createEventDispatcher(); //

  function removeTopping(id) {
    dispatch('removeTopping', { id });
  }
</script>

<h2>Your Order:</h2>
<div class="container">
  <ul>
    {#each cart as item (item.id)}
      <li>
        {item.emoji} {item.name}
        <button on:click={() => removeTopping(item.id)}>x</button>
      </li>
    {/each}
  </ul>
</div>
```

**OrderButton.svelte**

```svelte
<!-- Task 5: Forward the click event to handleOrder in App.svelte -->
<button on:click> Complete Order </button>
```
