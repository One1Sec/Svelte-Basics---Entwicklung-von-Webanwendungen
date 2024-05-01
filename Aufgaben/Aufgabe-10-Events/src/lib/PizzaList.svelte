<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let toppings = [
    { id: 1, name: "Goomba's Mushroom", emoji: "🍄" },
    { id: 2, name: "Yoshi's Peppers", emoji: "🌶️" },
    { id: 3, name: "Bowser's Hot Sauce", emoji: "🔥" },
    { id: 4, name: "Peach's Pineapple", emoji: "🍍" },
  ];

  function addToPizza(topping) {
    // Aufgabe 1: Dispatche ein Event mit den Topping als Parameter
  }
</script>

<ul>
  {#each toppings as topping (topping.id)}
    <li>
      <button on:click={() => addToPizza(topping)}>
        Add {topping.emoji}
        {topping.name}
      </button>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  button {
    width: 200px;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
</style>
