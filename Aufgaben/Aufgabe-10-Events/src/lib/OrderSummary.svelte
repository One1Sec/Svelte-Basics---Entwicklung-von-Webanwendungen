<script>
  export let cart;

  // Aufgabe 3: Initialisiere den Dispatcher.

  // Aufgabe 3: Implementiere die Funktion zum Dispatchen des Custom Events 'removeTopping' mit der ID als Parameter.
</script>

<h2>Your Order:</h2>
<div class="container">
  <ul>
    {#each cart as item (item.id)}
      <li>
        {item.emoji}
        {item.name}
        <!-- Aufgabe 3: Rufe die Funktion `removeTopping` auf und übergebe die ID des items beim Klicken. -->
        <button on:click={() => null}>x</button>
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
