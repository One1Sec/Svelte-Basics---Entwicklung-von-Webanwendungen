<script>
  import { createEventDispatcher } from 'svelte';
  export let cart;

  const dispatch = createEventDispatcher(); 

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

<style>
  .container {
    background: white;
    border-radius: 15px;
    padding: 20px;
    min-width: 250px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0;
  }
  li {
    width: 200px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  button {
    background: none;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
  }
</style>