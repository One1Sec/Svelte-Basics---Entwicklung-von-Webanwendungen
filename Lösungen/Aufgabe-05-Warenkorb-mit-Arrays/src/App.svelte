<script>
  
  let description = "Mario & Luigi's pizza service only uses <strong>fresh and local</strong> products 🍕🥦";
  
  const pizzaGoomba = {id: 1, name:"Goomba's Special", price:8.00}
  const pizzaJoshi = {id: 2, name:"Joshi's Veggi", price:6.50}

  let pizzaCart = []
  let totalPrice = 0.00
  let orderLimitReached = false

  const src = "images/image.png"
  const alt = "Mario and Luigi with a Pizza"

  //function to add a pizza to the array
  function addPizzaToCart(pizza){
    if(orderLimitReached){
      alert("You can't order more than 10 Pizzas");
    }else {
      pizzaCart = [...pizzaCart,pizza]
    }
  }
  
  $: totalPrice = pizzaCart.reduce((acc, pizza) => acc + pizza.price, 0);
  
  $: pizzaJoshiCount = pizzaCart.reduce((acc, pizza) => {
    if(pizza.id == 1){ 
      acc += 1
    }
    return acc
  }, 0);

  $: pizzaGoombaCount = pizzaCart.reduce((acc, pizza) => {
    if(pizza.id == 2){ 
      acc += 1
    }
    return acc
  }, 0);

  $: pizzaList = "" 
    + ((pizzaJoshiCount > 0) ? pizzaJoshiCount + " x " + pizzaJoshi.name + "<br>": "")
    + ((pizzaGoombaCount > 0)? pizzaGoombaCount + " x " + pizzaGoomba.name: "")
  
  $: if (pizzaGoombaCount+pizzaJoshiCount >= 10) {
    orderLimitReached = true
  }
</script>

<main>
  <div id="header">
    <h1>Mario & Luigi's Pizza</h1>
    <p>{@html description}</p>
    <img id="logo" {src} {alt}/>
  </div>
  <div id="cart">
    <h3>Our Menu </h3>
    <button on:click = {() => addPizzaToCart(pizzaGoomba)}>{ pizzaGoomba.name}</button>
    <button on:click = {() => addPizzaToCart(pizzaJoshi)}>{ pizzaJoshi.name}</button>
    <h3>Cart</h3>
    <p>{@html pizzaList}</p>
    <p>Total price: {totalPrice} Euro</p>
  </div>
</main>

<style>
  #logo {
    border-radius: 50%;
    width: 200px; /* Anpassen der Breite und Höhe des Bildes */
    height: 200px;
    object-fit: cover;
  }

  #cart {
    background-color: white;
    padding: 30px;
  }
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
