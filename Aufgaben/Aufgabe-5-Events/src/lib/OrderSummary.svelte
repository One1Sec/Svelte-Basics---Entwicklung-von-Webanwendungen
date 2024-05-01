<script>
  export let orderList = [];
</script>

{#if orderList.length > 0}
  <div>
    <h2>Your Order:</h2>
    <ul>
      {#each orderList as item}
        <li>{item}</li>
      {/each}
    </ul>
    <button on:click>Order Now</button>
    <!-- Dom event forwarding -->
  </div>
{/if}

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background: #f0f0f0;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    font-size: smaller;
    color: #008000;
  }

  button {
    padding: 10px 20px;
    background-color: #008000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #005700;
  }
</style>
