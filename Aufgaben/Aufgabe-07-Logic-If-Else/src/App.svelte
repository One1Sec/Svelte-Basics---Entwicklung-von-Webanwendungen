<script>
  let count = 0;

function increment() {
  count += 1;
}
</script>

<main>

<h1>Mario & Luigi's Pizza</h1>

<button on:click={increment}>
  Add Yoshi's Veggi to cart
</button>

<button on:click={increment}>
  Add Goomba's Special to cart
</button>

<button on:click={increment}>
  Add Peach's Favourite to cart
</button>

<p>There are {count} pizzas in your cart.</p>

<!-- Ergänze hier die Bedingungen -->

</main>

<style>

main {
  font-family: "Comic Sans MS", cursive;
   text-align: center;
   background-color: #e3caa5;
   padding: 50px;
}
button {
  background-color: #fc4100;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  }
 button:hover {
    background-color: #c40c0c;
 }

</style>
